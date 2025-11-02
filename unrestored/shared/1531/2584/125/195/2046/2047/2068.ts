/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2068
 */

"use strict"

var r
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.OPPOSITE_TYPE = exports.CONNECTABLE_TYPE = exports.CONNECTION_TYPE = exports.OutputShape = undefined;
(function (e) {
  e[e.ROUND = 0] = "ROUND"
  e[e.HEXAGONAL = 1] = "HEXAGONAL"
})(exports.OutputShape || (exports.OutputShape = {}));
(function (e) {
  e[e.INPUT_VALUE = 1] = "INPUT_VALUE"
  e[e.OUTPUT_VALUE = 2] = "OUTPUT_VALUE"
  e[e.NEXT_STATEMENT = 3] = "NEXT_STATEMENT"
  e[e.PREVIOUS_STATEMENT = 4] = "PREVIOUS_STATEMENT"
})(r = exports.CONNECTION_TYPE || (exports.CONNECTION_TYPE = {}));
(function (e) {
  e[e.CAN_CONNECT = 0] = "CAN_CONNECT"
  e[e.REASON_SELF_CONNECTION = 1] = "REASON_SELF_CONNECTION"
  e[e.REASON_WRONG_TYPE = 2] = "REASON_WRONG_TYPE"
  e[e.REASON_TARGET_NULL = 3] = "REASON_TARGET_NULL"
  e[e.REASON_CHECKS_FAILED = 4] = "REASON_CHECKS_FAILED"
  e[e.REASON_DIFFERENT_WORKSPACES = 5] = "REASON_DIFFERENT_WORKSPACES"
  e[e.REASON_SHADOW_PARENT = 6] = "REASON_SHADOW_PARENT"
})(exports.CONNECTABLE_TYPE || (exports.CONNECTABLE_TYPE = {}))
exports.OPPOSITE_TYPE = []
exports.OPPOSITE_TYPE[r.INPUT_VALUE] = r.OUTPUT_VALUE
exports.OPPOSITE_TYPE[r.OUTPUT_VALUE] = r.INPUT_VALUE
exports.OPPOSITE_TYPE[r.NEXT_STATEMENT] = r.PREVIOUS_STATEMENT
exports.OPPOSITE_TYPE[r.PREVIOUS_STATEMENT] = r.NEXT_STATEMENT
