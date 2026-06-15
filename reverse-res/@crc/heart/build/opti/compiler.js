"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _defaults = require("lodash/defaults");
var _flattenDeep = require("lodash/flattenDeep");
var _identity = require("lodash/identity");
var _isBoolean = require("lodash/isBoolean");
var _isNumber = require("lodash/isNumber");
var _isString = require("lodash/isString");
var _sortBy = require("lodash/sortBy");
var catastrophic_1 = require("catastrophic");
var inversify_1 = require("inversify");
var H = require("../di_interfaces");
var di_symbols_1 = require("../di_symbols");
function peek(stack) {
    if (stack.length == 0) {
        return undefined;
    }
    return stack[stack.length - 1];
}
var SHORT_KEYWORDS = {
    ohno: 'X.AA',
    call_domain_function: 'X.AB',
    report_sync_telling: 'X.AC',
    async_tell: 'X.AD',
    default_target_entity_id: 'X.BA',
    identities: 'X.BB',
    static_data: 'X.BC',
    proc_parameters: 'X.CA',
    proc_return_value: 'X.CB',
    proc_has_return_value: 'X.CC',
    proc_do_return_value: 'X.CD',
    proc_yield_after_call: 'X.CE',
    dynamic_data: 'X.DA',
    program_counter: 'X.DB',
    proc_call: 'X.EA',
    before_expression: 'X.EB',
    after_potential_blocker: 'X.EC',
    increment_program_counter: 'X.ED',
    reset_program_counter: 'X.EE',
    after_iteration: 'X.EF',
    finished: 'X.EG',
};
var PRETTY_KEYWORDS = {
    // StepInputOutput
    ohno: 'X.ohno',
    call_domain_function: 'X.call_domain_function',
    report_sync_telling: 'X.report_sync_telling',
    async_tell: 'X.async_tell',
    // StepInputs
    default_target_entity_id: 'X.default_target_entity_id',
    identities: 'X.identities',
    static_data: 'X.static_data',
    // Procedure StepInputs
    proc_parameters: 'X.proc_parameters',
    proc_return_value: 'X.proc_return_value',
    proc_has_return_value: 'X.proc_has_return_value',
    // Procedure StepOutputs
    proc_do_return_value: 'X.proc_do_return_value',
    proc_yield_after_call: 'X.proc_yield_after_call',
    // StepState
    dynamic_data: 'X.dynamic_data',
    program_counter: 'X.program_counter',
    // StepOutputs
    proc_call: 'X.proc_call',
    before_expression: 'X.before_expression',
    after_potential_blocker: 'X.after_potential_blocker',
    increment_program_counter: 'X.increment_program_counter',
    reset_program_counter: 'X.reset_program_counter',
    after_iteration: 'X.after_iteration',
    finished: 'X.finished',
};
/**
 * State of the compiler, while it is compiling a single AST.
 * It's passed back and forth between functions, but it actually doesn't need
 * to be passed back. Sorry.
 */
var State = /** @class */ (function () {
    function State(ohno, source_map_entity, source_map_rbid, pretty_print_symbols) {
        this.ohno = ohno;
        this.source_map_entity = source_map_entity;
        this.source_map_rbid = source_map_rbid;
        this.pretty_print_symbols = pretty_print_symbols;
        this.current_yield_group = 0;
        this.top_yield_group_id = 0;
        this.top_yield_ids = { 0: 0 };
        this.yield_group_stack = [];
        /**
         * When we break out of a loop, we are often breaking out
         * of multiple levels of yield groups (one per scope block).
         * We need to reset all of those in case there's an outer
         * loop which makes us re-enter them. For this, we maintain
         * one stack of yield group ids, one list of ids per nested
         * loop.
         */
        this.break_yield_reset_stack = [[]];
        // If empty we are not inside a tell block. Otherwise
        // we're inside some level of tell blocks. Stores the
        // key of the dynamic_data value which holds the
        // id of the entity_target
        this.tell_entity_target_stack = [];
        this.top_break_id = 0;
        this.break_id_stack = [];
        this.n_warp_block_parents = 0;
        this.top_parameter_id = 0;
        this.top_static_data_id = 0;
        this.async_tell_asts = {};
        this.keyword = pretty_print_symbols ? PRETTY_KEYWORDS : SHORT_KEYWORDS;
        this.static_data = pretty_print_symbols ? {} : [];
    }
    State.prototype.gen_parameter_symbol = function (name) {
        this.top_parameter_id++;
        var prefix = this.pretty_print_symbols ? name : '';
        return prefix + this.top_parameter_id;
    };
    State.prototype.set_static = function (name, value) {
        this.top_static_data_id++;
        if (this.pretty_print_symbols) {
            var symbol = [name, this.top_static_data_id].join('');
            this.static_data[symbol] = value;
            return symbol;
        }
        this.static_data[this.top_static_data_id] = value;
        return this.top_static_data_id.toString();
    };
    State.prototype.get_static_data = function () {
        return this.static_data;
    };
    State.prototype.dynamic_data_size = function () {
        return this.top_parameter_id + 1;
    };
    State.prototype.push_yield_level = function (block) {
        this.yield_group_stack.push(this.current_yield_group);
        this.top_yield_group_id++;
        var next_id = this.top_yield_group_id;
        this.current_yield_group = next_id;
        this.top_yield_ids[next_id] = 0;
        var break_yrs = peek(this.break_yield_reset_stack);
        if (break_yrs == undefined) {
            throw this.ohno.compiler.system.popped_empty_yield_reset_stack({
                block: block,
            });
        }
        break_yrs.push(next_id);
        return [
            "switch (", this.keyword.program_counter, "[",
            next_id.toString(),
            "]) {case 0:",
        ];
    };
    State.prototype.pop_yield_level = function (block) {
        var group_id = this.yield_group_stack.pop();
        if (group_id == undefined) {
            throw this.ohno.compiler.system.popped_empty_yield_group_stack({
                block: block,
            });
        }
        this.current_yield_group = group_id;
        var break_yrs = peek(this.break_yield_reset_stack);
        if (break_yrs == undefined) {
            throw this.ohno.compiler.system.popped_empty_yield_group_stack({
                block: block,
            });
        }
        break_yrs.pop();
        return "}";
    };
    State.prototype.push_breakable = function () {
        this.break_yield_reset_stack.push([]);
        var n = this.top_break_id++;
        var break_id = "B" + n;
        this.break_id_stack.push(break_id);
        return break_id;
    };
    State.prototype.pop_breakable = function () {
        this.break_id_stack.pop();
        this.break_yield_reset_stack.pop();
    };
    State.prototype.get_current_break_reset_statements = function (block) {
        var break_yrs = peek(this.break_yield_reset_stack);
        if (break_yrs == undefined) {
            throw this.ohno.compiler.system.popped_empty_yield_reset_stack({
                block: block,
            });
        }
        var breakers = [];
        for (var i = 0; i < break_yrs.length; i++) {
            var group = break_yrs[i];
            breakers.push(this.keyword.program_counter, "[", group.toString(), "] = 0;");
        }
        return breakers;
    };
    State.prototype.push_target_entity = function (accessor) {
        this.tell_entity_target_stack.push(accessor);
    };
    State.prototype.pop_target_entity = function () {
        this.tell_entity_target_stack.pop();
    };
    State.prototype.current_target_entity = function () {
        var accessor = peek(this.tell_entity_target_stack);
        if (accessor == undefined) {
            // Default to whatever is the target entity for this stack frame
            return this.keyword.default_target_entity_id;
        }
        // Otherwise we're in a tell block
        return accessor;
    };
    State.prototype.current_break_id = function (block) {
        var id = peek(this.break_id_stack);
        if (id == undefined) {
            throw this.ohno.compiler.user.tried_to_break_outside_of_loop({
                block: block,
            });
        }
        return id;
    };
    State.prototype.create_yield_point = function () {
        this.top_yield_ids[this.current_yield_group]++;
        var n = this.top_yield_ids[this.current_yield_group];
        return [
            this.keyword.increment_program_counter, "('",
            this.source_map_entity,
            "', '",
            this.source_map_rbid,
            "', ",
            this.current_yield_group.toString(),
            ", ",
            n.toString(),
            "); case ", n.toString(), ": ",
        ];
    };
    State.prototype.create_before_expression_yield_point = function (ast) {
        this.top_yield_ids[this.current_yield_group]++;
        var n = this.top_yield_ids[this.current_yield_group];
        return [
            "if (", this.keyword.before_expression, "('",
            ast.id,
            "', '",
            this.source_map_entity,
            "', '",
            this.source_map_rbid,
            "', ",
            this.current_yield_group.toString(),
            ", ",
            n.toString(),
            ")) { return; }",
            "case ", n.toString(), ": ",
        ];
    };
    State.prototype.create_after_potential_blocker_yield_point = function (ast) {
        this.top_yield_ids[this.current_yield_group]++;
        var n = this.top_yield_ids[this.current_yield_group];
        return [
            "if (", this.keyword.after_potential_blocker, "('",
            ast.id,
            "', '",
            this.source_map_entity,
            "', '",
            this.source_map_rbid,
            "', ",
            this.current_yield_group.toString(),
            ", ",
            n.toString(),
            ")) { return; }",
            "case ", n.toString(), ": ",
        ];
    };
    State.prototype.create_iteration_yield_point = function () {
        return [
            "if (", this.keyword.after_iteration, "(", this.is_inside_warp().toString(), ")) { return; }",
        ];
    };
    State.prototype.create_yield_reset_point = function () {
        return [
            this.keyword.reset_program_counter, "('",
            this.source_map_entity,
            "', '",
            this.source_map_rbid,
            "', ",
            this.current_yield_group.toString(),
            ");",
        ];
    };
    State.prototype.create_procedure_yield_point = function () {
        this.top_yield_ids[this.current_yield_group]++;
        var n = this.top_yield_ids[this.current_yield_group];
        return [
            this.keyword.proc_yield_after_call, "(",
            this.current_yield_group.toString(),
            ", ",
            n.toString(),
            "); return;",
            "case ", n.toString(), ": ",
        ];
    };
    State.prototype.get_n_yield_groups = function () {
        return 1 + this.top_yield_group_id;
    };
    State.prototype.add_async_tell_ast = function (ast) {
        this.async_tell_asts[ast.id] = ast;
    };
    State.prototype.get_async_tell_asts = function () {
        return this.async_tell_asts;
    };
    State.prototype.is_inside_warp = function () {
        return this.n_warp_block_parents >= 1;
    };
    State.prototype.enter_warp_block = function () {
        this.n_warp_block_parents++;
    };
    State.prototype.exit_warp_block = function () {
        this.n_warp_block_parents--;
    };
    return State;
}());
var OptiCompilerImpl = /** @class */ (function () {
    function OptiCompilerImpl(block_pool, event_bus, log, ohno, prng_factory, u, block, config, registry) {
        var _this = this;
        this.block_pool = block_pool;
        this.event_bus = event_bus;
        this.log = log;
        this.ohno = ohno;
        this.prng_factory = prng_factory;
        this.u = u;
        this.block = block;
        this.config = config;
        this.registry = registry;
        this.deterministic = u.config.get().deterministic != undefined;
        var configure = function () {
            _this.should_pretty_print = false;
            var cfg = _this.config.get().opti_compiler;
            if (cfg != undefined) {
                _this.should_pretty_print = cfg.pretty_print;
            }
            _this.keyword = _this.should_pretty_print ? PRETTY_KEYWORDS : SHORT_KEYWORDS;
        };
        configure();
        this.event_bus.system.config_updated.immediate.sub(configure);
    }
    OptiCompilerImpl.prototype.comment = function (s, add_newlines) {
        if (add_newlines === void 0) { add_newlines = true; }
        if (!this.should_pretty_print) {
            return '';
        }
        var newline = add_newlines ? '\n' : '';
        var safe_s = JSON.stringify(s);
        safe_s = safe_s.substring(1, safe_s.length - 2);
        safe_s = s.replace(/\*\//, '{{{*./}}}');
        return newline + "/* " + safe_s + " */" + newline;
    };
    OptiCompilerImpl.prototype.create_catch_all_error = function (location, error, ast) {
        var metadata = {
            caught_at: location,
        };
        if (ast != undefined) {
            metadata.block = ast;
        }
        if (error instanceof catastrophic_1.Catastrophe) {
            error.annotation = error.annotation || {};
            _defaults(error.annotation, metadata);
            return error;
        }
        return this.ohno.compiler.system.unknown_compiler_error(error, metadata);
    };
    OptiCompilerImpl.prototype.compile = function (source_map_entity, source_map_rbid, interpreter_id, ast) {
        var code;
        var static_data;
        var dynamic_data_size;
        var n_yield_groups;
        var async_tell_asts;
        try {
            this.state = new State(this.ohno, source_map_entity, source_map_rbid, this.should_pretty_print);
            var s = this.compile_statement(ast);
            var r = this.wrap_with_top_level(s);
            code = _flattenDeep(r.statements).join('');
            static_data = this.state.get_static_data();
            dynamic_data_size = this.state.dynamic_data_size();
            n_yield_groups = this.state.get_n_yield_groups();
            async_tell_asts = this.state.get_async_tell_asts();
        }
        catch (e) {
            var metadata = {
                block: ast,
                interpreter_id: interpreter_id,
                source_map_rbid: source_map_rbid,
                source_entity_id: source_map_entity,
                proc_id: (this.block.is.procedures_defnoreturn(ast)) ? ast.procedure_name : undefined,
            };
            if (e instanceof catastrophic_1.Catastrophe) {
                var annotation = e.annotation || {};
                _defaults(annotation, metadata);
                if (annotation.block_id == undefined && annotation.block != undefined) {
                    annotation.block_id = annotation.block.id;
                }
                if (annotation.block_type == undefined && annotation.block != undefined) {
                    annotation.block_type = annotation.block.type;
                }
                e.annotation = annotation;
                throw e;
            }
            throw this.ohno.compiler.system.unknown_compiler_error(e, metadata);
        }
        var optifun;
        try {
            optifun = new Function('X', // :StepArgs
            code)(); // the () comes from the hack to get named function for perf measurement
        }
        catch (e) {
            throw this.ohno.compiler.system.constructed_bad_javascript(e, {
                root_block_id: source_map_rbid,
                entity_id: source_map_entity,
                invalid_script: code,
            });
        }
        return {
            script: optifun,
            static_data: static_data,
            dynamic_data_size: dynamic_data_size,
            n_yield_groups: n_yield_groups,
            async_tell_asts: async_tell_asts,
        };
    };
    OptiCompilerImpl.prototype.wrap_with_top_level = function (program) {
        // The last yield point is needed to ensure that if the last block is one
        // that spawns a task, which we must wait to finish, then we must not
        // immediately cause finished, which causes the runtime_manager to assume
        // we are done, which disposes all tasks.
        var last_yield = this.state.create_yield_point();
        // TODO PERF Check if we could gain perf by just referencing a dict in non-pp mode instead
        var statements = [
            "return function optifun(X) {",
            "switch (", this.keyword.program_counter, "[0]) {",
            "case 0: ",
            program.statements,
            last_yield,
            this.keyword.finished, "();",
            "}}",
        ];
        return {
            statements: statements,
        };
    };
    OptiCompilerImpl.prototype.compile_statement = function (ast) {
        try {
            if (ast == undefined) {
                return {
                    statements: '',
                };
            }
            var res = [];
            res.push(this.state.create_before_expression_yield_point(ast));
            var omit_semicolon = false;
            var omit_next = false;
            if (ast.disabled) {
                if (ast.next_block != undefined && omit_next == false) {
                    var r = this.compile_statement(ast.next_block);
                    res.push(r.statements);
                }
                return {
                    statements: res,
                };
            }
            if (this.block.is.repeat_forever(ast)) {
                omit_semicolon = true;
                var r = this.compile_repeat_forever(ast);
                res.push(r.statements);
            }
            else if (this.block.is.repeat_forever_until(ast)) {
                omit_semicolon = true;
                var r = this.compile_repeat_forever_until(ast);
                res.push(r.statements);
            }
            else if (this.block.is.wait_until(ast)) {
                omit_semicolon = true;
                var r = this.compile_wait_until(ast);
                res.push(r.statements);
            }
            else if (this.block.is.repeat_n_times(ast)) {
                omit_semicolon = true;
                var r = this.compile_repeat_n_times(ast);
                res.push(r.statements);
            }
            else if (this.block.is.break(ast)) {
                var r = this.compile_break(ast);
                res.push(r.statements);
            }
            else if (this.block.is.procedures_defnoreturn(ast)) {
                var body = ast.child_block[0];
                if (body == undefined) {
                    // Do nothing if no procedure body
                    omit_semicolon = true;
                }
                else {
                    var r = this.compile_statement(body);
                    res.push(r.statements);
                }
            }
            else if (this.block.is.procedures_callnoreturn(ast)) {
                var r = this.compile_procedure_call(ast);
                res.push(r.pre);
            }
            else if (this.block.is.cond_block(ast)) {
                omit_semicolon = true;
                var r = this.compile_conditional(ast);
                res.push(r.statements);
            }
            else if (this.block.is.async_tell(ast)) {
                omit_semicolon = true;
                var r = this.compile_async_tell(ast);
                res.push(r.statements);
            }
            else if (this.block.is.sync_tell(ast)) {
                omit_semicolon = true;
                var r = this.compile_sync_tell(ast);
                res.push(r.statements);
            }
            else if (this.block.is.warp(ast)) {
                omit_semicolon = true;
                var r = this.compile_warp(ast);
                res.push(r.statements);
            }
            else if (this.block.is.event_block(ast)) {
                omit_semicolon = true;
                var r = this.compile_event(ast);
                res.push(r.statements);
            }
            else if (this.block.is.responder_block(ast)) {
                omit_semicolon = true;
                var r = this.compile_responder(ast);
                res.push(r.statements);
            }
            else if (this.block.is.lifetime_responder_type(ast.type)) {
                omit_semicolon = true;
                var r = this.compile_responder(ast);
                res.push(r.statements);
            }
            else if (this.block.is.procedures_return_value(ast)) {
                omit_semicolon = true;
                omit_next = true;
                var r = this.compile_procedure_return_value(ast);
                res.push(r.statements);
            }
            else {
                var r = this.compile_expression(ast);
                res.push(r.pre);
                res.push(r.expr);
            }
            if (res.length != 0 && omit_semicolon == false) {
                res.push(";");
            }
            if (ast.next_block != undefined && omit_next == false) {
                var r = this.compile_statement(ast.next_block);
                res.push(r.statements);
            }
            return {
                statements: res,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_statement', e, ast);
        }
    };
    OptiCompilerImpl.prototype.opt_safe_static = function (static_value) {
        if (_isNumber(static_value)
            || _isString(static_value)
            || _isBoolean(static_value)) {
            return JSON.stringify(static_value);
        }
        throw this.ohno.system.called_opt_safe_static_with_strange_value({
            value: static_value,
        });
    };
    OptiCompilerImpl.prototype.static_is_safe = function (val) {
        if (val == undefined || val == null) {
            return false;
        }
        if (_isBoolean(val)) {
            return true;
        }
        if (_isNumber(val)) {
            return val != Infinity && !isNaN(val) && val != -Infinity;
        }
        if (_isString(val)) {
            // We don't trust all environments to provide
            // a good JSON.stringify for now. Maybe later
            // we can take the time to verify the ones we
            // care about and just `return true` here,
            // and remove all the is_safe_string code.
            return this.u.misc.is_safe_string(val);
        }
        return false;
    };
    OptiCompilerImpl.prototype.compile_expression = function (ast) {
        // TODO Create a block type for atomic blocks?
        if (ast.disabled) {
            throw this.ohno.compiler.user.disabled_param(new Error(), {
                block: ast,
            });
        }
        try {
            if (this.block.is.atomic_type(ast.type)) {
                var static_value = ast.params[Object.keys(ast.params)[0]];
                if (this.static_is_safe(static_value)) {
                    return {
                        pre: '',
                        expr: this.opt_safe_static(static_value),
                    };
                }
                var static_symbol = this.state.set_static(ast.type + "__" + ast.id, static_value);
                return {
                    pre: '',
                    expr: this.opt_static(static_symbol),
                };
            }
        }
        catch (e) {
            throw this.ohno.compiler.user.error_constructing_value_from_atomic_block(e, {
                block: ast,
            });
        }
        try {
            if (this.block.is.logic_empty(ast)) {
                return this.compile_logic_empty(ast);
            }
            var before_expression_yield = this.state.create_before_expression_yield_point(ast);
            var res = void 0;
            if (this.block.is.procedures_callreturn(ast)) {
                res = this.compile_procedure_call(ast);
            }
            else if (this.block.is.procedures_parameter(ast)) {
                res = this.compile_procedure_parameter(ast);
            }
            else if (this.block.is.domain_block(ast)) {
                res = this.compile_domain_functions(ast);
            }
            else {
                var block = ast;
                throw this.ohno.compiler.system.unknown_expression({
                    unknown_expression_type: block.type,
                    block: block,
                });
            }
            return {
                pre: [before_expression_yield, res.pre],
                expr: res.expr,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_expression', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_conditional = function (ast) {
        var _this = this;
        try {
            var r = [];
            var conditions = void 0;
            if (this.block.is.controls_if_dropdown(ast)) {
                r.push(this.comment('CONDITIONAL_DROPDOWN'));
                conditions = ast.if_dropdown_conditions;
            }
            else {
                r.push(this.comment('CONDITIONAL'));
                conditions = ast.conditions;
            }
            if (ast.child_block.length == 0 || conditions.length == 0) {
                return {
                    statements: '',
                };
            }
            var matched_id = this.state.gen_parameter_symbol("if_matched");
            var matched_param = this.opt_params(matched_id);
            r.push(this.state.create_yield_point());
            r.push(matched_param, " = false;");
            var compile_branch = function (branch, branch_number) {
                if (branch == undefined) {
                    return [];
                }
                var r_branch = [
                    _this.comment("COND_BRANCH " + (branch_number !== undefined ? branch_number : 'ELSE')),
                ];
                r_branch.push(_this.state.push_yield_level(ast));
                var branch_comp = _this.compile_statement(branch);
                r_branch.push(branch_comp.statements);
                r_branch.push(_this.state.create_yield_reset_point());
                r_branch.push(_this.state.pop_yield_level(ast));
                return r_branch;
            };
            for (var i = 0; i < conditions.length; i++) {
                var cond = conditions[i];
                var branch = ast.child_block[i];
                if (cond == undefined) {
                    continue;
                }
                var cond_id = this.state.gen_parameter_symbol("if_cond" + i + "_");
                var cond_param = this.opt_params(cond_id);
                var cond_push = this.state.push_yield_level(ast);
                var r_cond = void 0;
                if (typeof cond !== 'string') {
                    // block is normal condition block, not if_dropdown
                    r_cond = this.compile_expression(cond);
                }
                else {
                    // block is controls_if_dropdown, we need to evaluate the domain function
                    var fake_domain_fun_ast_node = this.block_pool.clone(ast);
                    fake_domain_fun_ast_node.type = cond;
                    fake_domain_fun_ast_node.kind = 'domain_block';
                    r_cond = this.compile_expression(fake_domain_fun_ast_node);
                    this.block_pool.release(fake_domain_fun_ast_node);
                }
                var cond_reset = this.state.create_yield_reset_point();
                var cond_pop = this.state.pop_yield_level(ast);
                var pre_yield = this.state.create_yield_point();
                var r_branch = compile_branch(branch, i); // updates state
                var post_yield = this.state.create_yield_point();
                r.push(this.comment("COND_CHECK " + i), "if (!", matched_param, ") {", cond_push, r_cond.pre, cond_reset, cond_pop, "}");
                r.push(cond_param, " = !", matched_param, " && ", r_cond.expr, ";");
                r.push(matched_param, " = ", matched_param, " || ", cond_param, ";");
                r.push(pre_yield);
                r.push("if (", cond_param, ") {", r_branch, "}");
                r.push(post_yield);
            }
            var else_branch = ast.child_block[conditions.length];
            if (else_branch != undefined) {
                var r_branch = compile_branch(else_branch);
                r.push("if (!", matched_param, ") {", r_branch, "}");
            }
            return {
                statements: r,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_conditional', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_sync_tell = function (ast) {
        try {
            if (ast.child_block[0] == undefined) {
                return {
                    statements: '',
                };
            }
            var params = this.compile_params("__sync_tell_" + ast.id + "__", ast.params);
            var target_id_param = [this.opt_params(params.dynamic_data_id), "['sprite']"];
            this.state.push_target_entity(target_id_param);
            var push = this.state.push_yield_level(ast);
            var body = this.compile_statement(ast.child_block[0]);
            var yield_reset = this.state.create_yield_reset_point();
            var pop = this.state.pop_yield_level(ast);
            this.state.pop_target_entity();
            var statements = [
                this.comment('SYNC_TELL'),
                params.statements,
                "if (", this.keyword.report_sync_telling, "('", ast.id, "', ", target_id_param, ")) {",
                push,
                body.statements,
                yield_reset,
                pop,
                "}",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_sync_tell', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_warp = function (ast) {
        try {
            if (ast.child_block[0] == undefined) {
                return {
                    statements: '',
                };
            }
            this.state.enter_warp_block();
            var body = this.compile_statement(ast.child_block[0]);
            this.state.exit_warp_block();
            return {
                statements: [
                    this.comment('WARP'),
                    body.statements,
                ],
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_warp', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_async_tell = function (ast) {
        try {
            var tell_child = ast.child_block[0];
            if (tell_child == undefined) {
                return {
                    statements: '',
                };
            }
            this.state.add_async_tell_ast(tell_child);
            var params = this.compile_params("__async_tell_" + ast.id + "__", ast.params);
            var target_id_param = [this.opt_params(params.dynamic_data_id), "['sprite']"];
            // TODO in compile_async_tell, instead of tell_child.id, send ast.id
            // it's used to report errors about the tell entity not existing in ensure_tell_target_ok
            var statements = [
                this.comment('ASYNC_TELL'),
                params.statements,
                this.keyword.async_tell,
                "('",
                tell_child.id,
                "', ",
                this.state.current_target_entity(),
                ", ",
                target_id_param,
                ", ",
                this.state.is_inside_warp().toString(),
                ");",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_async_tell', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_repeat_forever = function (ast) {
        try {
            if (ast.child_block[0] == undefined) {
                return {
                    statements: '',
                };
            }
            var break_id = this.state.push_breakable();
            var push = this.state.push_yield_level(ast);
            var r = this.compile_statement(ast.child_block[0]);
            var yield_reset = this.state.create_yield_reset_point();
            var iter_yield = this.state.create_iteration_yield_point();
            var pop = this.state.pop_yield_level(ast);
            this.state.pop_breakable();
            var statements = [
                this.comment('REPEAT_FOREVER'),
                break_id, ": while (true) {",
                push,
                r.statements,
                yield_reset,
                iter_yield,
                pop,
                "}",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_repeat_forever', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_repeat_forever_until = function (ast) {
        try {
            if (ast.child_block[0] == undefined) {
                return {
                    statements: '',
                };
            }
            var break_id = this.state.push_breakable();
            var push = this.state.push_yield_level(ast);
            var params = this.compile_params("__repeat_forever_until_" + ast.id + "__", ast.params);
            var cond_param = [this.opt_params(params.dynamic_data_id), "['condition']"];
            var break_reset = this.state.create_yield_reset_point();
            var r = this.compile_statement(ast.child_block[0]);
            var yield_reset = this.state.create_yield_reset_point();
            var iter_yield = this.state.create_iteration_yield_point();
            var pop = this.state.pop_yield_level(ast);
            this.state.pop_breakable();
            var statements = [
                this.comment('REPEAT_FOREVER_UNTIL'),
                break_id, ": while (true) {",
                push,
                params.statements,
                "if (", cond_param, ") {", break_reset, "break ", break_id, ";}",
                r.statements,
                yield_reset,
                iter_yield,
                pop,
                "}",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_repeat_forever_until', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_repeat_n_times = function (ast) {
        try {
            if (ast.child_block[0] == undefined) {
                return {
                    statements: '',
                };
            }
            var params = this.compile_params("__repeat_n_times_" + ast.id + "__", ast.params);
            var break_id = this.state.push_breakable();
            var push = this.state.push_yield_level(ast);
            var iter_param = [this.opt_params(params.dynamic_data_id), "['times']"];
            var break_reset = this.state.create_yield_reset_point();
            var r = this.compile_statement(ast.child_block[0]);
            var yield_reset = this.state.create_yield_reset_point();
            var iter_yield = this.state.create_iteration_yield_point();
            var pop = this.state.pop_yield_level(ast);
            this.state.pop_breakable();
            var statements = [
                this.comment('REPEAT_N_TIMES'),
                params.statements,
                break_id, ": while (true) {",
                push,
                "if (", iter_param, " <= 0) {", break_reset, "break ", break_id, ";}",
                iter_param, "--;",
                r.statements,
                yield_reset,
                iter_yield,
                pop,
                "}",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_repeat_n_times', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_wait_until = function (ast) {
        try {
            var break_id = this.state.push_breakable();
            var push = this.state.push_yield_level(ast);
            var params = this.compile_params("__wait_until_" + ast.id + "__", ast.params);
            var cond_param = [this.opt_params(params.dynamic_data_id), "['condition']"];
            var break_reset = this.state.create_yield_reset_point();
            var yield_reset = this.state.create_yield_reset_point();
            var iter_yield = this.state.create_iteration_yield_point();
            var pop = this.state.pop_yield_level(ast);
            this.state.pop_breakable();
            var statements = [
                this.comment('WAIT_UNTIL'),
                break_id, ": while (true) {",
                push,
                params.statements,
                "if (", cond_param, ") {", break_reset, "break ", break_id, ";}",
                yield_reset,
                iter_yield,
                pop,
                "}",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_wait_until', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_break = function (ast) {
        try {
            var statements = [
                this.comment('BREAK'),
                this.state.get_current_break_reset_statements(ast),
                this.state.create_yield_reset_point(),
                "break ", this.state.current_break_id(ast), ";",
            ];
            return {
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_break', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_logic_empty = function (ast) {
        try {
            return {
                pre: [],
                expr: ['false'],
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_logic_empty', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_domain_functions = function (ast) {
        try {
            var domain_function_index = this.registry.get_domain_function_index(ast.type);
            if (domain_function_index == undefined) {
                if (!this.config.get().ignore_missing_domain_function) {
                    throw this.ohno.client.missing_domain_function({
                        ns_id: ast.type,
                    });
                }
                domain_function_index = -1;
            }
            var params = this.compile_params("__domain_block_" + ast.type + "_" + ast.id + "__", ast.params);
            var res_params = [];
            res_params.push(params.statements);
            var wrap_id = this.state.gen_parameter_symbol("domain_wrap");
            var wrap_param = this.opt_params(wrap_id);
            var res_expr = [
                this.keyword.call_domain_function, "('",
                wrap_id,
                "', ",
                domain_function_index.toString(),
                ", '",
                ast.id,
                "', ",
                this.opt_params(params.dynamic_data_id),
                ", ",
                this.state.current_target_entity(),
                ");",
            ];
            var res_expr_wrap = [
                res_expr,
                this.state.create_after_potential_blocker_yield_point(ast),
            ];
            return {
                pre: [
                    this.comment("DOMAIN_FUNCTION PRE \"" + ast.type + "\""),
                    res_params,
                    res_expr_wrap,
                ],
                expr: [
                    wrap_param,
                    this.comment("DOMAIN_FUNCTION EXPR \"" + ast.type + "\"", false),
                ],
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_domain_functions', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_event = function (ast) {
        try {
            var triggered_id = this.state.gen_parameter_symbol("if_triggered");
            var triggered_param = this.opt_params(triggered_id);
            var c = this.compile_domain_functions(ast);
            var yield_after_test = this.state.create_yield_point();
            var yield_before_enter = this.state.create_yield_point();
            var push = this.state.push_yield_level(ast);
            var b = this.compile_statement(ast.child_block[0]);
            var yield_reset = this.state.create_yield_reset_point();
            var pop = this.state.pop_yield_level(ast);
            return {
                statements: [
                    this.comment("EVENT \"" + ast.type + "\""),
                    c.pre,
                    yield_after_test,
                    triggered_param, " = ", c.expr, ";",
                    yield_before_enter,
                    "if (", triggered_param, ") {",
                    push,
                    b.statements,
                    yield_reset,
                    pop,
                    "}",
                ],
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_event', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_responder = function (ast) {
        try {
            var b = this.compile_statement(ast.child_block[0]);
            return {
                statements: [
                    this.comment('RESPONDER'),
                    b.statements,
                ],
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_responder', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_procedure_call = function (ast) {
        try {
            var params = this.compile_params("__" + ast.type + "_" + ast.id + "__", ast.params);
            var res_pre = [];
            res_pre.push(this.comment("PROCEDURE_CALL PRE \"" + ast.procedure_name + "\""));
            res_pre.push(params.statements);
            res_pre.push(this.state.create_yield_point());
            res_pre.push([
                this.keyword.proc_call, "('",
                ast.procedure_name,
                "', ",
                this.state.current_target_entity(),
                ", ",
                // TODO Only push procedure parameters, not all the other
                // things that end up in the compile_params dictionary
                this.opt_params(params.dynamic_data_id),
                ", '",
                // Call procedure block id, used by locating runtime error.
                ast.id,
                "', ",
                this.state.is_inside_warp().toString(),
                ");",
            ]);
            res_pre.push(this.state.create_procedure_yield_point());
            var res_expr = [
                this.keyword.proc_return_value,
                this.comment("PROCEDURE_CALL EXPR \"" + ast.procedure_name + "\"", false),
            ];
            return {
                pre: res_pre,
                expr: res_expr,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_procedure_call', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_procedure_parameter = function (ast) {
        var root_block = this.u.block.get_first_ancestor_satisfying(ast, function (cb) { return cb.parent_block == undefined; });
        if (root_block == undefined) {
            throw this.ohno.compiler.system.could_not_find_root_block({
                block: ast,
            });
        }
        if (!this.u.block.is.procedures_defnoreturn(root_block)) {
            throw this.ohno.compiler.user.procedure_parameter_outside({
                block: ast,
            });
        }
        // We currently get the procedure parameter name in the same way as
        // we get all other parameters of blocks - dynamically using compile_params.
        // (To ensure it goes through the same path as all other user supplied data,
        // through static_data, so that it isn't eval'd)
        // But for compile time validation, we make the assumption that the param
        // name is defined statically, and check to ensure it is in the root block
        // procedure definition's list of acceptable parameters.
        var param_name;
        if (ast.params == undefined
            || ast.params.param_name == undefined
            || !_isString(ast.params.param_name)) {
            throw this.ohno.compiler.system.could_not_find_procedure_parameter_name({
                block: ast,
            });
        }
        else {
            param_name = ast.params.param_name;
        }
        if (!root_block.params[param_name]) {
            throw this.ohno.compiler.user.procedure_no_such_parameter({
                param_name: param_name,
                block: ast,
            });
        }
        try {
            var params = this.compile_params("__" + ast.type + "_" + ast.id + "__", ast.params);
            var proc_param_name = [this.opt_params(params.dynamic_data_id), "['param_name']"];
            var res_expr = [
                this.keyword.proc_parameters, "[", proc_param_name, "]",
                this.comment("PROCEDURE_PARAMETER EXPR \"" + param_name + "\"", false),
            ];
            return {
                pre: [
                    this.comment("PROCEDURE_PARAMETER PRE \"" + param_name + "\""),
                    params.statements,
                    "if (", res_expr, " == undefined) {throw ",
                    this.keyword.ohno, ".user.proc_parameter_without_value({",
                    "\"block_id\": '", ast.id, "'});}",
                ],
                expr: res_expr,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_procedure_parameter', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_procedure_return_value = function (ast) {
        var root_block = this.u.block.get_first_ancestor_satisfying(ast, function (cb) { return cb.parent_block == undefined; });
        if (root_block === undefined ||
            (!this.u.block.is.procedures_defnoreturn(root_block))) {
            throw this.ohno.compiler.user.procedure_return_outside({
                block: ast,
            });
        }
        var comment = this.comment('PROCEDURE_RETURN_VALUE');
        try {
            if (ast.params['VALUE'] === undefined) {
                var res = [
                    comment,
                    this.keyword.proc_do_return_value, "('", ast.id, "', ", 'undefined', "); return;",
                ];
                return {
                    statements: res,
                };
            }
            else {
                var params = this.compile_params("__" + ast.type + "_" + ast.id + "__", ast.params);
                var return_value = [this.opt_params(params.dynamic_data_id), "['VALUE']"];
                var res = [
                    comment,
                    params.statements,
                    this.keyword.proc_do_return_value, "('", ast.id, "', ", return_value, "); return;",
                ];
                return {
                    statements: res,
                };
            }
        }
        catch (e) {
            throw this.create_catch_all_error('compile_procedure_return_value', e, ast);
        }
    };
    OptiCompilerImpl.prototype.compile_params = function (name, params) {
        try {
            var comment = this.comment("PARAMS \"" + name + "\"");
            var statements = [comment, this.state.create_yield_point()];
            var param_collection_id = this.state.gen_parameter_symbol(name + "_params");
            statements.push(this.opt_create_params(param_collection_id));
            var param_keys = Object.keys(params);
            if (param_keys.length == 0) {
                return {
                    dynamic_data_id: param_collection_id,
                    statements: statements,
                };
            }
            if (this.deterministic) {
                param_keys = _sortBy(param_keys, _identity);
            }
            for (var i = 0; i < param_keys.length; i++) {
                var p_id = param_keys[i];
                var param = params[p_id];
                if (this.block.is.compiled_block(param)) {
                    var expr = this.compile_expression(param);
                    statements.push(expr.pre);
                    statements.push(this.state.create_yield_point());
                    statements.push(this.opt_set_param(param_collection_id, p_id, expr.expr));
                }
                else {
                    // We must never allow user generated text into the new
                    // Function() call, so all static data is saved in an external
                    // dict.
                    statements.push(this.state.create_yield_point());
                    var val = void 0;
                    if (this.static_is_safe(param)) {
                        val = this.opt_safe_static(param);
                    }
                    else {
                        var static_symbol = this.state.set_static(name + "_" + p_id, param);
                        val = this.opt_static(static_symbol);
                    }
                    statements.push(this.opt_set_param(param_collection_id, p_id, val));
                }
            }
            // Since everything that uses params adds another
            // statement or expr after, add the yield point here
            // for their convenience
            statements.push(this.state.create_yield_point());
            return {
                dynamic_data_id: param_collection_id,
                statements: statements,
            };
        }
        catch (e) {
            throw this.create_catch_all_error('compile_params', e);
        }
    };
    OptiCompilerImpl.prototype.opt_static = function (key) {
        if (this.should_pretty_print) {
            // index by string
            return [this.keyword.static_data, "['", key, "']"];
        }
        // If we're not pretty printing, the static data is an array
        // this gives us much faster access
        return [this.keyword.static_data, "[", key, "]"];
    };
    OptiCompilerImpl.prototype.opt_params = function (key) {
        if (this.should_pretty_print) {
            // index by string
            return [this.keyword.dynamic_data, "['", key, "']"];
        }
        // If we're not pretty printing, the dynamic data is an array
        // this gives us much faster access
        return [this.keyword.dynamic_data, "[", key, "]"];
    };
    OptiCompilerImpl.prototype.opt_create_params = function (key) {
        return [this.opt_params(key), " = {};"];
    };
    OptiCompilerImpl.prototype.opt_set_param = function (key, param, value) {
        return [this.opt_params(key), "['", param, "'] = ", value, ";"];
    };
    OptiCompilerImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Log)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(4, inversify_1.inject(di_symbols_1.BINDING.PRNGFactory)),
        tslib_1.__param(5, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__param(6, inversify_1.inject(di_symbols_1.BINDING.BlockUtil)),
        tslib_1.__param(7, inversify_1.inject(di_symbols_1.BINDING.Config)),
        tslib_1.__param(8, inversify_1.inject(di_symbols_1.BINDING.Registry)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
    ], OptiCompilerImpl);
    return OptiCompilerImpl;
}());
exports.OptiCompilerImpl = OptiCompilerImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3B0aS9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEM7QUFDOUMsaURBQW9EO0FBQ3BELDJDQUE4QztBQUM5Qyw2Q0FBZ0Q7QUFDaEQsMkNBQThDO0FBQzlDLDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFDMUMsNkNBQTJDO0FBQzNDLHVDQUErQztBQUcvQyxvQ0FBc0M7QUFDdEMsNENBQXdDO0FBa0R4QyxTQUFTLElBQUksQ0FBSSxLQUFTO0lBQ3hCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFBRSxPQUFPLFNBQVMsQ0FBQztLQUFFO0lBQzVDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQThCRCxJQUFNLGNBQWMsR0FBWTtJQUM5QixJQUFJLEVBQUUsTUFBTTtJQUNaLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsbUJBQW1CLEVBQUUsTUFBTTtJQUMzQixVQUFVLEVBQUUsTUFBTTtJQUVsQix3QkFBd0IsRUFBRSxNQUFNO0lBQ2hDLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFdBQVcsRUFBRSxNQUFNO0lBRW5CLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGlCQUFpQixFQUFFLE1BQU07SUFDekIscUJBQXFCLEVBQUUsTUFBTTtJQUM3QixvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLHFCQUFxQixFQUFFLE1BQU07SUFFN0IsWUFBWSxFQUFFLE1BQU07SUFDcEIsZUFBZSxFQUFFLE1BQU07SUFFdkIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6Qix1QkFBdUIsRUFBRSxNQUFNO0lBQy9CLHlCQUF5QixFQUFFLE1BQU07SUFDakMscUJBQXFCLEVBQUUsTUFBTTtJQUM3QixlQUFlLEVBQUUsTUFBTTtJQUN2QixRQUFRLEVBQUUsTUFB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