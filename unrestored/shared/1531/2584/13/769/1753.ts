/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1753
 */

"use strict"

var r = require("./568")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var i = r(require("./746"))
var o = r(require("react"))
function a(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })
    }
    n.push.apply(n, r)
  }
  return n
}
function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      a(Object(n), true).forEach(function (t) {
        (0, i.default)(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        a(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
var c = function (e) {
  var t
  var n
  var e$className = e.className
  var e$included = e.included
  var e$vertical = e.vertical
  var e$style = e.style
  var e$length = e.length
  var e$offset = e.offset
  var e$reverse = e.reverse
  if (e$length < 0) {
    e$reverse = !e$reverse
    e$length = Math.abs(e$length)
    e$offset = 100 - e$offset
  }
  var h = e$vertical ? (t = {}, (0, i.default)(t, e$reverse ? "top" : "bottom", "".concat(e$offset, "%")), (0, i.default)(t, e$reverse ? "bottom" : "top", "auto"), (0, i.default)(t, "height", "".concat(e$length, "%")), t) : (n = {}, (0, i.default)(n, e$reverse ? "right" : "left", "".concat(e$offset, "%")), (0, i.default)(n, e$reverse ? "left" : "right", "auto"), (0, i.default)(n, "width", "".concat(e$length, "%")), n)
  var p = s(s({}, e$style), h)
  return e$included ? o.default.createElement("div", {
    className: e$className,
    style: p
  }) : null
}
exports.default = c
