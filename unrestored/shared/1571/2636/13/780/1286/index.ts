/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1286
 */

"use strict"

var r = require("../571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.isEventFromHandle = function (e, t) {
  try {
    return Object.keys(t).some(function (n) {
      return e.target === (0, o.findDOMNode)(t[n])
    })
  } catch (n) {
    return false
  }
}
exports.isValueOutOfRange = function (e, t) {
  var /* [auto-meaningful-name] */t$min = t.min
  var /* [auto-meaningful-name] */t$max = t.max
  return e < t$min || e > t$max
}
exports.isNotTouchEvent = function (e) {
  return e.touches.length > 1 || "touchend" === e.type.toLowerCase() && e.touches.length > 0
}
exports.getClosestPoint = s
exports.getPrecision = c
exports.getMousePosition = function (e, t) {
  return e ? t.clientY : t.pageX
}
exports.getTouchPosition = function (e, t) {
  return e ? t.touches[0].clientY : t.touches[0].pageX
}
exports.getHandleCenterPosition = function (e, t) {
  var n = t.getBoundingClientRect()
  return e ? n.top + .5 * n.height : window.pageXOffset + n.left + .5 * n.width
}
exports.ensureValueInRange = function (e, t) {
  var /* [auto-meaningful-name] */t$max = t.max
  var /* [auto-meaningful-name] */t$min = t.min
  if (e <= t$min) {
    return t$min
  }
  if (e >= t$max) {
    return t$max
  }
  return e
}
exports.ensureValuePrecision = function (e, t) {
  var /* [auto-meaningful-name] */t$step = t.step
  var r = isFinite(s(e, t)) ? s(e, t) : 0
  return null === t$step ? r : parseFloat(r.toFixed(c(t$step)))
}
exports.pauseEvent = function (e) {
  e.stopPropagation()
  e.preventDefault()
}
exports.calculateNextValue = u
exports.getKeyboardValueMutator = function (e, t, n) {
  var /* [auto-meaningful-name] */Increase = "increase"
  switch (e.keyCode) {
    case a.default.UP:
      Increase = t && n ? "decrease" : "increase"
      break
    case a.default.RIGHT:
      Increase = !t && n ? "decrease" : "increase"
      break
    case a.default.DOWN:
      Increase = t && n ? "increase" : "decrease"
      break
    case a.default.LEFT:
      Increase = !t && n ? "increase" : "decrease"
      break
    case a.default.END:
      return function (e, t) {
        return t.max
      }
    case a.default.HOME:
      return function (e, t) {
        return t.min
      }
    case a.default.PAGE_UP:
      return function (e, t) {
        return e + 2 * t.step
      }
    case a.default.PAGE_DOWN:
      return function (e, t) {
        return e - 2 * t.step
      }
    default:
      return
  }
  return function (e, t) {
    return u(Increase, e, t)
  }
}
var i = r(require("./1552/index"))
var o = require("../../../80/index")
var a = r(require("./1805"))
function s(e, t) {
  var /* [auto-meaningful-name] */t$marks = t.marks
  var /* [auto-meaningful-name] */t$step = t.step
  var /* [auto-meaningful-name] */t$min = t.min
  var /* [auto-meaningful-name] */t$max = t.max
  var s = Object.keys(t$marks).map(parseFloat)
  if (null !== t$step) {
    var c = Math.floor((t$max - t$min) / t$step)
    var u = Math.min((e - t$min) / t$step, c)
    var l = Math.round(u) * t$step + t$min
    s.push(l)
  }
  var f = s.map(function (t) {
    return Math.abs(e - t)
  })
  return s[f.indexOf(Math.min.apply(Math, (0, i.default)(f)))]
}
function c(e) {
  var t = e.toString()
  var n = 0
  if (t.indexOf(".") >= 0) {
    n = t.length - t.indexOf(".") - 1
  }
  return n
}
function u(e, t, n) {
  var r = {
    increase: function (e, t) {
      return e + t
    },
    decrease: function (e, t) {
      return e - t
    }
  }
  var i = r[e](Object.keys(n.marks).indexOf(JSON.stringify(t)), 1)
  var o = Object.keys(n.marks)[i]
  return n.step ? r[e](t, n.step) : Object.keys(n.marks).length && n.marks[o] ? n.marks[o] : t
}
