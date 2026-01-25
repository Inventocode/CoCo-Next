/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2909
 */

"use strict"

var a = require("../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  var t = arguments.length > 1 ? arguments[1] : undefined
  return {
    player: (0, r.default)(e.player, t),
    operation: (0, o.default)(e.operation, t)
  }
}
exports.operationReducer = exports.playerReducer = undefined
var r = a(require("./3311"))
var o = a(require("./3312"))
var /* [auto-meaningful-name] */r$default = r.default
exports.playerReducer = r$default
var /* [auto-meaningful-name] */o$default = o.default
exports.operationReducer = o$default
