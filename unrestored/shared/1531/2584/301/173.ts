/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：173
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROCEDURE_CONTEXT = exports.PROCEDURE_BLOCK_FIELD_NAMES = exports.PROCEDURE_BLOCK_INPUT_NAMES = exports.PROCEDURE_BLOCK_TYPES = undefined;
(function (e) {
  e.DEF = "procedures_2_defnoreturn";
  e.RETURN = "procedures_2_return_value";
  e.CALL_RETURN = "procedures_2_callreturn";
  e.CALL_NORETURN = "procedures_2_callnoreturn";
  e.PARAM_ON_BLOCK = "procedures_2_stable_parameter";
  e.PARAM = "procedures_2_parameter";
})(exports.PROCEDURE_BLOCK_TYPES || (exports.PROCEDURE_BLOCK_TYPES = {}));
(function (e) {
  e.DEF_MUTATOR = "PROCEDURES_2_DEFNORETURN_MUTATOR";
  e.DEF_STATEMENT = "STACK";
  e.RETURN_VALUE = "VALUE";
  e.RETURN_MUTATOR = "PROCEDURES_2_DEFRETURN_RETURN_MUTATOR";
  e.PARAM_PREFIX = "PARAMS";
  e.ARG_PREFIX = "ARG";
})(exports.PROCEDURE_BLOCK_INPUT_NAMES || (exports.PROCEDURE_BLOCK_INPUT_NAMES = {}));
(function (e) {
  e.PROCEDURE_NAME = "NAME";
  e.PARAM_NAME = "param_name";
  e.PARAM_DEFAULT_VALUE = "param_default_value";
})(exports.PROCEDURE_BLOCK_FIELD_NAMES || (exports.PROCEDURE_BLOCK_FIELD_NAMES = {}));
exports.PROCEDURE_CONTEXT = "PROCEDURE_CONTEXT";