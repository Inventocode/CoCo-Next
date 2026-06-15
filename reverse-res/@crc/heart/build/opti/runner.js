"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _cloneDeep = require("lodash/cloneDeep");
var _defaults = require("lodash/defaults");
var catastrophic_1 = require("catastrophic");
var T = require("../basic_types");
function peek(stack) {
    if (stack.length == 0) {
        return undefined;
    }
    return stack[stack.length - 1];
}
var MAIN_PROGRAM_ID = '__main__';
// TODO PERF Remove unused OptiRunner function arguments.
// Should result in smaller code being generated.
var OptiRunner = /** @class */ (function () {
    function OptiRunner(u, ohno, should_pretty_print, tell_should_ensure_entity_exists, should_report_current_running_block, max_procedure_calls_per_interpreter_step, max_warp_iterations_per_interpreter_step, warp_interpreter_millisecond_time_limit, max_call_stack_size, run_mgr, block_pool, frame_pool, program_cache, domain_functions, domain_function_types, original_identities, priorities, program, group_id, compiled_block, is_warped, action_parameters, on_finished) {
        var _this = this;
        this.u = u;
        this.ohno = ohno;
        this.should_pretty_print = should_pretty_print;
        this.tell_should_ensure_entity_exists = tell_should_ensure_entity_exists;
        this.should_report_current_running_block = should_report_current_running_block;
        this.max_procedure_calls_per_interpreter_step = max_procedure_calls_per_interpreter_step;
        this.max_warp_iterations_per_interpreter_step = max_warp_iterations_per_interpreter_step;
        this.warp_interpreter_millisecond_time_limit = warp_interpreter_millisecond_time_limit;
        this.max_call_stack_size = max_call_stack_size;
        this.run_mgr = run_mgr;
        this.block_pool = block_pool;
        this.frame_pool = frame_pool;
        this.program_cache = program_cache;
        this.domain_functions = domain_functions;
        this.domain_function_types = domain_function_types;
        this.original_identities = original_identities;
        this.priorities = priorities;
        this.program = program;
        this.action_parameters = action_parameters;
        this.on_finished = on_finished;
        this.programs = {};
        // This variable is always set in the step function, and is used by the
        // functions called by the OptiFun. We assume that it will always be set
        // correctly, and so avoid a lot of try catch and undefined checks, which
        // have a large negative impact on performance. Measured with the fib perf
        // project:
        // * Total time: 19 % vs 0.3% for step_increment_program_counter
        // * Total time: 6.2% vs 0.1% for step_before_expression
        // We make sure to initialize it in the constructor, so it's part of fast hidden class
        this.current_frame = undefined;
        this.n_warp_iterations = 0;
        this.warp_tick_start = 0;
        this.deterministic_mode = !!u.config.get().deterministic;
        this.metadata = {
            priorities: priorities,
            original_identities: original_identities,
            typeclass_id: original_identities.typeclass_id,
            interpreter_id: original_identities.interpreter_id,
            type: compiled_block.type,
            group_id: group_id,
        };
        this.root_block_type = compiled_block.type;
        this.root_block_id = original_identities.interpreter_id;
        this.step_input_outputs = {
            ohno: this.ohno,
            call_domain_function: this.step_call_domain_function.bind(this),
            report_sync_telling: this.step_report_sync_telling.bind(this),
            async_tell: this.step_async_tell.bind(this),
        };
        this.step_outputs = {
            proc_call: this.step_call_procedure.bind(this),
            before_expression: this.step_before_expression.bind(this),
            after_potential_blocker: this.step_after_potential_blocker.bind(this),
            increment_program_counter: this.step_increment_program_counter.bind(this),
            reset_program_counter: this.step_reset_program_counter.bind(this),
            after_iteration: this.step_iteration_yield.bind(this),
            finished: this.step_finished.bind(this),
            proc_do_return_value: this.step_return_value.bind(this),
            proc_yield_after_call: this.step_yield_to_procedure.bind(this),
        };
        this.domain_function_util = {
            runtime_manager: this.run_mgr,
            add_user_procedure_call_to_stack: function (procedure_id, target_entity_id, parameters) {
                _this.step_call_procedure(procedure_id, target_entity_id, parameters, "__user_defined_procedure__" + procedure_id, false);
            },
            get_action_parameter: this.get_action_parameter.bind(this),
            create_domain_function_error: this.create_domain_function_error.bind(this),
        };
        this.programs[MAIN_PROGRAM_ID] = program;
        // reset must be called after this.program has been assigned
        this.reset(is_warped);
    }
    OptiRunner.prototype.reset = function (is_warped) {
        this.program_state = this.empty_state(this.original_identities.target_entity, is_warped || false);
    };
    OptiRunner.prototype.get_action_parameter = function (parameter_id) {
        if (this.action_parameters == undefined) {
            throw this.ohno.system.unknown_system_error({
                message: 'Could not get parameter in test block "test action parameter"',
            });
        }
        return this.action_parameters[parameter_id];
    };
    OptiRunner.prototype.step_call_procedure = function (function_id, target_entity_id, parameters, proc_call_bid, is_inside_warp) {
        // We won't modify the CompiledBlock structure, and want to use the rbid
        // as a canonic name for the procedure, so set do_clone arg to false.
        var procedure_container = this.run_mgr.get_procedure(function_id, false);
        if (procedure_container == undefined) {
            throw this.u.ohno.user.call_undefined_procedure(tslib_1.__assign({}, this.get_catastrophe_dict(proc_call_bid)));
        }
        var proc_stack = this.program_state.proc_stack;
        if (proc_stack.length > this.max_call_stack_size) {
            throw this.ohno.system.stack_overflow(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict(proc_call_bid)), { procedure_id: function_id }));
        }
        var procedure = this.programs[function_id];
        if (procedure == undefined) {
            // TODO pre-load all procedures when the main program is loaded?
            // (by walking the AST and checking for all function calls)
            procedure = this.program_cache.get_program(procedure_container.script.id, procedure_container.source_entity_id, procedure_container.script.id, this.original_identities.interpreter_id, procedure_container.script);
            this.programs[function_id] = procedure;
        }
        var frame = this.empty_stack_frame(function_id, target_entity_id, procedure, is_inside_warp || this.current_frame.is_warped, parameters, procedure_container.source_entity_id, procedure_container.script.id, proc_call_bid);
        proc_stack.push(frame);
        this.program_state.did_proc_yield = true;
    };
    OptiRunner.prototype.step_yield_to_procedure = function (yield_group_id, next_statement_id) {
        // A function was just called, which has its frame
        // on the top of the stack. We want to increment the
        // program counter for the frame that made that function
        // call.
        var stack = this.program_state.proc_stack;
        var prev_frame = stack[stack.length - 2];
        if (prev_frame != undefined) {
            prev_frame.program_counter[yield_group_id] = next_statement_id;
        }
    };
    OptiRunner.prototype.step_iteration_yield = function (is_inside_warp) {
        // This might return false within a warp block
        var is_warped = this.current_frame.is_warped || is_inside_warp;
        if (!is_warped) {
            return true;
        }
        var should_yield = this.n_warp_iterations > this.max_warp_iterations_per_interpreter_step;
        if (!this.deterministic_mode && !should_yield) {
            // Since we're not in deterministic_mode, it may be that we need to yield
            // if this warping interpreter has run out of wall-clock time
            var time_limit = this.warp_tick_start + this.warp_interpreter_millisecond_time_limit;
            var went_over_time = time_limit < this.run_mgr.wall_clock_now();
            should_yield = went_over_time;
        }
        this.n_warp_iterations++;
        return should_yield;
    };
    OptiRunner.prototype.step_before_expression = function (block_id, source_map_entity, source_map_rbid, yield_group_id, next_statement_id) {
        if (this.should_report_current_running_block) {
            this.run_mgr.set_running_block(source_map_rbid, block_id);
        }
        this.current_frame.program_counter[yield_group_id] = next_statement_id;
        // should return true during breakpoint debugging
        return false;
    };
    OptiRunner.prototype.step_after_potential_blocker = function (block_id, source_map_entity, source_map_rbid, yield_group_id, next_statement_id) {
        // Same as step_before_expression, but does not have an associated
        // block_id, won't yield during breakpoint debugging, and will check
        // if a blocking task was spawned by the previous expression/statement.
        this.current_frame.program_counter[yield_group_id] = next_statement_id;
        var must_yield = this.run_mgr.current_interpreter_must_yield(this.root_block_id, this.metadata.group_id);
        return must_yield || this.program_state.did_proc_yield;
    };
    OptiRunner.prototype.step_increment_program_counter = function (source_map_entity, source_map_rbid, yield_group_id, next_statement_id) {
        // Same as step_before_expression, but does not have an associated
        // block_id, won't yield during breakpoint debugging
        this.current_frame.program_counter[yield_group_id] = next_statement_id;
    };
    OptiRunner.prototype.step_reset_program_counter = function (source_map_entity, source_map_rbid, yield_group_id) {
        // Similar to step_before_expression, but does not have an associated
        // block_id, won't yield during breakpoint debugging, sets pc group to 0
        this.current_frame.program_counter[yield_group_id] = 0;
    };
    OptiRunner.prototype.step_finished = function () {
        this.pop_proc_stack();
        this.current_frame = undefined;
        this.program_state.proc_has_return_value = false;
        this.program_state.proc_return_value = undefined;
        this.program_state.did_proc_yield = true;
        if (this.program_state.proc_stack.length == 0) {
            this.program_state.did_proc_yield = false;
            this.program_state.finished = true;
            return;
        }
    };
    OptiRunner.prototype.step_return_value = function (block_id, value) {
        this.pop_proc_stack();
        this.current_frame = undefined;
        this.program_state.did_proc_yield = true;
        this.program_state.proc_has_return_value = value != undefined;
        this.program_state.proc_return_value = value;
    };
    OptiRunner.prototype.step_call_domain_function = function (return_value_storage_id, domain_function_index, block_id, args, target_entity) {
        var _this = this;
        var res;
        try {
            if (domain_function_index == -1) {
                res = false;
            }
            else {
                res = this.domain_functions[domain_function_index](args, this.original_identities.interpreter_id, target_entity, this.domain_function_util);
            }
        }
        catch (e) {
            throw this.extend_domain_function_call_error(e, block_id, domain_function_index, this.current_frame.source_map_rbid, this.current_frame.source_map_entity);
        }
        if (res == undefined) {
            return;
        }
        if (Promise.resolve(res) === res) {
            // Got a promise. NEVER use the method below, it increased runtime by 20%
            // because it caused a lot of deoptimizations! (゜△゜;)
            // if (res.then != undefined && typeof res.then == 'function') {
            var lock_handle_1 = this.run_mgr.get_thread_lock(target_entity, this.original_identities.interpreter_id);
            var current_frame_1 = this.current_frame;
            var run_mgr_1 = this.run_mgr;
            var on_success = function (res_val) {
                current_frame_1.dynamic_data[return_value_storage_id] = res_val;
                lock_handle_1.stop();
            };
            var on_fail = function (e) {
                var error = _this.extend_domain_function_call_error(e, block_id, domain_function_index, current_frame_1.source_map_rbid, current_frame_1.source_map_entity);
                run_mgr_1.report_error_and_stop(error, 'OptiRunner domain function promise result handler');
            };
            res.then(on_success, on_fail);
        }
        this.current_frame.dynamic_data[return_value_storage_id] = res;
    };
    OptiRunner.prototype.extend_domain_function_call_error = function (e, block_id, domain_function_index, source_map_rbid, source_map_entity) {
        var function_id = this.domain_function_types[domain_function_index];
        var metadata = {
            block_id: block_id,
            block_type: function_id,
            root_block_id: source_map_rbid,
            entity_id: source_map_entity,
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
    OptiRunner.prototype.get_catastrophe_dict = function (block_id) {
        return {
            source_map_rbid: this.current_frame.source_map_rbid,
            source_entity_id: this.current_frame.source_map_entity,
            block_id: block_id,
        };
    };
    OptiRunner.prototype.ensure_tell_target_ok = function (block_id, target_entity) {
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
                throw this.ohno.user.tell_with_unknown_entity(tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict(block_id)), { tell_entity: target_entity }));
            }
        }
        return true;
    };
    OptiRunner.prototype.step_async_tell = function (block_id, target_entity, new_target_entity, is_inside_warp) {
        if (!this.ensure_tell_target_ok(block_id, new_target_entity)) {
            return;
        }
        this.run_mgr.spawn_async_tell_interpreter({
            typeclass_id: this.original_identities.typeclass_id,
            interpreter_id: this.original_identities.interpreter_id,
            target_entity: target_entity,
            source_map_entity: this.current_frame.source_map_entity,
            source_map_rbid: this.current_frame.source_map_rbid,
        }, new_target_entity, this.current_frame.async_tell_asts[block_id], this.metadata.group_id, is_inside_warp);
    };
    OptiRunner.prototype.step_report_sync_telling = function (block_id, target_entity) {
        return this.ensure_tell_target_ok(block_id, target_entity);
    };
    OptiRunner.prototype.pop_proc_stack = function () {
        var prev_frame = this.program_state.proc_stack.pop();
        if (prev_frame != undefined) {
            this.frame_pool.release(prev_frame);
        }
    };
    OptiRunner.prototype.empty_stack_frame = function (id, target_entity_id, program, is_warped, proc_params, source_map_entity, source_map_rbid, proc_call_bid) {
        if (proc_call_bid === void 0) { proc_call_bid = ''; }
        var n_yield_groups = program.n_yield_groups;
        var program_counter = [];
        for (var i = 0; i < n_yield_groups; i++) {
            program_counter.push(0);
        }
        return {
            proc_id: id,
            proc_parameters: proc_params || {},
            program_counter: program_counter,
            // It's important to pre-allocate the Array, otherwise we may get a sparse array
            // instead of a dense array, which is much slower on V8 // OliverUv
            dynamic_data: this.should_pretty_print ? {} : new Array(program.dynamic_data_size),
            target_entity_id: target_entity_id,
            source_map_entity: source_map_entity || this.original_identities.source_map_entity,
            source_map_rbid: source_map_rbid || this.original_identities.source_map_rbid,
            async_tell_asts: program.async_tell_asts,
            proc_call_bid: proc_call_bid,
            is_warped: is_warped,
        };
        // TODO PERF Replace the return statement above with the code below
        // when the block pool has been changed to actually improve perf
        // // OliverUv 2018-06-07
        // const frame:O.ProcStackFrame = this.frame_pool.get();
        // frame.proc_id = id;
        // frame.proc_parameters = proc_params || {};
        // frame.program_counter = program_counter;
        // // It's important to pre-allocate the Array, otherwise we may get a sparse array
        // // instead of a dense array, which is much slower on V8 // OliverUv
        // frame.dynamic_data = this.should_pretty_print ? {} : new Array(program.dynamic_data_size);
        // frame.target_entity_id = target_entity_id;
        // frame.source_map_entity = source_map_entity || this.original_identities.source_map_entity;
        // frame.source_map_rbid = source_map_rbid || this.original_identities.source_map_rbid;
        // frame.async_tell_asts = program.async_tell_asts;
        // frame.proc_call_bid = proc_call_bid;
        // frame.is_warped = is_warped;
        // return frame;
    };
    OptiRunner.prototype.empty_state = function (target_entity_id, is_warped) {
        return {
            finished: false,
            proc_stack: [
                this.empty_stack_frame(MAIN_PROGRAM_ID, target_entity_id, this.program, is_warped),
            ],
            proc_has_return_value: false,
            proc_return_value: undefined,
            did_proc_yield: false,
        };
    };
    OptiRunner.prototype.get_step_args = function (frame, static_data) {
        // Read by compiled code
        var inputs = {
            identities: this.original_identities,
            default_target_entity_id: frame.target_entity_id,
            static_data: static_data,
            proc_parameters: frame.proc_parameters,
            proc_return_value: this.program_state.proc_return_value,
            proc_has_return_value: this.program_state.proc_has_return_value,
        };
        // Inherit source maps from frame
        inputs.identities.source_map_entity = frame.source_map_entity;
        inputs.identities.source_map_rbid = frame.source_map_rbid;
        // Read and potentially written by compiled code
        var state = {
            dynamic_data: frame.dynamic_data,
            program_counter: frame.program_counter,
        };
        // Compiled code may call these functions to signal
        // state changes
        var outputs = this.step_outputs;
        if (this.should_pretty_print) {
            return {
                // StepInputOutput
                ohno: this.step_input_outputs.ohno,
                call_domain_function: this.step_input_outputs.call_domain_function,
                report_sync_telling: this.step_input_outputs.report_sync_telling,
                async_tell: this.step_input_outputs.async_tell,
                // StepInputs
                default_target_entity_id: inputs.default_target_entity_id,
                identities: inputs.identities,
                static_data: inputs.static_data,
                // Procedure StepInputs
                proc_parameters: inputs.proc_parameters,
                proc_return_value: inputs.proc_return_value,
                proc_has_return_value: inputs.proc_has_return_value,
                // Procedure StepOutputs
                proc_do_return_value: outputs.proc_do_return_value,
                proc_yield_after_call: outputs.proc_yield_after_call,
                // StepState
                dynamic_data: state.dynamic_data,
                program_counter: state.program_counter,
                // StepOutputs
                proc_call: outputs.proc_call,
                before_expression: outputs.before_expression,
                after_potential_blocker: outputs.after_potential_blocker,
                increment_program_counter: outputs.increment_program_counter,
                reset_program_counter: outputs.reset_program_counter,
                after_iteration: outputs.after_iteration,
                finished: outputs.finished,
            };
        }
        return {
            // StepInputOutput
            AA: this.step_input_outputs.ohno,
            AB: this.step_input_outputs.call_domain_function,
            AC: this.step_input_outputs.report_sync_telling,
            AD: this.step_input_outputs.async_tell,
            // StepInputs
            BA: inputs.default_target_entity_id,
            BB: inputs.identities,
            BC: inputs.static_data,
            // Procedure StepInputs
            CA: inputs.proc_parameters,
            CB: inputs.proc_return_value,
            CC: inputs.proc_has_return_value,
            // Procedure StepOutputs
            CD: outputs.proc_do_return_value,
            CE: outputs.proc_yield_after_call,
            // StepState
            DA: state.dynamic_data,
            DB: state.program_counter,
            // StepOutputs
            EA: outputs.proc_call,
            EB: outputs.before_expression,
            EC: outputs.after_potential_blocker,
            ED: outputs.increment_program_counter,
            EE: outputs.reset_program_counter,
            EF: outputs.after_iteration,
            EG: outputs.finished,
        };
    };
    OptiRunner.prototype.step = function () {
        this.n_warp_iterations = 0;
        if (!this.deterministic_mode) {
            this.warp_tick_start = this.run_mgr.wall_clock_now();
        }
        var n_procedure_calls = 0;
        while (true) {
            var step_res = this.do_step();
            if (step_res != undefined) {
                // Yielded or finished
                return step_res;
            }
            // Yielded when making a procedure call, do we just step
            // into it or do we yield to other interpreters?
            n_procedure_calls++;
            if (n_procedure_calls >= this.max_procedure_calls_per_interpreter_step) {
                return T.StepResult.yielding;
            }
        }
    };
    OptiRunner.prototype.do_step = function () {
        var frame = peek(this.program_state.proc_stack);
        if (frame == undefined) {
            throw this.ohno.system.procedure_popped_empty_call_stack({
                // best guess, could be wrong if we were in a procedure,
                // or if we're in a tell block, or similar
                root_block_id: this.original_identities.source_map_rbid,
                entity_id: this.original_identities.source_map_entity,
            });
        }
        this.current_frame = frame;
        this.program_state.did_proc_yield = false;
        var program = this.programs[frame.proc_id];
        var args = this.get_step_args(frame, program.static_data);
        this.run_mgr.set_current_interpreter_not_blocked();
        try {
            program.script(args);
        }
        catch (e) {
            var metadata = tslib_1.__assign(tslib_1.__assign({}, this.get_catastrophe_dict()), { interpreter_id: this.original_identities.interpreter_id, interpreter_stack: this.get_current_stack() });
            if (e instanceof catastrophic_1.Catastrophe) {
                e.annotation = e.annotation || {};
                _defaults(e.annotation, metadata);
                throw e;
            }
            throw this.ohno.system.unknown_system_error(e, metadata);
        }
        if (this.program_state.finished) {
            if (this.on_finished !== undefined) {
                this.on_finished(this.original_identities.source_map_rbid);
            }
            return T.StepResult.finished;
        }
        if (this.program_state.did_proc_yield == false) {
            // We yielded after completing one iteration of a loop
            return T.StepResult.yielding;
        }
        // Script yielded to call a function or return from a
        // function and should therefore continue execution
        // instead of yielding to other runners / env.
        return undefined; // Recurse using the wrapper!
    };
    OptiRunner.prototype.get_current_stack = function () {
        var frame_stack = this.program_state.proc_stack;
        var res = [];
        for (var i = 0; i < frame_stack.length; i++) {
            var frame = frame_stack[i];
            var block_id = (i === frame_stack.length - 1) ? undefined : frame_stack[i + 1].proc_call_bid;
            if (block_id == '') {
                // Preserve external interface where this is undefined if nothing
                // but we use '' internally to avoid Object polymorphism
                block_id = undefined;
            }
            res.push({
                interpreter_id: this.original_identities.interpreter_id,
                source_entity_id: frame.source_map_entity,
                source_map_rbid: frame.source_map_rbid,
                block_id: block_id,
                proc_parameters: _cloneDeep(frame.proc_parameters),
                proc_id: (frame.proc_id === MAIN_PROGRAM_ID) ? undefined : frame.proc_id,
            });
        }
        return res;
    };
    OptiRunner.prototype.dispose = function () {
        // Do nothing, since we don't take ownership of the script ast
    };
    OptiRunner.prototype.create_domain_function_error = function (error_properties) {
        var annotation = {
            client_annotation: error_properties,
        };
        if (error_properties.native_error != undefined) {
            return this.ohno.client.domain_function_error(error_properties.native_error, annotation);
        }
        return this.ohno.client.domain_function_error(annotation);
    };
    return OptiRunner;
}());
exports.OptiRunner = OptiRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29wdGkvcnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFnRDtBQUNoRCwyQ0FBOEM7QUFDOUMsNkNBQTJDO0FBSTNDLGtDQUFvQztBQU9wQyxTQUFTLElBQUksQ0FBSSxLQUFTO0lBQ3hCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLFNBQVMsQ0FBQztLQUFFO0lBQzVDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQztBQUVuQyx5REFBeUQ7QUFDekQsaURBQWlEO0FBRWpEO0lBNEJFLG9CQUNZLENBQVEsRUFDUixJQUFXLEVBQ1gsbUJBQTJCLEVBQzNCLGdDQUF3QyxFQUN4QyxtQ0FBMkMsRUFDM0Msd0NBQStDLEVBQy9DLHdDQUErQyxFQUMvQyx1Q0FBc0QsRUFDdEQsbUJBQTBCLEVBQzFCLE9BQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLFVBQTBCLEVBQzFCLGFBQWdDLEVBQ2hDLGdCQUFpQyxFQUNqQyxxQkFBOEIsRUFFOUIsbUJBQWdDLEVBQ2hDLFVBQWtDLEVBQ2xDLE9BQXFCLEVBQzdCLFFBQXlCLEVBQ3pCLGNBQWdDLEVBQ2hDLFNBQWlCLEVBQ1QsaUJBQThCLEVBQzlCLFdBQW9DO1FBeEJoRCxpQkFrRkM7UUFqRlcsTUFBQyxHQUFELENBQUMsQ0FBTztRQUNSLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVE7UUFDM0IscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFRO1FBQ3hDLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBUTtRQUMzQyw2Q0FBd0MsR0FBeEMsd0NBQXdDLENBQU87UUFDL0MsNkNBQXdDLEdBQXhDLHdDQUF3QyxDQUFPO1FBQy9DLDRDQUF1QyxHQUF2Qyx1Q0FBdUMsQ0FBZTtRQUN0RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQU87UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQywwQkFBcUIsR0FBckIscUJBQXFCLENBQVM7UUFFOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFhO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFJckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXhDeEMsYUFBUSxHQUFvQyxFQUFFLENBQUM7UUFFdkQsdUVBQXVFO1FBQ3ZFLHdFQUF3RTtRQUN4RSx5RUFBeUU7UUFDekUsMEVBQTBFO1FBQzFFLFdBQVc7UUFDWCxnRUFBZ0U7UUFDaEUsd0RBQXdEO1FBQ3hELHNGQUFzRjtRQUM5RSxrQkFBYSxHQUF5QixTQUFTLENBQUM7UUFHaEQsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBNEIxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxVQUFVLFlBQUE7WUFDVixtQkFBbUIscUJBQUE7WUFDbkIsWUFBWSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDOUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDLGNBQWM7WUFDbEQsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3pCLFFBQVEsVUFBQTtTQUNULENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7UUFFeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLG9CQUFvQixFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9ELG1CQUFtQixFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdELFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pELHVCQUF1QixFQUFFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JFLHlCQUF5QixFQUFFLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pFLHFCQUFxQixFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pFLGVBQWUsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZELHFCQUFxQixFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQy9ELENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLEdBQUc7WUFDMUIsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzdCLGdDQUFnQyxFQUFFLFVBQzlCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsVUFBVTtnQkFJWixLQUFJLENBQUMsbUJBQW1CLENBQ3RCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLCtCQUE4QixZQUFjLEVBQzVDLEtBQUssQ0FDTixDQUFDO1lBQ0osQ0FBQztZQUNELG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFELDRCQUE0QixFQUFFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzNFLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUV6Qyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLFNBQWtCO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU8seUNBQW9CLEdBQTVCLFVBQTZCLFlBQW1CO1FBQzlDLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLFNBQVMsRUFBRTtZQUN2QyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsK0RBQStEO2FBQ3pFLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLHdDQUFtQixHQUEzQixVQUNJLFdBQWdCLEVBQ2hCLGdCQUFxQixFQUNyQixVQUF1QixFQUN2QixhQUFrQixFQUNsQixjQUFzQjtRQUV4Qix3RUFBd0U7UUFDeEUscUVBQXFFO1FBQ3JFLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNFLElBQUksbUJBQW1CLElBQUksU0FBUyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixzQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUMzQyxDQUFDO1NBQ0o7UUFFRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNqRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ2hELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyx1Q0FDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxLQUMzQyxZQUFZLEVBQUUsV0FBVyxJQUN6QixDQUFDO1NBQ0o7UUFFRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNDLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtZQUMxQixnRUFBZ0U7WUFDaEUsMkRBQTJEO1lBQzNELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDeEMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDN0IsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQ3BDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQ3ZDLG1CQUFtQixDQUFDLE1BQU0sQ0FDM0IsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ3hDO1FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUNsQyxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQzlDLFVBQVUsRUFDVixtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFDcEMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDN0IsYUFBYSxDQUNkLENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRU8sNENBQXVCLEdBQS9CLFVBQ0ksY0FBcUIsRUFDckIsaUJBQXdCO1FBRTFCLGtEQUFrRDtRQUNsRCxvREFBb0Q7UUFDcEQsd0RBQXdEO1FBQ3hELFFBQVE7UUFDUixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7WUFDM0IsVUFBVSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFTyx5Q0FBb0IsR0FBNUIsVUFBNkIsY0FBc0I7UUFDakQsOENBQThDO1FBQzlDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUNoQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO1FBQzFGLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDN0MseUVBQXlFO1lBQ3pFLDZEQUE2RDtZQUM3RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztZQUN2RixJQUFNLGNBQWMsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRSxZQUFZLEdBQUcsY0FBYyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVPLDJDQUFzQixHQUE5QixVQUNJLFFBQWEsRUFDYixpQkFBc0IsRUFDdEIsZUFBb0IsRUFDcEIsY0FBcUIsRUFDckIsaUJBQXdCO1FBRzFCLElBQUksSUFBSSxDQUFDLG1DQUFtQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsaUJBQWlCLENBQUM7UUFDdkUsaURBQWlEO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGlEQUE0QixHQUFwQyxVQUNJLFFBQWEsRUFDYixpQkFBc0IsRUFDdEIsZUFBb0IsRUFDcEIsY0FBcUIsRUFDckIsaUJBQXdCO1FBRTFCLGtFQUFrRTtRQUNsRSxvRUFBb0U7UUFDcEUsdUVBQXVFO1FBRXZFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1FBQ3ZFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNHLE9BQU8sVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3pELENBQUM7SUFFTyxtREFBOEIsR0FBdEMsVUFDSSxpQkFBc0IsRUFDdEIsZUFBb0IsRUFDcEIsY0FBcUIsRUFDckIsaUJBQXdCO1FBRTFCLGtFQUFrRTtRQUNsRSxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsaUJBQWlCLENBQUM7SUFDekUsQ0FBQztJQUVPLCtDQUEwQixHQUFsQyxVQUNJLGlCQUFzQixFQUN0QixlQUFvQixFQUNwQixjQUFxQjtRQUV2QixxRUFBcUU7UUFDckUsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFFRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBUSxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ25DLE9BQU87U0FDUjtJQUNILENBQUM7SUFFTyxzQ0FBaUIsR0FBekIsVUFDSSxRQUFhLEVBQ2IsS0FBUztRQUVYLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFRLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLElBQUksU0FBUyxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFFTyw4Q0FBeUIsR0FBakMsVUFDSSx1QkFBOEIsRUFDOUIscUJBQTRCLEVBQzVCLFFBQWEsRUFDYixJQUFRLEVBQ1IsYUFBa0I7UUFMdEIsaUJBd0RDO1FBakRDLElBQUksR0FBTyxDQUFDO1FBQ1osSUFBSTtZQUNGLElBQUkscUJBQXFCLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLEdBQUcsR0FBRyxLQUFLLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQ2hELElBQUksRUFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUN2QyxhQUFhLEVBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUMxQixDQUFDO2FBQ0g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxJQUFJLENBQUMsaUNBQWlDLENBQzFDLENBQUMsRUFDRCxRQUFRLEVBQ1IscUJBQXFCLEVBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUNyQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDakMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNoQyx5RUFBeUU7WUFDekUscURBQXFEO1lBQ3JELGdFQUFnRTtZQUNoRSxJQUFNLGFBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3pHLElBQU0sZUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDekMsSUFBTSxTQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFNLFVBQVUsR0FBRyxVQUFDLE9BQVc7Z0JBQzdCLGVBQWEsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzlELGFBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUM7WUFDRixJQUFNLE9BQU8sR0FBRyxVQUFDLENBQW1CO2dCQUNsQyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsaUNBQWlDLENBQ2xELENBQUMsRUFDRCxRQUFRLEVBQ1IscUJBQXFCLEVBQ3JCLGVBQWEsQ0FBQyxlQUFlLEVBQzdCLGVBQWEsQ0FBQyxpQkFBaUIsQ0FDaEMsQ0FBQztnQkFDRixTQUFPLENBQUMscUJBQXFCLENBQzNCLEtBQUssRUFDTCxtREFBbUQsQ0FDcEQsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUNhLEdBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDakUsQ0FBQztJQUVPLHNEQUFpQyxHQUF6QyxVQUNJLENBQW1CLEVBQ25CLFFBQWEsRUFDYixxQkFBNEIsRUFDNUIsZUFBb0IsRUFDcEIsaUJBQXNCO1FBRXhCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RFLElBQU0sUUFBUSxHQUFHO1lBQ2YsUUFBUSxVQUFBO1lBQ1IsVUFBVSxFQUFFLFdBQVc7WUFDdkIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsU0FBUyxFQUFFLGlCQUFpQjtZQUM1QixjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWM7WUFDdkQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1NBQzVDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSwwQkFBVyxFQUFFO1lBQzVCLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDbEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUNBQXFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTyx5Q0FBb0IsR0FBNUIsVUFBNkIsUUFBYztRQUN6QyxPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQjtZQUN0RCxRQUFRLFVBQUE7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVPLDBDQUFxQixHQUE3QixVQUNJLFFBQWEsRUFDYixhQUFrQjtRQUVwQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3pDLElBQUksWUFBWSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztvQkFDekUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtvQkFDakQsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCO29CQUMvQyxRQUFRLFVBQUE7b0JBQ1IsV0FBVyxFQUFFLGFBQWE7aUJBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNKLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU0sSUFBSSxZQUFZLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDO29CQUN0RSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO29CQUNqRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUI7b0JBQy9DLFFBQVEsVUFBQTtvQkFDUixXQUFXLEVBQUUsYUFBYTtpQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTSxJQUFJLFlBQVksSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDaEQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsdUNBQ3hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FDdEMsV0FBVyxFQUFFLGFBQWEsSUFDMUIsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxvQ0FBZSxHQUF2QixVQUNJLFFBQWEsRUFDYixhQUFrQixFQUNsQixpQkFBc0IsRUFDdEIsY0FBc0I7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUN2QztZQUNFLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWTtZQUNuRCxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWM7WUFDdkQsYUFBYSxlQUFBO1lBQ2IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUI7WUFDdkQsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtTQUNwRCxFQUNELGlCQUFpQixFQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQ3RCLGNBQWMsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVPLDZDQUF3QixHQUFoQyxVQUNJLFFBQWEsRUFDYixhQUFrQjtRQUVwQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLG1DQUFjLEdBQXRCO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkQsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVPLHNDQUFpQixHQUF6QixVQUNJLEVBQVMsRUFDVCxnQkFBcUIsRUFDckIsT0FBcUIsRUFDckIsU0FBaUIsRUFDakIsV0FBeUIsRUFDekIsaUJBQXVCLEVBQ3ZCLGVBQXFCLEVBQ3JCLGFBQXVCO1FBQXZCLDhCQUFBLEVBQUEsa0JBQXVCO1FBRXpCLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDOUMsSUFBTSxlQUFlLEdBQVksRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELE9BQU87WUFDTCxPQUFPLEVBQUUsRUFBRTtZQUNYLGVBQWUsRUFBRSxXQUFXLElBQUksRUFBRTtZQUNsQyxlQUFlLGlCQUFBO1lBQ2YsZ0ZBQWdGO1lBQ2hGLG1FQUFtRTtZQUNuRSxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRixnQkFBZ0Isa0JBQUE7WUFDaEIsaUJBQWlCLEVBQUUsaUJBQWlCLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQjtZQUNsRixlQUFlLEVBQUUsZUFBZSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlO1lBQzVFLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZTtZQUN4QyxhQUFhLGVBQUE7WUFDYixTQUFTLFdBQUE7U0FDVixDQUFDO1FBRUYsbUVBQW1FO1FBQ25FLGdFQUFnRTtRQUNoRSx5QkFBeUI7UUFFekIsd0RBQXdEO1FBRXhELHNCQUFzQjtRQUN0Qiw2Q0FBNkM7UUFDN0MsMkNBQTJDO1FBQzNDLG1GQUFtRjtRQUNuRixzRUFBc0U7UUFDdEUsNkZBQTZGO1FBQzdGLDZDQUE2QztRQUM3Qyw2RkFBNkY7UUFDN0YsdUZBQXVGO1FBQ3ZGLG1EQUFtRDtRQUNuRCx1Q0FBdUM7UUFDdkMsK0JBQStCO1FBRS9CLGdCQUFnQjtJQUNsQixDQUFDO0lBRU8sZ0NBQVcsR0FBbkIsVUFBb0IsZ0JBQXFCLEVBQUUsU0FBaUI7UUFDMUQsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixJQUFJLENBQUMsT0FBTyxFQUNaLFNBQVMsQ0FDVjthQUNGO1lBQ0QscUJBQXFCLEVBQUUsS0FBSztZQUM1QixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGNBQWMsRUFBRSxLQUFLO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRU8sa0NBQWEsR0FBckIsVUFDSSxLQUFzQixFQUN0QixXQUF3QjtRQUUxQix3QkFBd0I7UUFDeEIsSUFBTSxNQUFNLEdBQWdCO1lBQzFCLFVBQVUsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQ3BDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDaEQsV0FBVyxhQUFBO1lBQ1gsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCO1lBQ3ZELHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCO1NBQ2hFLENBQUM7UUFFRixpQ0FBaUM7UUFDakMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDOUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUUxRCxnREFBZ0Q7UUFDaEQsSUFBTSxLQUFLLEdBQWU7WUFDeEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUN2QyxDQUFDO1FBRUYsbURBQW1EO1FBQ25ELGdCQUFnQjtRQUNoQixJQUFNLE9BQU8sR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVoRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixPQUFPO2dCQUNMLGtCQUFrQjtnQkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUNsQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CO2dCQUNsRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CO2dCQUNoRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVU7Z0JBRTlDLGFBQWE7Z0JBQ2Isd0JBQXdCLEVBQUUsTUFBTSxDQUFDLHdCQUF3QjtnQkFDekQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUM3QixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBRS9CLHVCQUF1QjtnQkFDdkIsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlO2dCQUN2QyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCO2dCQUMzQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMscUJBQXFCO2dCQUVuRCx3QkFBd0I7Z0JBQ3hCLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxvQkFBb0I7Z0JBQ2xELHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxxQkFBcUI7Z0JBRXBELFlBQVk7Z0JBQ1osWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO2dCQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7Z0JBRXRDLGNBQWM7Z0JBQ2QsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO2dCQUM1QixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCO2dCQUM1Qyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsdUJBQXVCO2dCQUN4RCx5QkFBeUIsRUFBRSxPQUFPLENBQUMseUJBQXlCO2dCQUM1RCxxQkFBcUIsRUFBRSxPQUFPLENBQUMscUJBQXFCO2dCQUNwRCxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWU7Z0JBQ3hDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTthQUMzQixDQUFDO1NBQ0g7UUFDRCxPQUFZO1lBQ1Ysa0JBQWtCO1lBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSTtZQUNoQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQjtZQUNoRCxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQjtZQUMvQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVU7WUFFdEMsYUFBYTtZQUNiLEVBQUUsRUFBRSxNQUFNLENBQUMsd0JBQXdCO1lBQ25DLEVBQUUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUNyQixFQUFFLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFFdEIsdUJBQXVCO1lBQ3ZCLEVBQUUsRUFBRSxNQUFNLENBQUMsZUFBZTtZQUMxQixFQUFFLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtZQUM1QixFQUFFLEVBQUUsTUFBTSxDQUFDLHFCQUFxQjtZQUNoQyx3QkFBd0I7WUFDeEIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxvQkFBb0I7WUFDaEMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUI7WUFFakMsWUFBWTtZQUNaLEVBQUUsRUFBRSxLQUFLLENBQUMsWUFBWTtZQUN0QixFQUFFLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFFekIsY0FBYztZQUNkLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FBUztZQUNyQixFQUFFLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtZQUM3QixFQUFFLEVBQUUsT0FBTyxDQUFDLHVCQUF1QjtZQUNuQyxFQUFFLEVBQUUsT0FBTyxDQUFDLHlCQUF5QjtZQUNyQyxFQUFFLEVBQUUsT0FBTyxDQUFDLHFCQUFxQjtZQUNqQyxFQUFFLEVBQUUsT0FBTyxDQUFDLGVBQWU7WUFDM0IsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdEQ7UUFFRCxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksRUFBRTtZQUNYLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7Z0JBQ3pCLHNCQUFzQjtnQkFDdEIsT0FBTyxRQUFRLENBQUM7YUFDakI7WUFDRCx3REFBd0Q7WUFDeEQsZ0RBQWdEO1lBQ2hELGlCQUFpQixFQUFFLENBQUM7WUFDcEIsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsd0NBQXdDLEVBQUU7Z0JBQ3RFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7SUFFTyw0QkFBTyxHQUFmO1FBRUUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUM7Z0JBQ3ZELHdEQUF3RDtnQkFDeEQsMENBQTBDO2dCQUMxQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWU7Z0JBQ3ZELFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCO2FBQ3RELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBRTFDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLENBQUM7UUFDbkQsSUFBSTtZQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQU0sUUFBUSx5Q0FDVCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FDOUIsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQ3ZELGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUM1QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksMEJBQVcsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7WUFDRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDNUQ7WUFDRCxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxLQUFLLEVBQUU7WUFDOUMsc0RBQXNEO1lBQ3RELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDOUI7UUFFRCxxREFBcUQ7UUFDckQsbURBQW1EO1FBQ25ELDhDQUE4QztRQUU5QyxPQUFPLFNBQVMsQ0FBQyxDQUFDLDZCQUE2QjtJQUNqRCxDQUFDO0lBRU0sc0NBQWlCLEdBQXhCO1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDbEQsSUFBTSxHQUFHLEdBQTRCLEVBQUUsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM3RixJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xCLGlFQUFpRTtnQkFDakUsd0RBQXdEO2dCQUN4RCxRQUFRLEdBQUcsU0FBUyxDQUFDO2FBQ3RCO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDUCxjQUFjLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWM7Z0JBQ3ZELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7Z0JBQ3pDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtnQkFDdEMsUUFBUSxVQUFBO2dCQUNSLGVBQWUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTzthQUN6RSxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDRSw4REFBOEQ7SUFDaEUsQ0FBQztJQUVNLGlEQUE0QixHQUFuQyxVQUFvQyxnQkFBd0M7UUFDMUUsSUFBTSxVQUFVLEdBQUc7WUFDakIsaUJBQWlCLEVBQUUsZ0JBQWdCO1NBQ3BDLENBQUM7UUFDRixJQUFJLGdCQUFnQixDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FDM0MsZ0JBQWdCLENBQUMsWUFBWSxFQUM3QixVQUFVLENBQ1gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLEFBNXRCRCxJQTR0QkM7QUE1dEJZLGdDQUFVIn0=