"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROCEDURE_CONTEXT = exports.PROCEDURE_BLOCK_FIELD_NAMES = exports.PROCEDURE_BLOCK_INPUT_NAMES = exports.PROCEDURE_BLOCK_TYPES = void 0;
/**
 * 函数相关的积木名，不可修改，因为被heart使用了，写死的那种。
 */
var PROCEDURE_BLOCK_TYPES;
(function (PROCEDURE_BLOCK_TYPES) {
    PROCEDURE_BLOCK_TYPES["DEF"] = "procedures_2_defnoreturn";
    PROCEDURE_BLOCK_TYPES["RETURN"] = "procedures_2_return_value";
    PROCEDURE_BLOCK_TYPES["CALL_RETURN"] = "procedures_2_callreturn";
    PROCEDURE_BLOCK_TYPES["CALL_NORETURN"] = "procedures_2_callnoreturn";
    PROCEDURE_BLOCK_TYPES["PARAM_ON_BLOCK"] = "procedures_2_stable_parameter";
    PROCEDURE_BLOCK_TYPES["PARAM"] = "procedures_2_parameter";
})(PROCEDURE_BLOCK_TYPES = exports.PROCEDURE_BLOCK_TYPES || (exports.PROCEDURE_BLOCK_TYPES = {}));
/**
 * 函数相关的input名，不可修改，因为被heart使用了，写死的那种。
 */
var PROCEDURE_BLOCK_INPUT_NAMES;
(function (PROCEDURE_BLOCK_INPUT_NAMES) {
    PROCEDURE_BLOCK_INPUT_NAMES["DEF_MUTATOR"] = "PROCEDURES_2_DEFNORETURN_MUTATOR";
    PROCEDURE_BLOCK_INPUT_NAMES["DEF_STATEMENT"] = "STACK";
    PROCEDURE_BLOCK_INPUT_NAMES["RETURN_VALUE"] = "VALUE";
    PROCEDURE_BLOCK_INPUT_NAMES["RETURN_MUTATOR"] = "PROCEDURES_2_DEFRETURN_RETURN_MUTATOR";
    /**
     * 参数input的前缀，非全名。
     * 前缀后面加上数字才是全名，如 'PARAMS0'。
     */
    PROCEDURE_BLOCK_INPUT_NAMES["PARAM_PREFIX"] = "PARAMS";
    /**
     * 调用积木上参数积木input的前缀，非全名。
     * 前缀后面加上数字才是全名，如'ARG0'。
     */
    PROCEDURE_BLOCK_INPUT_NAMES["ARG_PREFIX"] = "ARG";
})(PROCEDURE_BLOCK_INPUT_NAMES = exports.PROCEDURE_BLOCK_INPUT_NAMES || (exports.PROCEDURE_BLOCK_INPUT_NAMES = {}));
/**
 * 函数相关的field名，不可修改，因为被heart使用了，写死的那种。
 */
var PROCEDURE_BLOCK_FIELD_NAMES;
(function (PROCEDURE_BLOCK_FIELD_NAMES) {
    PROCEDURE_BLOCK_FIELD_NAMES["PROCEDURE_NAME"] = "NAME";
    PROCEDURE_BLOCK_FIELD_NAMES["PARAM_NAME"] = "param_name";
    PROCEDURE_BLOCK_FIELD_NAMES["PARAM_DEFAULT_VALUE"] = "param_default_value";
})(PROCEDURE_BLOCK_FIELD_NAMES = exports.PROCEDURE_BLOCK_FIELD_NAMES || (exports.PROCEDURE_BLOCK_FIELD_NAMES = {}));
exports.PROCEDURE_CONTEXT = 'PROCEDURE_CONTEXT';
