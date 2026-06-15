"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register_procedure_json_generator = void 0;
var constants_1 = require("../constants");
function register_procedure_json_generator(generator) {
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.DEF, function (workspace_json, curr_id) {
        var block = workspace_json.blocks[curr_id];
        var name = generator.get_field_value(block, 'NAME');
        var params = Object.keys(block.shadows)
            .filter(function (input_name) { return input_name.startsWith(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX); })
            .map(function (input_name) { return generator.value_to_code(workspace_json, curr_id, input_name, generator.ORDER_ATOMIC); });
        var branch = generator.statement_to_code(workspace_json, curr_id, 'STACK');
        var code = "function " + name + "(" + params.join(', ') + ") {\n" + branch + "}";
        return code;
    });
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.RETURN, function (workspace_json, curr_id) {
        var block = workspace_json.blocks[curr_id];
        if (Object.keys(block.shadows).length > 2) {
            return "return " + generator.value_to_code(workspace_json, curr_id, 'VALUE', generator.ORDER_NONE) + ";\n";
        }
        return 'return;\n';
    });
    var call_block_to_code = function (workspace_json, curr_id) {
        var block = workspace_json.blocks[curr_id];
        var name = generator.get_field_value(block, 'NAME');
        var args = Object.keys(block.shadows)
            .filter(function (input_name) { return input_name.startsWith('ARG'); })
            .map(function (input_name) {
            return generator.value_to_code(workspace_json, curr_id, input_name, generator.ORDER_NONE);
        });
        return name + "(" + args.join(', ') + ")";
    };
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, function (workspace_json, curr_id) { return call_block_to_code(workspace_json, curr_id) + ";\n"; });
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN, function (workspace_json, curr_id) { return [call_block_to_code(workspace_json, curr_id), generator.ORDER_FUNCTION_CALL]; });
    var param_to_code = function (workspace_json, curr_id) {
        var block = workspace_json.blocks[curr_id];
        var param_name = generator.get_field_value(block, 'param_name');
        return [param_name, generator.ORDER_ATOMIC];
    };
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.PARAM, param_to_code);
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, param_to_code);
}
exports.register_procedure_json_generator = register_procedure_json_generator;
