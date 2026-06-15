"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _cloneDeep = require("lodash/cloneDeep");
var _sortBy = require("lodash/sortBy");
var _identity = require("lodash/identity");
var _defaultsDeep = require("lodash/defaultsDeep");
var _defaults = require("lodash/defaults");
var catastrophic_1 = require("catastrophic");
var BLK = require("../block_types");
var T = require("../basic_types");
var MAIN_PROGRAM_ID = '__main__';
var EvalResultType;
(function (EvalResultType) {
    EvalResultType[EvalResultType["Break"] = 0] = "Break";
    EvalResultType[EvalResultType["Done"] = 1] = "Done";
    EvalResultType[EvalResultType["Yield"] = 2] = "Yield";
    EvalResultType[EvalResultType["Finish"] = 3] = "Finish";
    EvalResultType[EvalResultType["EvalArg"] = 4] = "EvalArg";
    EvalResultType[EvalResultType["EvalChild"] = 5] = "EvalChild";
    EvalResultType[EvalResultType["EvalWarp"] = 6] = "EvalWarp";
    EvalResultType[EvalResultType["EvalTell"] = 7] = "EvalTell";
    EvalResultType[EvalResultType["ProcedureCall"] = 8] = "ProcedureCall";
    EvalResultType[EvalResultType["ProcedureReturn"] = 9] = "ProcedureReturn";
})(EvalResultType || (EvalResultType = {}));
// TODO PERF for each EMPTY_DONE, check if it can be _NOYIELD
// (also check manual { kind: ..done ...} returns
var EMPTY_DONE = {
    kind: EvalResultType.Done,
    has_value: false,
    value: undefined,
    never_needs_to_yield: false,
};
var EMPTY_DONE_NOYIELD = {
    kind: EvalResultType.Done,
    has_value: false,
    value: undefined,
    never_needs_to_yield: true,
};
/**
 * An interpreter for one tree of compiled blocks
 */
var DebugRunner = /** @class */ (function () {
    function DebugRunner(util, ohno, event_bus, run_mgr, block_pool, domain_functions, compiled_block, priorities, original_identities, group_id, should_report_current_running_block, max_procedure_calls_per_interpreter_step, max_warp_iterations_per_interpreter_step, warp_interpreter_millisecond_time_limit, max_call_stack_size, tell_should_ensure_entity_exists, deterministic, is_warped, action_parameters, on_finished) {
        var _this = this;
        this.util = util;
        this.ohno = ohno;
        this.event_bus = event_bus;
        this.run_mgr = run_mgr;
        this.block_pool = block_pool;
        this.domain_functions = domain_functions;
        this.priorities = priorities;
        this.original_identities = original_identities;
        this.max_procedure_calls_per_interpreter_step = max_procedure_calls_per_interpreter_step;
        this.max_warp_iterations_per_interpreter_step = max_warp_iterations_per_interpreter_step;
        this.warp_interpreter_millisecond_time_limit = warp_interpreter_millisecond_time_limit;
        this.max_call_stack_size = max_call_stack_size;
        this.tell_should_ensure_entity_exists = tell_should_ensure_entity_exists;
        this.deterministic = deterministic;
        this.is_warped = is_warped;
        this.action_parameters = action_parameters;
        this.on_finished = on_finished;
        this.should_report_current_running_block = false;
        this.n_warp_iterations = 0;
        this.n_procedure_calls = 0;
        this.warp_tick_start = 0;
        this.current_frame = undefined;
        this.return_after_final_yield = false;
        this.eval_repeat_forever = function () { return undefined; };
        this.eval_repeat_n_times = function (b, s) {
            var has_times = get_or_setdef(s, 'has_times', false);
            if (has_times == false) {
                if (_this.needs_eval_params()) {
                    var param_eval_res = _this.eval_params();
                    if (param_eval_res != undefined) {
                        return param_eval_res;
                    }
                }
            }
            s.has_times = true;
            var n_times_done = get_or_setdef(s, 'n_times_done', 0);
            var n_times = s.param_meta.args.times;
            if (n_times_done >= n_times) {
                return EMPTY_DONE;
            }
            s.n_times_done += 1;
            return undefined;
        };
        this.eval_repeat_forever_until = function (b, s) {
            if (_this.needs_eval_params()) {
                var param_eval_res = _this.eval_params();
                if (param_eval_res != undefined) {
                    return param_eval_res;
                }
            }
            var condition = s.param_meta.args.condition;
            // Recalculate condition after every yield
            s.param_meta = null;
            if (condition) {
                return EMPTY_DONE;
            }
            return undefined;
        };
        this.root_block = compiled_block;
        this.metadata = {
            priorities: priorities,
            original_identities: original_identities,
            typeclass_id: original_identities.typeclass_id,
            interpreter_id: original_identities.interpreter_id,
            type: compiled_block.type,
            group_id: group_id,
        };
        this.should_report_current_running_block = should_report_current_running_block;
        this.program_state = this.empty_state(original_identities.target_entity, is_warped);
    }
    DebugRunner.prototype.reset = function () {
        this.return_after_final_yield = false;
        this.program_state = this.empty_state(this.original_identities.target_entity, this.is_warped);
    };
    DebugRunner.prototype.dispose = function () {
        // Do nothing, since we don't take ownership of the script ast
    };
    DebugRunner.prototype.is_inside_warp = function () {
        return this.is_warped || this.current_frame.is_warped || this.current_frame.n_warp_parents > 0;
    };
    DebugRunner.prototype.step = function () {
        if (this.return_after_final_yield) {
            return T.StepResult.finished;
        }
        this.n_warp_iterations = 0;
        this.n_procedure_calls = 0;
        if (!this.deterministic) {
            this.warp_tick_start = this.run_mgr.wall_clock_now();
        }
        this.run_mgr.set_current_interpreter_not_blocked();
        try {
            return this.do_step();
        }
        catch (e) {
            // Append interpreter_stack to any caught errors
            var error_metadata = {
                interpreter_id: this.original_identities.interpreter_id,
                interpreter_stack: this.get_current_stack(),
            };
            if (e instanceof catastrophic_1.Catastrophe) {
                e.annotation = e.annotation || {};
                e.annotation = _defaultsDeep(e.annotation, error_metadata);
                throw e;
            }
            throw this.ohno.system.unknown_system_error(e, error_metadata);
        }
    };
    DebugRunner.prototype.get_stack_frame = function () {
        var frame = peek(this.program_state.proc_stack);
        if (frame == undefined) {
            throw this.ohno.system.procedure_popped_empty_call_stack({
                // best guess, could be wrong if we were in a procedure,
                // or if we're in a tell block, or similar
                source_map_rbid: this.original_identities.source_map_rbid,
                source_entity_id: this.original_identities.source_map_entity,
                block: this.current_block,
                block_id: this.current_block == undefined ? undefined : this.current_block.id,
                block_type: this.current_block == undefined ? undefined : this.current_block.type,
            });
        }
        return frame;
    };
    DebugRunner.prototype.do_step = function () {
        var frame = this.get_stack_frame();
        this.current_frame = frame;
        this.current_block = frame.current_block;
        this.program_state.proc_stack_changed = false;
        while (true) {
            if (this.program_state.proc_stack_changed) {
                this.program_state.proc_stack_changed = false;
                frame = this.get_stack_frame();
                this.current_frame = frame;
                this.current_block = frame.current_block;
                if (this.n_procedure_calls > this.max_procedure_calls_per_interpreter_step) {
                    return T.StepResult.yielding;
                }
            }
            // Run one block
            var res = this.step_eval_dispatch();
            if (res === EvalResultType.Yield) {
                // yield, run this block again next time
                return T.StepResult.yielding;
            }
            if (res === EvalResultType.Finish) {
                // The block said all was done, so it's done.
                return T.StepResult.finished;
            }
            if (res === EvalResultType.Break) {
                var parent_loop = this.util.block.get_first_ancestor_satisfying(this.current_block, this.util.block.is.loop_block);
                if (parent_loop == undefined) {
                    throw this.ohno.user.break_with_bad_parent(tslib_1.__assign({}, this.get_catastrophe_dict()));
                }
                var loop_data = this.current_frame.dynamic_data[parent_loop.id];
                var break_cache = loop_data.break_cache;
                this.current_frame.n_warp_parents = break_cache.n_warp_parents;
                this.current_frame.target_entity_id = break_cache.target_entity_id;
                this.reset_subtree_state(parent_loop);
                this.current_block = parent_loop;
                this.current_frame.current_block = parent_loop;
                var could_go_next = this.go_next_or_parent();
                if (could_go_next == false) {
                    if (this.pop_stack_or_finish()) {
                        this.program_state.proc_stack_changed = true;
                        continue;
                    }
                    return T.StepResult.finished;
                }
                continue;
            }
            if (res.kind == EvalResultType.Done) {
                var guarantee_no_yield = res.never_needs_to_yield;
                var has_value = res.has_value;
                var value = res.value;
                var b = this.current_block;
                if (has_value) {
                    this.program_state.expression_return_value = value;
                    this.program_state.has_expression_return_value = true;
                    if (value != undefined && !b.parent_block && !this.util.block.is.procedures_callnoreturn(b)) {
                        this.event_bus.runtime_data.block_run_result.send({
                            root_block_id: this.original_identities.interpreter_id,
                            block_id: b.id,
                            result: value,
                        });
                    }
                }
                // reset block
                this.current_frame.dynamic_data[this.current_block.id] = {};
                var must_yield = guarantee_no_yield ? false : this.must_yield();
                var could_go_next = this.go_next_or_parent();
                if (could_go_next == false) {
                    if (this.pop_stack_or_finish()) {
                        this.program_state.proc_stack_changed = true;
                        continue;
                    }
                    if (must_yield) {
                        // The last block in a block scope required a yield,
                        // so that any tasks depending on this interpreter have
                        // time to finish
                        // TODO coordinate with Clients to make tasks survive their interpreters?
                        this.return_after_final_yield = true;
                        return T.StepResult.yielding;
                    }
                    return T.StepResult.finished;
                }
                if (must_yield) {
                    return T.StepResult.yielding;
                }
                continue;
            }
            // TODO merge all these eval cases? consider debugging implications
            if (res.kind == EvalResultType.EvalArg) {
                // DO NOT reset block
                this.current_frame.current_block = res.block;
                this.current_block = res.block;
                continue;
            }
            if (res.kind == EvalResultType.EvalChild) {
                // DO NOT reset block
                this.current_frame.current_block = res.block;
                this.current_block = res.block;
                continue;
            }
            if (res.kind == EvalResultType.EvalTell) {
                // note how async tell doesn't even return one of these
                // DO NOT reset block
                this.current_frame.current_block = res.block;
                this.current_block = res.block;
                continue;
            }
            if (res.kind == EvalResultType.EvalWarp) {
                // DO NOT reset block
                this.current_frame.current_block = res.block;
                this.current_block = res.block;
                continue;
            }
            if (res.kind == EvalResultType.ProcedureCall) {
                this.push_onto_proc_stack(res.proc_id, res.parameters, this.current_frame.target_entity_id, this.current_block.id);
                continue;
            }
            if (res.kind == EvalResultType.ProcedureReturn) {
                if (this.program_state.proc_stack.length < 2) {
                    // Stack doesn't look correct.
                    if (this.current_frame == undefined) {
                        // We may not have a current_block ? Use original_identities if so
                        throw this.ohno.user.procedure_return_outside({
                            source_map_rbid: this.original_identities.source_map_rbid,
                            source_entity_id: this.original_identities.source_map_entity,
                            block: this.current_block,
                            block_id: this.current_block == undefined ? undefined : this.current_block.id,
                            block_type: this.current_block == undefined ? undefined : this.current_block.type,
                        });
                    }
                    throw this.ohno.user.procedure_return_outside(tslib_1.__assign({}, this.get_catastrophe_dict()));
                }
                this.program_state.proc_stack.pop();
                if (res.has_return_value) {
                    this.program_state.proc_has_return_value = true;
                    this.program_state.proc_return_value = res.return_value;
                }
                else {
                    this.program_state.proc_has_return_value = false;
                    this.program_state.proc_return_value = undefined;
                }
                this.program_state.proc_stack_changed = true;
                continue;
            }
            throw assert_unreachable(res, this.ohno.system.unhandled_run_block_result(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { block_result: res })));
        }
    };
    // TODO improve types in debug runner utility functions
    // returns undefined when not a simple/pure value type block
    DebugRunner.prototype.get_value = function (b, parent) {
        if (b == undefined || b == null) {
            throw this.ohno.system.undefined_or_null_block(tslib_1.__assign({}, this.get_catastrophe_dict(parent)));
        }
        try {
            // Atomics (a block with a number, string..)
            if (this.util.block.is.compiled_block(b) && BLK.ATOMIC_BLOCKS[b.type]) {
                return b.params[Object.keys(b.params)[0]];
            }
            // Pure Values (number, string..)
            // TODO is.atomic is not used in Opti and can probably be removed???
            if (this.util.block.is.atomic(b)) {
                return b;
            }
        }
        catch (e) {
            throw this.ohno.user.error_constructing_value_from_atomic_block(e, tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { param: b }));
        }
        return undefined;
    };
    DebugRunner.prototype.step_eval_dispatch = function () {
        var b = this.current_block;
        // First check for non-block values (atomics, pure values)
        // Then check for kinds
        // then check for types
        // TODO PERF This step_eval_dispatch has a lot of optimization opportunities
        // General check
        if (b.disabled) {
            return EMPTY_DONE_NOYIELD;
        }
        // Kind checks
        if (this.util.block.is.responder_block(b)
            || this.util.block.is.lifetime_responder_type(b.type)) {
            return this.eval_child_or_done(b, EvalResultType.EvalChild);
        }
        if (this.util.block.is.event_block(b)) {
            return this.eval_event();
        }
        if (this.util.block.is.cond_block(b)) {
            return this.eval_cond();
        }
        // Type checks
        // This must be checked before is.domain_block
        if (this.util.block.is.logic_empty(b)) {
            return {
                kind: EvalResultType.Done,
                has_value: true,
                value: false,
                never_needs_to_yield: true,
            };
        }
        if (this.util.block.is.domain_block(b)) {
            return this.eval_domain();
        }
        if (this.util.block.is.break(b)) {
            return EvalResultType.Break;
        }
        if (this.util.block.is.repeat_forever(b)) {
            return this.eval_repeat_template(this.eval_repeat_forever);
        }
        if (this.util.block.is.repeat_n_times(b)) {
            return this.eval_repeat_template(this.eval_repeat_n_times);
        }
        if (this.util.block.is.repeat_forever_until(b)) {
            return this.eval_repeat_template(this.eval_repeat_forever_until);
        }
        if (this.util.block.is.wait_until(b)) {
            return this.eval_wait_until();
        }
        if (this.util.block.is.procedures_callreturn(b)) {
            return this.eval_procedures_callreturn();
        }
        if (this.util.block.is.procedures_defnoreturn(b)) {
            return this.eval_procedures_defnoreturn();
        }
        if (this.util.block.is.procedures_parameter(b)) {
            return this.eval_procedures_parameter();
        }
        if (this.util.block.is.procedures_return_value(b)) {
            return this.eval_procedures_return_value();
        }
        if (this.util.block.is.procedures_callnoreturn(b)) {
            return this.eval_procedures_callnoreturn();
        }
        if (this.util.block.is.sync_tell(b)) {
            return this.eval_sync_tell();
        }
        if (this.util.block.is.async_tell(b)) {
            return this.eval_async_tell();
        }
        if (this.util.block.is.warp(b)) {
            return this.eval_warp();
        }
        // TODO better error here
        throw assert_unreachable(b, this.ohno.system.unknown_system_error(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { unhandled_block_type: b })));
    };
    DebugRunner.prototype.eval_child_or_done = function (b, kind) {
        var child = b.child_block[0];
        if (child == undefined) {
            return EMPTY_DONE;
        }
        var s = this.get_block_state(b.id);
        var has_run_child = get_or_setdef(s, 'has_run_child', false);
        if (has_run_child) {
            return EMPTY_DONE;
        }
        s.has_run_child = true;
        return {
            kind: kind,
            block: child,
        };
    };
    DebugRunner.prototype.eval_cond = function () {
        var b = this.current_block;
        var children = b.child_block;
        var conditions;
        if (this.util.block.is.controls_if_dropdown(b)) {
            conditions = b.if_dropdown_conditions;
        }
        else {
            conditions = b.conditions;
        }
        var n_children = children.length;
        var n_conditions = conditions.length;
        if (n_children == 0 || n_conditions == 0) {
            return EMPTY_DONE;
        }
        var s = this.get_block_state(b.id);
        var done = get_or_setdef(s, 'done', false);
        if (done) {
            return EMPTY_DONE;
        }
        var waiting = get_or_setdef(s, 'waiting', false);
        var waiting_dropdown = get_or_setdef(s, 'waiting_dropdown', false);
        var branch_n = get_or_setdef(s, 'branch_n', 0);
        if (waiting) {
            // was waiting for value
            s.waiting = false;
            var _a = this.consume_previous_expression_value(), value = _a.value, has_value = _a.has_value;
            if (has_value == false) {
                throw this.ohno.compiler.user.disabled_param(tslib_1.__assign({}, this.get_catastrophe_dict()));
            }
            if (value) {
                s.done = true;
                var branch = b.child_block[branch_n];
                if (branch == undefined) {
                    return EMPTY_DONE;
                }
                return {
                    kind: EvalResultType.EvalChild,
                    block: branch,
                };
            }
            // conditional was false, try next
            branch_n += 1;
            s.branch_n += 1;
        }
        if (waiting_dropdown) {
            // If a dropdown domain function yielded, we'll end up here.
            // We'll need to re-enter the domain function evaluation and
            // check if we got a result this time. Otherwise yield again.
            var r = this.eval_domain();
            var is_done = r.kind != undefined && r.kind == EvalResultType.Done;
            if (!is_done) {
                return r;
            }
            s.waiting_dropdown = false;
            if (r.has_value && r.value) {
                // Domain function evaluated to true
                s.done = true;
                var branch = b.child_block[branch_n];
                if (branch == undefined) {
                    return EMPTY_DONE;
                }
                return {
                    kind: EvalResultType.EvalChild,
                    block: branch,
                };
            }
            else {
                // Domain function evaluated to false
                branch_n += 1;
                s.branch_n += 1;
            }
        }
        while (branch_n < n_children && branch_n < n_conditions) {
            var condition = conditions[branch_n];
            if (children[branch_n] == undefined || condition == undefined) {
                branch_n += 1;
                s.branch_n += 1;
                continue;
            }
            // block is normal condition block, not if_dropdown
            if (typeof condition !== 'string') {
                s.waiting = true;
                return {
                    kind: EvalResultType.EvalArg,
                    block: condition,
                };
            }
            else {
                // block is controls_if_dropdown, we need to evaluate the domain function
                s.domain_function = condition;
                var r = this.eval_domain();
                var is_done = r.kind != undefined && r.kind == EvalResultType.Done;
                if (!is_done) {
                    s.waiting_dropdown = true;
                    return r;
                }
                if (r.has_value && r.value) {
                    // Domain function evaluated to true
                    s.done = true;
                    var branch = b.child_block[branch_n];
                    if (branch == undefined) {
                        return EMPTY_DONE;
                    }
                    return {
                        kind: EvalResultType.EvalChild,
                        block: branch,
                    };
                }
                else {
                    // Domain function evaluated to false
                    branch_n += 1;
                    s.branch_n += 1;
                    continue;
                }
            }
        }
        if (n_children == n_conditions + 1) {
            // There's an else branch, and none of the conds were true
            s.done = true;
            var else_branch = b.child_block[n_children - 1];
            if (else_branch == undefined) {
                return EMPTY_DONE;
            }
            return {
                kind: EvalResultType.EvalChild,
                block: else_branch,
            };
        }
        return EMPTY_DONE;
    };
    DebugRunner.prototype.eval_event = function () {
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        var child = b.child_block[0];
        if (child == undefined) {
            return EvalResultType.Finish;
        }
        var should_reset = get_or_setdef(s, 'should_reset', false);
        if (should_reset) {
            // We've run the domain function and finished running the child
            if (BLK.EVENT_BLOCKS[b.type] == BLK.EVENT_BLOCKS.start_as_a_mirror) {
                // We're a start as mirror block and should only run once
                return EvalResultType.Finish;
            }
            this.current_frame.dynamic_data[b.id] = {};
            return EvalResultType.Yield;
        }
        var r = this.eval_domain();
        var is_done = r.kind != undefined && r.kind == EvalResultType.Done;
        if (!is_done) {
            return r;
        }
        if (r.has_value && r.value) {
            s.should_reset = true;
            return {
                kind: EvalResultType.EvalChild,
                block: child,
            };
        }
        this.current_frame.dynamic_data[b.id] = {};
        return EvalResultType.Yield;
    };
    DebugRunner.prototype.eval_repeat_template = function (other_than_done) {
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        var child = b.child_block[0];
        if (child == undefined) {
            return EMPTY_DONE_NOYIELD;
        }
        var first_entry = get_or_setdef(s, 'first_entry', true);
        if (first_entry) {
            s.break_cache = {
                n_warp_parents: this.current_frame.n_warp_parents,
                target_entity_id: this.current_frame.target_entity_id,
            };
            s.first_entry = false;
        }
        var should_yield = get_or_setdef(s, 'should_yield', false);
        if (should_yield) {
            s.should_yield = false;
            return EvalResultType.Yield;
        }
        var inner_eval_res = other_than_done(b, s);
        if (inner_eval_res != undefined) {
            return inner_eval_res;
        }
        s.should_yield = true;
        if (this.is_inside_warp()) {
            if (this.n_warp_iterations < this.max_warp_iterations_per_interpreter_step) {
                this.n_warp_iterations += 1;
                s.should_yield = false;
            }
            if (!this.deterministic && !should_yield) {
                var time_limit = this.warp_tick_start + this.warp_interpreter_millisecond_time_limit;
                var went_over_time = time_limit < this.run_mgr.wall_clock_now();
                s.should_yield = went_over_time;
            }
        }
        return {
            kind: EvalResultType.EvalChild,
            block: child,
        };
    };
    DebugRunner.prototype.eval_wait_until = function () {
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var condition = s.param_meta.args.condition;
        // Recalculate condition after every yield
        s.param_meta = null;
        if (condition) {
            return EMPTY_DONE;
        }
        return EvalResultType.Yield;
    };
    DebugRunner.prototype.eval_procedures_callreturn = function () {
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        var has_called = get_or_setdef(s, 'has_called', false);
        if (has_called) {
            var _a = this.program_state, proc_has_return_value = _a.proc_has_return_value, proc_return_value = _a.proc_return_value;
            return {
                kind: EvalResultType.Done,
                has_value: proc_has_return_value,
                value: proc_return_value,
                never_needs_to_yield: false,
            };
        }
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var param_meta = s.param_meta;
        var args = param_meta.args;
        s.has_called = true;
        return {
            kind: EvalResultType.ProcedureCall,
            proc_id: b.procedure_name,
            parameters: args,
        };
        // TODO Only push procedure parameters, not all the other
        // things that end up in the compile_params dictionary
    };
    DebugRunner.prototype.eval_procedures_callnoreturn = function () {
        return this.eval_procedures_callreturn();
    };
    DebugRunner.prototype.push_onto_proc_stack = function (procedure_id, parameters, target_entity_id, caller_bid) {
        var proc_stack = this.program_state.proc_stack;
        if (proc_stack.length > this.max_call_stack_size) {
            throw this.ohno.system.stack_overflow(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { procedure_id: procedure_id }));
        }
        var proc = this.run_mgr.get_procedure(procedure_id);
        if (proc == undefined) {
            throw this.ohno.user.call_undefined_procedure(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { procedure_id: procedure_id }));
        }
        proc_stack.push(this.empty_stack_frame(procedure_id, this.current_frame.target_entity_id, proc.script, this.is_inside_warp(), parameters, proc.source_entity_id, proc.script.id, this.current_block.id));
        this.n_procedure_calls += 1;
        this.program_state.proc_stack_changed = true;
    };
    DebugRunner.prototype.eval_procedures_defnoreturn = function () {
        var b = this.current_block;
        return this.eval_child_or_done(b, EvalResultType.EvalChild);
    };
    DebugRunner.prototype.eval_procedures_parameter = function () {
        if (this.program_state.proc_stack.length < 2) {
            throw this.ohno.user.procedure_parameter_outside(tslib_1.__assign({}, this.get_catastrophe_dict()));
        }
        var b = this.current_block;
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var s = this.get_block_state(b.id);
        var param_meta = s.param_meta;
        var param_name = param_meta.args.param_name || '';
        var proc_params = this.current_frame.proc_parameters;
        if ((param_name in proc_params) == false) {
            throw this.ohno.user.procedure_no_such_parameter(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { args: param_meta.args, param_name: param_name }));
        }
        var param_value = proc_params[param_name];
        if (param_value == undefined) {
            throw this.ohno.user.proc_parameter_without_value(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { args: param_meta.args, param_name: param_name }));
        }
        return {
            kind: EvalResultType.Done,
            value: param_value,
            has_value: true,
            never_needs_to_yield: false,
        };
    };
    DebugRunner.prototype.eval_procedures_return_value = function () {
        var b = this.current_block;
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var s = this.get_block_state(b.id);
        var param_meta = s.param_meta;
        var args = param_meta.args;
        var return_value = args['VALUE'];
        return {
            kind: EvalResultType.ProcedureReturn,
            has_return_value: true,
            return_value: return_value,
        };
    };
    DebugRunner.prototype.eval_sync_tell = function () {
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        var child = b.child_block[0];
        if (child == undefined) {
            return EMPTY_DONE_NOYIELD;
        }
        var has_told = get_or_setdef(s, 'has_told', false);
        if (has_told) {
            this.current_frame.target_entity_id = s.previous_target;
            return EMPTY_DONE_NOYIELD;
        }
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var param_meta = s.param_meta;
        var args = param_meta.args;
        var new_target_entity_id = args.sprite;
        var is_ok = this.ensure_tell_target_ok(this.current_block.id, new_target_entity_id);
        if (is_ok == false) {
            return EMPTY_DONE_NOYIELD;
        }
        s.previous_target = this.current_frame.target_entity_id;
        s.has_told = true;
        this.current_frame.target_entity_id = new_target_entity_id;
        return {
            kind: EvalResultType.EvalTell,
            async: false,
            block: child,
        };
    };
    DebugRunner.prototype.eval_async_tell = function () {
        var b = this.current_block;
        if (b === this.root_block.parent_block) {
            // We are inside an async tell interpreter, and just
            // reached the tell block that spawned us. We're finished.
            return EvalResultType.Finish;
        }
        var s = this.get_block_state(b.id);
        var child = b.child_block[0];
        if (child == undefined) {
            return EMPTY_DONE_NOYIELD;
        }
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var param_meta = s.param_meta;
        var args = param_meta.args;
        var new_target_entity_id = args.sprite;
        var is_ok = this.ensure_tell_target_ok(this.current_block.id, new_target_entity_id);
        if (is_ok == false) {
            return EMPTY_DONE_NOYIELD;
        }
        this.run_mgr.spawn_async_tell_interpreter({
            typeclass_id: this.original_identities.typeclass_id,
            interpreter_id: this.original_identities.interpreter_id,
            target_entity: this.current_frame.target_entity_id,
            source_map_entity: this.current_frame.source_map_entity,
            source_map_rbid: this.current_frame.source_map_rbid,
        }, new_target_entity_id, child, this.metadata.group_id, this.is_inside_warp());
        return EMPTY_DONE_NOYIELD;
    };
    DebugRunner.prototype.ensure_tell_target_ok = function (block_id, target_entity) {
        // TODO deduplicate, almost exact same as in in opti runner
        var entity_state = this.run_mgr.get_entity_state(target_entity);
        if (this.tell_should_ensure_entity_exists) {
            if (entity_state == T.EntityState.Destructing) {
                this.run_mgr.report_warning(this.ohno.warning.tell_with_destructing_entity({
                    root_block_id: this.current_frame.source_map_rbid,
                    entity_id: this.current_frame.source_map_entity,
                    block_id: block_id,
                    tell_entity: target_entity,
                }));
                return false;
            }
            else if (entity_state == T.EntityState.Disposed) {
                this.run_mgr.report_warning(this.ohno.warning.tell_with_disposed_entity({
                    root_block_id: this.current_frame.source_map_rbid,
                    entity_id: this.current_frame.source_map_entity,
                    block_id: block_id,
                    tell_entity: target_entity,
                }));
                return false;
            }
            else if (entity_state == T.EntityState.Unknown) {
                throw this.ohno.user.tell_with_unknown_entity(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { tell_entity: target_entity }));
            }
        }
        return true;
    };
    DebugRunner.prototype.eval_warp = function () {
        var b = this.current_block;
        var child = b.child_block[0];
        if (child == undefined) {
            return EMPTY_DONE;
        }
        var s = this.get_block_state(b.id);
        var has_run_child = get_or_setdef(s, 'has_run_child', false);
        if (has_run_child) {
            this.current_frame.n_warp_parents -= 1;
            return EMPTY_DONE;
        }
        s.has_run_child = true;
        this.current_frame.n_warp_parents += 1;
        return {
            kind: EvalResultType.EvalWarp,
            block: child,
        };
    };
    DebugRunner.prototype.eval_domain = function () {
        var _this = this;
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        // The domain function to run is either the block
        // type, or set by the controls_if_dropdown_if
        // block
        var domfun_nsid = get_or_setdef(s, 'domain_function', b.type);
        if (BLK.ATOMIC_BLOCKS[domfun_nsid]) {
            // An atomic block may have been clicked on in the workspace,
            // and they end up identified as domain blocks.
            return {
                kind: EvalResultType.Done,
                has_value: true,
                value: b.params[Object.keys(b.params)[0]],
                never_needs_to_yield: true,
            };
        }
        if (this.needs_eval_params()) {
            var param_eval_res = this.eval_params();
            if (param_eval_res != undefined) {
                return param_eval_res;
            }
        }
        var param_meta = s.param_meta;
        var args = param_meta.args;
        var waiting_on_promise = get_or_setdef(s, 'waiting_on_promise', false);
        var promise_resolved = get_or_setdef(s, 'promise_resolved', false);
        var promise_result = get_or_setdef(s, 'promise_result', undefined);
        if (waiting_on_promise) {
            if (promise_resolved == false) {
                return EvalResultType.Yield;
            }
            return {
                kind: EvalResultType.Done,
                has_value: true,
                value: promise_result,
                never_needs_to_yield: false,
            };
        }
        if (this.domain_functions[domfun_nsid] == undefined) {
            throw this.ohno.system.missing_domain_function(tslib_1.__assign({}, this.get_catastrophe_dict()));
        }
        var domain_fun_result;
        try {
            domain_fun_result = (this.domain_functions[domfun_nsid])(args, this.original_identities.interpreter_id, this.current_frame.target_entity_id, 
            // TODO PERF construct this only once
            {
                runtime_manager: this.run_mgr,
                add_user_procedure_call_to_stack: function (procedure_id, target_entity_id, parameters) {
                    _this.push_onto_proc_stack(procedure_id, parameters, target_entity_id, _this.current_block.id);
                },
                get_action_parameter: function (parameter_id) {
                    if (_this.action_parameters == undefined) {
                        throw _this.ohno.system.unknown_system_error({
                            message: 'Could not get parameter in test block "test action parameter"',
                        });
                    }
                    return _this.action_parameters[parameter_id];
                },
                create_domain_function_error: function (error_properties) {
                    var annotation = {
                        client_annotation: error_properties,
                    };
                    if (error_properties.native_error != undefined) {
                        return _this.ohno.client.domain_function_error(error_properties.native_error, annotation);
                    }
                    return _this.ohno.client.domain_function_error(annotation);
                },
            });
        }
        catch (e) {
            throw this.extend_domain_function_call_error(e, b.id, b.type, this.current_frame.source_map_rbid, this.current_frame.source_map_entity);
        }
        if (domain_fun_result != undefined
            && Promise.resolve(domain_fun_result) === domain_fun_result) {
            // Got a promise
            s.waiting_on_promise = true;
            var target_entity = this.current_frame.target_entity_id;
            var lock_handle_1 = this.run_mgr.get_thread_lock(target_entity, this.original_identities.interpreter_id);
            var run_mgr_1 = this.run_mgr;
            var on_success = function (res_val) {
                s.promise_resolved = true;
                s.promise_result = res_val;
                lock_handle_1.stop();
            };
            var on_fail = function (e) {
                var error = _this.extend_domain_function_call_error(e, b.id, b.type, _this.current_frame.source_map_rbid, _this.current_frame.source_map_entity);
                run_mgr_1.report_error_and_stop(error, 'OptiRunner domain function promise result handler');
            };
            domain_fun_result.then(on_success.bind(this), on_fail.bind(this));
            return EvalResultType.Yield;
        }
        if (domain_fun_result == undefined
            && b.type == 'lists_get_value'
            && this.util.config.get().legacy.lists_get_value_allow_return_undefined) {
            return {
                kind: EvalResultType.Done,
                value: undefined,
                has_value: true,
                never_needs_to_yield: false,
            };
        }
        return {
            kind: EvalResultType.Done,
            value: domain_fun_result,
            has_value: domain_fun_result != undefined,
            never_needs_to_yield: false,
        };
    };
    DebugRunner.prototype.needs_eval_params = function () {
        var b = this.current_block;
        var param_keys = Object.keys(b.params);
        if (b.params.length == 0) {
            return false;
        }
        var s = this.get_block_state(b.id);
        var param_meta = s.param_meta;
        if (param_meta == null || param_meta == undefined) {
            if (this.deterministic) {
                param_keys = _sortBy(param_keys, _identity);
            }
            param_meta = {
                keys: param_keys,
                n_keys: param_keys.length,
                n_done: 0,
                values: [],
                waiting_for_value: false,
                args: {},
            };
            s.param_meta = param_meta;
            return true;
        }
        return param_meta.n_keys >= param_meta.n_done;
    };
    // Returns undefined when done
    DebugRunner.prototype.eval_params = function () {
        var b = this.current_block;
        var s = this.get_block_state(b.id);
        var param_meta = s.param_meta;
        if (param_meta.waiting_for_value) {
            // We returned after dispatching evaluation of a child block
            var _a = this.consume_previous_expression_value(), value = _a.value, has_value = _a.has_value;
            if (has_value == false) {
                throw this.ohno.user.procedure_used_return_undefined(tslib_1.__assign({}, this.get_catastrophe_dict()));
            }
            param_meta.values.push(value);
            param_meta.waiting_for_value = false;
            param_meta.n_done += 1;
        }
        while (true) {
            if (param_meta.n_keys <= param_meta.n_done) {
                // We're all done, consolidate args into one dict
                for (var i = 0; i < param_meta.n_keys; i++) {
                    var key = param_meta.keys[i];
                    var val = param_meta.values[i];
                    param_meta.args[key] = val;
                }
                return undefined;
            }
            var p_key = param_meta.keys[param_meta.n_done];
            var p = b.params[p_key];
            if (this.util.block.is.compiled_block(p) && p.disabled) {
                throw this.ohno.compiler.user.disabled_param(new Error(), tslib_1.__assign({}, this.get_catastrophe_dict(p)));
            }
            // Unpack if this is a pure value or atomic block
            var maybe_simple = this.get_value(p, b);
            if (maybe_simple != undefined) {
                // Got an unpacked value
                param_meta.values.push(maybe_simple);
                param_meta.n_done += 1;
                continue;
            }
            // It was a CompiledBlock, dispatch evaluation of it
            param_meta.waiting_for_value = true;
            return {
                kind: EvalResultType.EvalArg,
                block: p,
            };
        }
    };
    DebugRunner.prototype.next_block = function () {
        var b = this.current_block;
        if (b.next_block != undefined) {
            return b.next_block;
        }
        if (b.parent_block != undefined) {
            return b.parent_block;
        }
        return undefined;
    };
    DebugRunner.prototype.must_yield = function () {
        var must_yield = this.run_mgr.current_interpreter_must_yield(this.original_identities.interpreter_id, this.metadata.group_id);
        return must_yield;
    };
    DebugRunner.prototype.go_next_or_parent = function () {
        var next = this.next_block();
        if (next == undefined) {
            return false;
        }
        this.current_frame.current_block = next;
        this.current_block = next;
        return true;
    };
    DebugRunner.prototype.pop_stack_or_finish = function () {
        this.program_state.proc_stack.pop();
        var frame_below = peek(this.program_state.proc_stack);
        if (frame_below == undefined) {
            return false;
        }
        return true;
    };
    DebugRunner.prototype.get_block_state = function (id) {
        var s = this.current_frame.dynamic_data[id];
        if (s == undefined) {
            s = {};
            this.current_frame.dynamic_data[id] = s;
        }
        return s;
    };
    DebugRunner.prototype.reset_subtree_state = function (b) {
        var ids = this.util.block.ast_block_ids(b);
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            this.current_frame.dynamic_data[id] = {};
        }
    };
    DebugRunner.prototype.consume_previous_expression_value = function () {
        if (this.program_state.has_expression_return_value == false) {
            return {
                has_value: false,
                value: undefined,
            };
        }
        this.program_state.has_expression_return_value = false;
        var value = this.program_state.expression_return_value;
        this.program_state.expression_return_value = undefined;
        return {
            has_value: true,
            value: value,
        };
    };
    DebugRunner.prototype.get_current_stack = function () {
        // TODO deduplicate, almost exact same as opti runner
        var frame_stack = this.program_state.proc_stack;
        var res = [];
        for (var i = 0; i < frame_stack.length; i++) {
            var frame = frame_stack[i];
            res.push({
                interpreter_id: this.original_identities.interpreter_id,
                source_entity_id: frame.source_map_entity,
                source_map_rbid: frame.source_map_rbid,
                block_id: frame.current_block.id,
                proc_parameters: _cloneDeep(frame.proc_parameters),
                proc_id: (frame.proc_id === MAIN_PROGRAM_ID) ? undefined : frame.proc_id,
            });
        }
        return res;
    };
    DebugRunner.prototype.get_catastrophe_dict = function (b) {
        var block = b || this.current_block;
        return {
            source_map_rbid: this.current_frame.source_map_rbid,
            source_entity_id: this.current_frame.source_map_entity,
            block: block,
            block_id: block == undefined ? undefined : block.id,
            block_type: block == undefined ? undefined : block.type,
        };
    };
    DebugRunner.prototype.empty_state = function (target_entity_id, is_warped) {
        return {
            proc_stack: [
                this.empty_stack_frame(MAIN_PROGRAM_ID, target_entity_id, this.root_block, is_warped),
            ],
            proc_stack_changed: false,
            has_expression_return_value: false,
            expression_return_value: undefined,
            proc_has_return_value: false,
            proc_return_value: undefined,
        };
    };
    DebugRunner.prototype.empty_stack_frame = function (proc_id, target_entity_id, root_block, is_warped, proc_params, source_map_entity, source_map_rbid, proc_call_bid) {
        var ids = this.util.block.ast_block_ids(root_block);
        var dynamic_data = {};
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            dynamic_data[id] = {};
        }
        return {
            proc_id: proc_id,
            proc_parameters: proc_params || {},
            root_block: root_block,
            current_block: root_block,
            dynamic_data: {},
            target_entity_id: target_entity_id,
            source_map_entity: source_map_entity || this.original_identities.source_map_entity,
            source_map_rbid: source_map_rbid || this.original_identities.source_map_rbid,
            proc_call_bid: proc_call_bid,
            is_warped: is_warped,
            n_warp_parents: 0,
        };
    };
    DebugRunner.prototype.extend_domain_function_call_error = function (e, block_id, function_id, source_map_rbid, source_map_entity) {
        var metadata = {
            block_id: block_id,
            block_type: function_id,
            source_map_rbid: source_map_rbid,
            source_entity_id: source_map_entity,
            interpreter_id: this.original_identities.interpreter_id,
            interpreter_stack: this.get_current_stack(),
        };
        if (e instanceof catastrophic_1.Catastrophe) {
            e.annotation = e.annotation || {};
            _defaults(e.annotation, metadata);
            return e;
        }
        return this.ohno.system.unknown_error_in_domain_function_call(e, metadata);
    };
    return DebugRunner;
}());
exports.DebugRunner = DebugRunner;
function peek(stack) {
    if (stack.length == 0) {
        return undefined;
    }
    return stack[stack.length - 1];
}
/**
 * This function is used to turn a non-exhaustive switch
 * into a compiler error :D
 *
 * @param {never} x The object which you handled cases for
 * @param {Catastrophe} error This error is returned immediately so you can throw it, useful if during runtime, some unhandled case was let through.
 */
function assert_unreachable(x, error) {
    return error;
}
function get_or_setdef(col, key, def) {
    var r = col[key];
    if (r == undefined) {
        col[key] = def;
        return def;
    }
    return r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlYnVnL3J1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBZ0Q7QUFDaEQsdUNBQTBDO0FBQzFDLDJDQUE4QztBQUM5QyxtREFBc0Q7QUFDdEQsMkNBQThDO0FBQzlDLDZDQUEyQztBQUUzQyxvQ0FBc0M7QUFLdEMsa0NBQW9DO0FBTXBDLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQztBQStCbkMsSUFBSyxjQVdKO0FBWEQsV0FBSyxjQUFjO0lBQ2pCLHFEQUFLLENBQUE7SUFDTCxtREFBSSxDQUFBO0lBQ0oscURBQUssQ0FBQTtJQUNMLHVEQUFNLENBQUE7SUFDTix5REFBTyxDQUFBO0lBQ1AsNkRBQVMsQ0FBQTtJQUNULDJEQUFRLENBQUE7SUFDUiwyREFBUSxDQUFBO0lBQ1IscUVBQWEsQ0FBQTtJQUNiLHlFQUFlLENBQUE7QUFDakIsQ0FBQyxFQVhJLGNBQWMsS0FBZCxjQUFjLFFBV2xCO0FBNENELDZEQUE2RDtBQUM3RCxpREFBaUQ7QUFDakQsSUFBTSxVQUFVLEdBQVE7SUFDdEIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO0lBQ3pCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLG9CQUFvQixFQUFFLEtBQUs7Q0FDNUIsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQVE7SUFDOUIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO0lBQ3pCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLG9CQUFvQixFQUFFLElBQUk7Q0FDM0IsQ0FBQztBQTRCRjs7R0FFRztBQUNIO0lBa0JFLHFCQUNZLElBQVcsRUFDWCxJQUFXLEVBQ1gsU0FBMkIsRUFDM0IsT0FBd0IsRUFDeEIsVUFBc0IsRUFDdEIsZ0JBQTZCLEVBRXJDLGNBQTRCLEVBRXBCLFVBQWtDLEVBQ3pCLG1CQUFnQyxFQUNqRCxRQUF5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