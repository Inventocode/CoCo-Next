"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _isString = require("lodash/isString");
var _unescape = require("lodash/unescape");
var inversify_1 = require("inversify");
var B = require("../../block_types");
var di_symbols_1 = require("../../di_symbols");
var XMLEntityCompilerImpl = /** @class */ (function () {
    function XMLEntityCompilerImpl(block_pool, ohno, block, parser) {
        this.block_pool = block_pool;
        this.ohno = ohno;
        this.block = block;
        this.parser = parser;
    }
    XMLEntityCompilerImpl.prototype.compile = function (entity, force_compile_block_ids, compile_all_blocks) {
        if (compile_all_blocks === void 0) { compile_all_blocks = false; }
        var res = this.compile_from_workspace_xml(entity.blocksXML.trim(), // sometimes breaks without trim
        force_compile_block_ids, compile_all_blocks);
        return {
            id: entity.id,
            procedures: res.procedures,
            compiled_block_map: res.compiled_block_map,
        };
    };
    XMLEntityCompilerImpl.prototype.compile_from_workspace_xml = function (xml_string, force_compile_block_ids, compile_all_blocks) {
        var _this = this;
        if (compile_all_blocks === void 0) { compile_all_blocks = false; }
        var res = {
            procedures: {},
            compiled_block_map: {},
        };
        if (!xml_string) {
            return res;
        }
        this.parser.parse(xml_string, function (doms) {
            // compile each block stack, or, each child in xml dom.
            for (var i = 0; i < doms.length; i++) {
                var j = _this.xml_to_json(doms[i]);
                if (j == undefined) {
                    continue;
                }
                if (compile_all_blocks == false) {
                    if (force_compile_block_ids) {
                        // We're running some individual block, and might not want to skip this one
                        if (!force_compile_block_ids[j.id]) {
                            // It wasn't in the force list, skip it
                            continue;
                        }
                    }
                    else {
                        // We're running normally, skip any block that isn't a hat block
                        if (!_this.block.is.hat_block_type(j.type)) {
                            continue;
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
            }
        });
        return res;
    };
    XMLEntityCompilerImpl.prototype.parse_xml_field = function (xml_dom) {
        var value = this.parser.inner_html(xml_dom);
        if (this.parser.attr(xml_dom, 'name') == 'NUM') {
            return parseFloat(value);
        }
        return _unescape(value);
    };
    XMLEntityCompilerImpl.prototype.xml_to_json = function (xml_dom, parent) {
        var _this = this;
        if (!xml_dom) {
            return undefined;
        }
        // Lookup tables for child nodes, this includes the "next" node
        var child_nodes = {
            named: {},
            tagged: {},
        };
        // Iterate children of current dom, with depth 1.
        // [PREDICATION]: in children in same depth, no duplicated dom with same tag or name exists.
        //  Otherwise, info will lost.
        this.parser.for_each_child(xml_dom, function (child) {
            var tag_name = _this.parser.tag_name(child);
            child_nodes.tagged[tag_name] = child;
            var name = _this.parser.attr(child, 'name');
            if (name) {
                child_nodes.named[name] = child;
            }
        });
        var next_block_dom = child_nodes.tagged['next'];
        // Recursively handle leaves in the nesting XML structure first,
        // then branches, last the root.
        var next_block_json = next_block_dom
            ? this.xml_to_json(this.parser.first_child(next_block_dom), parent)
            : undefined;
        // Get a new PreBlock instance from the pool.
        // 'pre' may stand for predicated / prepared.
        var pre_block = this.block_pool.get();
        // Save info of current block
        pre_block.kind = this.parser.attr(xml_dom, 'type');
        pre_block.type = this.parser.attr(xml_dom, 'type');
        pre_block.disabled = !!this.parser.attr(xml_dom, 'disabled');
        pre_block.id = this.parser.attr(xml_dom, 'id');
        pre_block.parent_block = parent; // Will become a CompiledBlock after compilation is done
        pre_block.next_block = next_block_json;
        pre_block.first_evaluation = true;
        pre_block.done_evaluating = false;
        var parent_node = this.parser.parent(xml_dom);
        pre_block.output_type = (parent_node && this.parser.tag_name(parent_node) == 'value') ? B.BlockOutputType.number : B.BlockOutputType.none;
        // TODO Seems that all blocks connected to value input are treated as B.BlockOutputType.number, it's magic - is this attribute used in any project now?
        // Iterate children of current dom, with depth 1, again.
        // Handle all inputs of 'value' type and all fields on current block, i.e. parse params.
        this.parser.for_each_child(xml_dom, function (child) {
            var child_name = _this.parser.attr(child, 'name');
            var child_tag = _this.parser.tag_name(child);
            if (child_tag == 'value') {
                // [PREDICATION]: the param block is always the lastChild
                var param = _this.xml_to_json(_this.parser.last_child(child), pre_block);
                if (param != undefined) {
                    pre_block.params[child_name] = param;
                }
            }
            else if (child_tag == 'field') {
                pre_block.params[child_name] = _this.parse_xml_field(child);
            }
        });
        if (this.block.is.loop_block(pre_block)) {
            return this.loop_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.cond_block(pre_block)) {
            return this.conditional_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.event_block(pre_block)) {
            return this.event_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.responder_block(pre_block)) {
            return this.responder_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.lifetime_responder_type(pre_block.type)) {
            return this.responder_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.proc_block(pre_block)) {
            return this.procedure_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.async_tell(pre_block) || this.block.is.sync_tell(pre_block)) {
            return this.tell_to_json(pre_block, child_nodes);
        }
        else if (this.block.is.warp(pre_block)) {
            return this.warp_to_json(pre_block, child_nodes);
        }
        else if (pre_block.type === 'start_on_click_2') {
            var _next_block_dom = child_nodes.tagged['statement'];
            var _next_block_json = _next_block_dom ? this.xml_to_json(this.parser.first_child(_next_block_dom), parent) : undefined;
            pre_block.next_block = _next_block_json;
        }
        // Block type is some domain specific block, e.g. a stage2d or minecraft block.
        pre_block.kind = 'domain_block';
        return pre_block;
    };
    XMLEntityCompilerImpl.prototype.responder_to_json = function (pre_block, child_nodes) {
        // There are many Action block types but only one Action block kind
        pre_block.kind = 'responder_block';
        var result = pre_block;
        if (child_nodes.tagged['statement']) {
            result.child_block.push(this.xml_to_json(this.parser.last_child(child_nodes.tagged['statement']), result));
        }
        return result;
    };
    XMLEntityCompilerImpl.prototype.event_to_json = function (pre_block, child_nodes) {
        // There are many event block types but only one event block kind
        pre_block.kind = 'event_block';
        var result = pre_block;
        if (child_nodes.tagged['statement']) {
            result.child_block.push(this.xml_to_json(this.parser.last_child(child_nodes.tagged['statement']), result));
        }
        return result;
    };
    XMLEntityCompilerImpl.prototype.loop_to_json = function (pre_block, child_nodes) {
        var named = child_nodes.named;
        var result = pre_block;
        if (this.block.is.repeat_n_times(result)
            || this.block.is.repeat_forever(result)
            || this.block.is.repeat_forever_until(result)) {
            result.child_block.push(named['DO']
                ? this.xml_to_json(this.parser.first_child(named['DO']), result)
                : undefined);
        }
        return result;
    };
    XMLEntityCompilerImpl.prototype.tell_to_json = function (pre_block, child_nodes) {
        var named = child_nodes.named;
        var result = pre_block;
        result.child_block.push(named['DO']
            ? this.xml_to_json(this.parser.first_child(named['DO']), result)
            : undefined);
        return result;
    };
    XMLEntityCompilerImpl.prototype.warp_to_json = function (pre_block, child_nodes) {
        var named = child_nodes.named;
        var result = pre_block;
        result.child_block.push(named['DO']
            ? this.xml_to_json(this.parser.first_child(named['DO']), result)
            : undefined);
        return result;
    };
    XMLEntityCompilerImpl.prototype.conditional_to_json = function (pre_block, child_nodes) {
        var named = child_nodes.named;
        var result = pre_block;
        if (this.block.is.controls_if_dropdown(result)) {
            result.kind = 'controls_if_dropdown';
        }
        // TODO after equal AST compile output tests done, check if can remove these two lines
        result.conditions = [];
        result.if_dropdown_conditions = [];
        // mutation tag has been removed in new project
        // so we should compute the number of [else],[elseif] and [statement] manually
        function get_n_statements() {
            var keys = Object.keys(named);
            var max_if = 0;
            var max_do = 0;
            keys.forEach(function (key) {
                if (key.indexOf('IF') >= 0) {
                    max_if = Math.max(max_if, parseInt(key.split('IF')[1]));
                }
                else if (key.indexOf('DO') >= 0) {
                    max_do = Math.max(max_do, parseInt(key.split('DO')[1]));
                }
            });
            return Math.max(max_if, max_do) + 1;
        }
        var n_statements = get_n_statements();
        for (var i = 0; i < n_statements; ++i) {
            var condition = named["IF" + i];
            if (condition === undefined) {
                result.conditions.push(undefined);
            }
            else {
                if (this.block.is.controls_if_dropdown(result)) {
                    var condition_domain_function = pre_block.params["IF" + i];
                    if (!condition_domain_function || typeof condition_domain_function !== 'string') {
                        throw this.ohno.compiler.system.if_dropdown_condition_not_string({ pre_block: pre_block });
                    }
                    result.if_dropdown_conditions.push(condition_domain_function);
                }
                else {
                    result.conditions.push(this.xml_to_json(this.parser.last_child(condition), pre_block));
                }
            }
            var statement = named["DO" + i];
            if (statement) {
                result.child_block.push(this.xml_to_json(this.parser.last_child(statement), pre_block));
            }
            else {
                result.child_block.push(undefined);
            }
        }
        var else_statement = named['ELSE'];
        if (else_statement) {
            result.child_block.push(this.xml_to_json(this.parser.last_child(else_statement), pre_block));
        }
        else {
            result.child_block.push(undefined);
        }
        result.params = {}; // Reset unused params
        return result;
    };
    XMLEntityCompilerImpl.prototype.procedure_to_json = function (pre_block, child_nodes) {
        switch (B.PROCEDURE_BLOCKS[pre_block.type]) {
            case B.PROCEDURE_BLOCKS.procedures_defnoreturn: return this.procedure_definition_to_json(pre_block, child_nodes);
            case B.PROCEDURE_BLOCKS.procedures_2_defnoreturn: return this.procedure_2_definition_to_json(pre_block, child_nodes);
            case B.PROCEDURE_BLOCKS.procedures_callreturn:
            case B.PROCEDURE_BLOCKS.procedures_2_callreturn:
                return this.procedure_call_return_to_json(pre_block, child_nodes);
            case B.PROCEDURE_BLOCKS.procedures_callnoreturn:
            case B.PROCEDURE_BLOCKS.procedures_2_callnoreturn:
                return this.procedure_call_no_return_to_json(pre_block, child_nodes);
            case B.PROCEDURE_BLOCKS.procedures_return_value: return pre_block;
            case B.PROCEDURE_BLOCKS.procedures_2_return_value: return pre_block;
            case B.PROCEDURE_BLOCKS.procedures_parameter: return pre_block;
            case B.PROCEDURE_BLOCKS.procedures_2_parameter: return pre_block;
        }
        throw this.ohno.compiler.system.unknown_procedure_block_type({ pre_block: pre_block, child_nodes: child_nodes });
    };
    XMLEntityCompilerImpl.prototype.procedure_definition_to_json = function (pre_block, child_nodes) {
        var _this = this;
        var tagged = child_nodes.tagged;
        var procedure_name = pre_block.params['NAME'];
        if (!_isString(procedure_name)) {
            throw this.ohno.compiler.system.procedure_name_not_string({ pre_block: pre_block });
        }
        var result = pre_block;
        result.procedure_name = procedure_name;
        result.params = {};
        var vars = tagged['mutation'];
        if (vars) {
            this.parser.for_each_child(vars, function (var_dom) {
                result.params[_this.parser.attr(var_dom, 'name')] = true;
            });
        }
        if (tagged['statement']) {
            result.child_block.push(this.xml_to_json(this.parser.last_child(tagged['statement']), result));
        }
        return result;
    };
    XMLEntityCompilerImpl.prototype.procedure_2_definition_to_json = function (pre_block, child_nodes) {
        var named = child_nodes.named, tagged = child_nodes.tagged;
        var procedure_name = pre_block.params['NAME'];
        if (!_isString(procedure_name)) {
            throw this.ohno.compiler.system.procedure_name_not_string({ pre_block: pre_block });
        }
        var result = pre_block;
        result.procedure_name = procedure_name;
        result.params = {};
        for (var key in named) {
            if (this.parser.tag_name(named[key]) == 'value') {
                var c = this.parser.children(named[key])[1];
                var z = this.parser.children(c)[0];
                var name_1 = this.parser.inner_html(z);
                result.params[name_1] = true;
            }
        }
        if (tagged['statement']) {
            result.child_block.push(this.xml_to_json(this.parser.last_child(tagged['statement']), result));
        }
        return result;
    };
    XMLEntityCompilerImpl.prototype.procedure_call_return_to_json = function (pre_block, child_nodes) {
        var _this = this;
        var tagged = child_nodes.tagged;
        var vars = tagged['mutation'];
        var result = pre_block;
        if (vars) {
            this.parser.for_each_child(vars, function (child, i) {
                result.params[_this.parser.attr(child, 'name')] = result.params["ARG" + i];
                delete (result.params["ARG" + i]);
            });
        }
        result.procedure_name = this.parser.attr(vars, 'name');
        delete (result.params['NAME']);
        return result;
    };
    XMLEntityCompilerImpl.prototype.procedure_call_no_return_to_json = function (pre_block, child_nodes) {
        var _this = this;
        var tagged = child_nodes.tagged;
        var vars = tagged['mutation'];
        var procedure_name = pre_block.params['NAME'];
        if (!_isString(procedure_name)) {
            throw this.ohno.compiler.system.procedure_call_name_not_string({ pre_block: pre_block });
        }
        var result = pre_block;
        result.procedure_name = procedure_name;
        if (vars) {
            this.parser.for_each_child(vars, function (child, i) {
                result.params[_this.parser.attr(child, 'name')] = result.params["ARG" + i];
                delete (result.params["ARG" + i]);
                delete (result.params["ARGNAME" + i]);
            });
        }
        delete (result.params['WITH']);
        delete (result.params['NAME']);
        return result;
    };
    XMLEntityCompilerImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.BlockPool)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.BlockUtil)),
        tslib_1.__param(3, inversify_1.inject(di_symbols_1.BINDING.XMLParser)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
    ], XMLEntityCompilerImpl);
    return XMLEntityCompilerImpl;
}());
exports.XMLEntityCompilerImpl = XMLEntityCompilerImpl;
// TODO: replace all ! by throwing error.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcGlsZXIveG1sX2VudGl0eV9jb21waWxlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEM7QUFDOUMsMkNBQThDO0FBQzlDLHVDQUErQztBQUUvQyxxQ0FBdUM7QUFjdkMsK0NBQTJDO0FBUTNDO0lBRUUsK0JBQ3VDLFVBQW9CLEVBQ3pCLElBQVMsRUFDSixLQUFlLEVBQ2YsTUFBbUI7UUFIbkIsZUFBVSxHQUFWLFVBQVUsQ0FBVTtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ0osVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDdkQsQ0FBQztJQUVHLHVDQUFPLEdBQWQsVUFDSSxNQUEwQixFQUMxQix1QkFBdUMsRUFDdkMsa0JBQTBCO1FBQTFCLG1DQUFBLEVBQUEsMEJBQTBCO1FBRTVCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FDekMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxnQ0FBZ0M7UUFDekQsdUJBQXVCLEVBQ3ZCLGtCQUFrQixDQUNuQixDQUFDO1FBQ0YsT0FBTztZQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNiLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtZQUMxQixrQkFBa0IsRUFBRSxHQUFHLENBQUMsa0JBQWtCO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRU8sMERBQTBCLEdBQWxDLFVBQ0ksVUFBaUIsRUFDakIsdUJBQXVDLEVBQ3ZDLGtCQUEwQjtRQUg5QixpQkFxREM7UUFsREcsbUNBQUEsRUFBQSwwQkFBMEI7UUFHNUIsSUFBTSxHQUFHLEdBQXVCO1lBQzlCLFVBQVUsRUFBRSxFQUFFO1lBQ2Qsa0JBQWtCLEVBQUUsRUFBRTtTQUN2QixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8s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