/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：101
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined
var r = u(require("./2466/index"))
var i = u(require("./2538/index"))
var o = u(require("./2558/index"))
var a = u(require("./2559"))
var s = u(require("./2560"))
var c = u(require("./2561"))
function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
exports.hover = a.default
exports.handleHover = a.default
exports.handleActive = s.default
exports.loop = c.default
var l = exports.ReactCSS = function (e) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = Array(arguments$length > 1 ? arguments$length - 1 : 0), a = 1; a < arguments$length; a++) {
    n[a - 1] = arguments[a]
  }
  var s = (0, r.default)(n)
  var c = (0, i.default)(e, s)
  return (0, o.default)(c)
}
exports.default = l
