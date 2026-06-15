"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register_procedure_generator = void 0;
var asserts_1 = require("../../core/utils/asserts");
var constants_1 = require("../constants");
function register_procedure_generator(generator) {
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.DEF, function (block) {
        var name = block.get_field_value('NAME');
        (0, asserts_1.assert)(name);
        var params = block.inputList
            .filter(function (input) { return input.name.startsWith(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX); })
            .map(function (input) { return generator.value_to_code(block, input.name, generator.ORDER_ATOMIC); });
        var branch = generator.statement_to_code(block, 'STACK');
        var code = "function " + name + "(" + params.join(', ') + ") {\n" + branch + "}";
        return code;
    });
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.RETURN, function (block) {
        var return_value_input = block.get_input('VALUE');
        if (return_value_input) {
            return "return " + generator.value_to_code(block, 'VALUE', generator.ORDER_NONE) + ";\n";
        }
        return 'return;\n';
    });
    var call_block_to_code = function (block) {
        var name = block.get_field_value('NAME');
        (0, asserts_1.assert)(name);
        var args = block.inputList
            .filter(function (input) { return input.name.startsWith('ARG'); })
            .map(function (input) {
            return generator.value_to_code(block, input.name, generator.ORDER_NONE);
        });
        return name + "(" + args.join(', ') + ")";
    };
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, function (block) { return call_block_to_code(block) + ";\n"; });
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN, function (block) { return [call_block_to_code(block), generator.ORDER_FUNCTION_CALL]; });
    var param_to_code = function (block) {
        var param_name = block.get_field_value('param_name');
        (0, asserts_1.assert)(param_name);
        return [param_name, generator.ORDER_ATOMIC];
    };
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.PARAM, param_to_code);
    generator.register(constants_1.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, param_to_code);
}
exports.register_procedure_generator = register_procedure_generator;
