"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _isString = require("lodash/isString");
var _unescape = require("lodash/unescape");
var inversify_1 = require("inversify");
var B = require("../block_types");
var di_symbols_1 = require("../di_symbols");
var JSONEntityCompilerImpl = /** @class */ (function () {
    function JSONEntityCompilerImpl(block_pool, ohno, block, event_bus) {
        this.block_pool = block_pool;
        this.ohno = ohno;
        this.block = block;
        this.event_bus = event_bus;
    }
    JSONEntityCompilerImpl.prototype.compile = function (entity, force_compile_block_ids, compile_all_blocks) {
        if (compile_all_blocks === void 0) { compile_all_blocks = false; }
        var res = this.compile_from_workspace_json(entity.blocksJSON, force_compile_block_ids, compile_all_blocks);
        return {
            id: entity.id,
            procedures: res.procedures,
            compiled_block_map: res.compiled_block_map,
        };
    };
    JSONEntityCompilerImpl.prototype.compile_from_workspace_json = function (ws_json, force_compile_block_ids, compile_all_blocks) {
        var _this = this;
        if (compile_all_blocks === void 0) { compile_all_blocks = false; }
        var res = {
            procedures: {},
            compiled_block_map: {},
        };
        if (!ws_json.blocks) {
            return res;
        }
        // Find all top blocks
        // No error in this step
        var top_blocks = new Set(Object.keys(ws_json.blocks));
        Object.keys(ws_json.connections).forEach(function (parent_id) {
            Object.keys(ws_json.connections[parent_id]).forEach(function (child_id) {
                top_blocks.delete(child_id);
            });
        });
        top_blocks.forEach(function (b_id) {
            var j = _this.ws_json_to_json(ws_json, b_id);
            if (j == undefined) {
                return;
            }
            if (compile_all_blocks == false) {
                if (force_compile_block_ids) {
                    // We're running some individual block, and might not want to skip this one
                    if (!force_compile_block_ids[j.id]) {
                        // It wasn't in the force list, skip it
                        return;
                    }
                }
                else {
                    // We're running normally, skip any block that isn't a hat block
                    if (!_this.block.is.hat_block_type(j.type)) {
                        return;
                    }
                }
            }
            // Save the compiled block
            if (_this.block.is.procedures_defnoreturn(j)) {
                // Place procedure definition blocks in their own dict
                res.procedures[j.procedure_name] = j;
            }
            else {
                // Place normal hat blocks in the compiled_block_map
                if (j.id != undefined) {
                    res.compiled_block_map[j.id] = j;
                }
            }
        });
        return res;
    };
    JSONEntityCompilerImpl.prototype.ws_json_to_json = function (ws_json, curr_id, parent) {
        var _this = this;
        if (!curr_id) {
            return undefined;
        }
        var block_data_json = ws_json.blocks[curr_id];
        if (!block_data_json) {
            throw this.ohno.compiler.user.json_compiler_invalid_block({ block_id: curr_id });
        }
        /**
         * Connections to current block.
         */
        var connections = ws_json.connections[curr_id] || {};
        var block_children = {
            next: '',
            inputs: [],
        };
        for (var child_id in connections) {
            if (connections[child_id].type === 'next') {
                if (block_children.next) {
                    this.event_bus.warning.all.send({
                        error: this.ohno.compiler.warning.json_compiler_multi_children_on_one_connection({
                            parent_id: curr_id,
                            children_id: [block_children.next, child_id],
                            type: 'next',
                        }),
                    });
                }
                block_children.next = child_id;
            }
            else {
                block_children.inputs.push(child_id);
            }
        }
        // All children noted in block_children can be found in ws_json.blocks until here.
        var next_block_json = block_children.next
            ? this.ws_json_to_json(ws_json, block_children.next, parent)
            : undefined;
        var pre_block = this.block_pool.get();
        // Save info of current block
        pre_block.type = block_data_json.type;
        pre_block.disabled = !!block_data_json.disabled;
        pre_block.id = block_data_json.id;
        pre_block.parent_block = parent; // Will become a CompiledBlock after compilation is done
        pre_block.next_block = next_block_json;
        pre_block.first_evaluation = true;
        pre_block.done_evaluating = false;
        pre_block.output_type = block_data_json.is_output && block_data_json.parent_id ? B.BlockOutputType.number : B.BlockOutputType.none;
        this.parse_kind(pre_block);
        // Handle block params
        // Block inputs
        block_children.inputs.forEach(function (_b_id) {
            var conn = connections[_b_id];
            if (conn.type === 'next') {
                return;
            }
            var input_json = _this.ws_json_to_json(ws_json, _b_id, pre_block);
            if (conn.input_type === 'value') {
                if (pre_block.params[conn.input_name]) {
                    _this.event_bus.warning.all.send({
                        error: _this.ohno.compiler.warning.json_compiler_multi_children_on_one_connection({
                            parent_id: pre_block.id,
                            children: [pre_block.params[conn.input_name], _b_id],
                            type: 'value',
                        }),
                    });
                }
                pre_block.params[conn.input_name] = input_json;
            }
            else { // 'statement'
                pre_block.child_block.push(input_json);
            }
        });
        // Directly connected fields
        Object.keys(block_data_json.fields).forEach(function (field_name) {
            if (field_name === 'NUM') {
                pre_block.params[field_name] = parseFloat(block_data_json.fields[field_name]);
            }
            else {
                pre_block.params[field_name] = _unescape(block_data_json.fields[field_name]);
            }
        });
        if (this.block.is.cond_block(pre_block)) {
            return this.conditional_json_to_json(pre_block, ws_json);
        }
        if (this.block.is.proc_block(pre_block)) {
            return this.procedure_json_to_json(pre_block, ws_json);
        }
        if (pre_block.type === 'start_on_click_2') {
            pre_block.next_block = pre_block.child_block.shift();
        }
        // Block type is some domain specific block, e.g. a stage2d or minecraft block.
        return pre_block;
    };
    JSONEntityCompilerImpl.prototype.parse_kind = function (pre_block) {
        pre_block.kind = pre_block.type;
        if (this.block.is.loop_block(pre_block)) {
            return;
        }
        if (this.block.is.cond_block(pre_block)) {
            if (this.block.is.controls_if_dropdown(pre_block)) {
                pre_block.kind = 'controls_if_dropdown';
            }
            return;
        }
        if (this.block.is.event_block(pre_block)) {
            // There are many event block types but only one event block kind
            pre_block.kind = 'event_block';
            return;
        }
        if (this.block.is.responder_block(pre_block) ||
            this.block.is.lifetime_responder_type(pre_block.type)) {
            pre_block.kind = 'responder_block';
            return;
        }
        if (this.block.is.proc_block(pre_block)) {
            return;
        }
        if (this.block.is.async_tell(pre_block) || this.block.is.sync_tell(pre_block)) {
            return;
        }
        if (this.block.is.warp(pre_block)) {
            return;
        }
        pre_block.kind = 'domain_block';
    };
    /**
     * 1. Reorder child blocks, fill with necessary 'undefined'
     * 2. params -> conditions
     */
    JSONEntityCompilerImpl.prototype.conditional_json_to_json = function (pre_block, ws_json) {
        var result = pre_block;
        // TODO after equal AST compile output tests done, check if can remove these two lines
        result.conditions = [];
        result.if_dropdown_conditions = [];
        var DOs = [];
        var ELSE = undefined;
        // mutation tag has been removed in new project, we should compute the number of [else],
        // [elseif] and [statement] manually
        // so as the relationship between condition and children
        function get_n_statements() {
            var max_if = 0;
            var max_do = 0;
            var conns = ws_json.connections[pre_block.id];
            Object.keys(conns).forEach(function (child_id) {
                var conn = conns[child_id];
                if (conn.type === 'next') {
                    return;
                }
                if (conn.input_name.indexOf('IF') >= 0) {
                    max_if = Math.max(max_if, parseInt(conn.input_name.split('IF')[1]));
                }
                else if (conn.input_name.indexOf('DO') >= 0) {
                    var idx = parseInt(conn.input_name.split('DO')[1]);
                    max_do = Math.max(max_do, idx);
                    DOs[idx] = pre_block.child_block.find(function (b) { var _a; return ((_a = b) === null || _a === void 0 ? void 0 : _a.id) === child_id; });
                }
                else if (conn.input_name === 'ELSE') {
                    ELSE = pre_block.child_block.find(function (b) { var _a; return ((_a = b) === null || _a === void 0 ? void 0 : _a.id) === child_id; });
                }
            });
            return Math.max(max_if, max_do) + 1;
        }
        var n_statements = get_n_statements();
        result.child_block.length = 0;
        for (var i = 0; i < n_statements; ++i) {
            var condition = pre_block.params["IF" + i];
            if (this.block.is.controls_if_dropdown(result)) {
                if (typeof condition !== 'string') {
                    throw this.ohno.compiler.system.if_dropdown_condition_not_string({ pre_block: pre_block });
                }
                result.if_dropdown_conditions.push(condition);
            }
            else {
                if (typeof condition !== 'boolean' &&
                    typeof condition !== 'string' &&
                    typeof condition !== 'number') {
                    result.conditions.push(condition);
                }
                else {
                    result.conditions.push(undefined);
                }
            }
            result.child_block.push(DOs[i]);
        }
        result.child_block.push(ELSE);
        result.params = {}; // Reset unused params
        return result;
    };
    JSONEntityCompilerImpl.prototype.procedure_json_to_json = function (pre_block, ws_json) {
        switch (B.PROCEDURE_BLOCKS[pre_block.type]) {
            case B.PROCEDURE_BLOCKS.procedures_defnoreturn: return this.json_procedure_definition_to_json(pre_block, ws_json);
            case B.PROCEDURE_BLOCKS.procedures_2_defnoreturn: return this.json_procedure_2_definition_to_json(pre_block);
            case B.PROCEDURE_BLOCKS.procedures_callreturn:
            case B.PROCEDURE_BLOCKS.procedures_2_callreturn:
                return this.json_procedure_call_return_to_json(pre_block, ws_json);
            case B.PROCEDURE_BLOCKS.procedures_callnoreturn:
            case B.PROCEDURE_BLOCKS.procedures_2_callnoreturn:
                return this.json_procedure_call_no_return_to_json(pre_block, ws_json);
            case B.PROCEDURE_BLOCKS.procedures_return_value: return pre_block;
            case B.PROCEDURE_BLOCKS.procedures_2_return_value: return pre_block;
            case B.PROCEDURE_BLOCKS.procedures_parameter: return pre_block;
            case B.PROCEDURE_BLOCKS.procedures_2_parameter: return pre_block;
        }
        throw this.ohno.compiler.system.unknown_procedure_block_type({ pre_block: pre_block });
    };
    /**
     * 1. Extract procedure name
     * 2. Fill result.params
     */
    JSONEntityCompilerImpl.prototype.json_procedure_definition_to_json = function (pre_block, ws_json) {
        var _a;
        var procedure_name = pre_block.params['NAME'];
        if (!_isString(procedure_name)) {
            throw this.ohno.compiler.system.procedure_name_not_string({ pre_block: pre_block });
        }
        var result = pre_block;
        result.procedure_name = procedure_name;
        result.params = {};
        var param_attrs = ws_json.blocks[pre_block.id].mutation.match(/ name="[^"]+"/g);
        (_a = param_attrs) === null || _a === void 0 ? void 0 : _a.forEach(function (pattern) {
            var param_name = pattern.slice(7, pattern.length - 1);
            result.params[param_name] = true;
        });
        return result;
    };
    /**
     * 1. Extract procedure name
     * 2. Convert result.params['PARAMS0'] to result.params['x'] ('x' stands for user-defined param name)
     */
    JSONEntityCompilerImpl.prototype.json_procedure_2_definition_to_json = function (pre_block) {
        var procedure_name = pre_block.params['NAME'];
        if (!_isString(procedure_name)) {
            throw this.ohno.compiler.system.procedure_name_not_string({ pre_block: pre_block });
        }
        var result = pre_block;
        result.procedure_name = procedure_name;
        delete result.params['NAME'];
        var parsed_param_names = Object.keys(result.params);
        parsed_param_names.forEach(function (default_param_name) {
            var stable_param_block = result.params[default_param_name];
            result.params[stable_param_block.params['param_name']] = true;
            delete result.params[default_param_name];
        });
        return result;
    };
    /**
     * 1. Extract procedure name
     * 2. Convert result.params['ARG0'] to result.params['x'] ('x' stands for user-defined param name)
     */
    JSONEntityCompilerImpl.prototype.json_procedure_call_return_to_json = function (pre_block, ws_json) {
        var _a;
        var result = pre_block;
        var name_attrs = ws_json.blocks[pre_block.id].mutation.match(/ name="[^"]+"/g);
        var param_attrs_prefix_len = ' name="'.length;
        var param_attrs_suffix_len = '"'.length;
        (_a = name_attrs) === null || _a === void 0 ? void 0 : _a.forEach(function (pattern, idx) {
            var name = pattern.slice(param_attrs_prefix_len, pattern.length - param_attrs_suffix_len);
            if (idx === 0) {
                result.procedure_name = name;
                delete (result.params['NAME']);
                return;
            }
            var default_arg_name = "ARG" + (idx - 1);
            result.params[name] = result.params[default_arg_name];
            delete result.params[default_arg_name];
        });
        return result;
    };
    // TODO Any difference with json_procedure_call_return_to_json ?
    JSONEntityCompilerImpl.prototype.json_procedure_call_no_return_to_json = function (pre_block, ws_json) {
        return this.json_procedure_call_return_to_json(pre_block, ws_json);
    };
    JSONEntityCompilerImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.BlockUtil)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.EventBus)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
    ], JSONEntityCompilerImpl);
    return JSONEntityCompilerImpl;
}());
exports.JSONEntityCompilerImpl = JSONEntityCompilerImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl9lbnRpdHlfY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcGlsZXIvanNvbl9lbnRpdHlfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThDO0FBQzlDLDJDQUE4QztBQUM5Qyx1Q0FBK0M7QUFFL0Msa0NBQW9DO0FBZXBDLDRDQUF3QztBQUl4QztJQUNFLGdDQUN1QyxVQUFvQixFQUN6QixJQUFTLEVBQ0osS0FBZSxFQUNoQixTQUF5QjtRQUh4QixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQUs7UUFDSixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWdCO0lBQzVELENBQUM7SUFFRyx3Q0FBTyxHQUFkLFVBQ0ksTUFBMkIsRUFDM0IsdUJBQXVDLEVBQ3ZDLGtCQUEwQjtRQUExQixtQ0FBQSxFQUFBLDBCQUEwQjtRQUU1QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQzFDLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLHVCQUF1QixFQUN2QixrQkFBa0IsQ0FDbkIsQ0FBQztRQUNGLE9BQU87WUFDTCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGtCQUFrQjtTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVPLDREQUEyQixHQUFuQyxVQUNJLE9BQTRCLEVBQzVCLHVCQUF1QyxFQUN2QyxrQkFBMEI7UUFIOUIsaUJBc0RDO1FBbkRHLG1DQUFBLEVBQUEsMEJBQTBCO1FBRzVCLElBQU0sR0FBRyxHQUF1QjtZQUM5QixVQUFVLEVBQUUsRUFBRTtZQUNkLGtCQUFrQixFQUFFLEVBQUU7U0FDdkIsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU8sR0FBRyxD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