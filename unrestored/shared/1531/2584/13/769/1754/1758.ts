/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1758
 */

"use strict"

var r = require("../568")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var i = r(require("../746"))
var o = r(require("react"))
var a = r(require("../../../8"))
var s = r(require("../950"))
function c(e, t) {
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
function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      c(Object(n), true).forEach(function (t) {
        (0, i.default)(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        c(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}
var l = function (e) {
  var e$prefixCls = e.prefixCls
  var e$vertical = e.vertical
  var e$reverse = e.reverse
  var e$marks = e.marks
  var e$dots = e.dots
  var e$step = e.step
  var e$included = e.included
  var e$lowerBound = e.lowerBound
  var e$upperBound = e.upperBound
  var e$max = e.max
  var e$min = e.min
  var e$dotStyle = e.dotStyle
  var e$activeDotStyle = e.activeDotStyle
  var m = e$max - e$min
  var y = function (e, t, n, r, i, o) {
    (0, s.default)(!n || r > 0, "`Slider[step]` should be a positive number in order to make Slider[dots] work.")
    var a = Object.keys(t).map(parseFloat).sort(function (e, t) {
      return e - t
    })
    if (n && r) {
      for (var c = i; c <= o; c += r) {
        if (-1 === a.indexOf(c)) {
          a.push(c)
        }
      }
    }
    return a
  }(0, e$marks, e$dots, e$step, e$min, e$max).map(function (e) {
    var s
    var c = "".concat(Math.abs(e - e$min) / m * 100, "%")
    var l = !e$included && e === e$upperBound || e$included && e <= e$upperBound && e >= e$lowerBound
    var f = u(u({}, e$dotStyle), {}, e$vertical ? (0, i.default)({}, e$reverse ? "top" : "bottom", c) : (0, i.default)({}, e$reverse ? "right" : "left", c))
    if (l) {
      f = u(u({}, f), e$activeDotStyle)
    }
    var _ = (0, a.default)((s = {}, (0, i.default)(s, "".concat(e$prefixCls, "-dot"), true), (0, i.default)(s, "".concat(e$prefixCls, "-dot-active"), l), (0, i.default)(s, "".concat(e$prefixCls, "-dot-reverse"), e$reverse), s))
    return o.default.createElement("span", {
      className: _,
      style: f,
      key: e
    })
  })
  return o.default.createElement("div", {
    className: "".concat(e$prefixCls, "-step")
  }, y)
}
exports.default = l
