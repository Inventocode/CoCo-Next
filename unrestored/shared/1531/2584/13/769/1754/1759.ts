/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1759
 */

"use strict"

var r = require("../568")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var i = r(require("../746"))
var o = r(require("../1046/1081"))
var a = r(require("react"))
var s = r(require("../../../8"))
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
  var e$className = e.className
  var e$vertical = e.vertical
  var e$reverse = e.reverse
  var e$marks = e.marks
  var e$included = e.included
  var e$upperBound = e.upperBound
  var e$lowerBound = e.lowerBound
  var e$max = e.max
  var e$min = e.min
  var e$onClickLabel = e.onClickLabel
  var A = Object.keys(e$marks)
  var g = e$max - e$min
  var v = A.map(parseFloat).sort(function (e, t) {
    return e - t
  }).map(function (e) {
    var h
    var A = e$marks[e]
    var v = "object" === (0, o.default)(A) && !a.default.isValidElement(A)
    var m = v ? A.label : A
    if (!m && 0 !== m) {
      return null
    }
    var y = !e$included && e === e$upperBound || e$included && e <= e$upperBound && e >= e$lowerBound
    var b = (0, s.default)((h = {}, (0, i.default)(h, "".concat(e$className, "-text"), true), (0, i.default)(h, "".concat(e$className, "-text-active"), y), h))
    var w = (0, i.default)({
      marginBottom: "-50%"
    }, e$reverse ? "top" : "bottom", "".concat((e - e$min) / g * 100, "%"))
    var E = (0, i.default)({
      transform: "translateX(".concat(e$reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(e$reverse ? "50%" : "-50%", ")")
    }, e$reverse ? "right" : "left", "".concat((e - e$min) / g * 100, "%"))
    var x = e$vertical ? w : E
    var C = v ? u(u({}, x), A.style) : x
    return a.default.createElement("span", {
      className: b,
      style: C,
      key: e,
      onMouseDown: function (t) {
        return e$onClickLabel(t, e)
      },
      onTouchStart: function (t) {
        return e$onClickLabel(t, e)
      }
    }, m)
  })
  return a.default.createElement("div", {
    className: e$className
  }, v)
}
exports.default = l
