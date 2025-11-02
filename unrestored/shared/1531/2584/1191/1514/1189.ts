/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1189
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.getBoundPosition = function (e, t, n) {
  if (!e.props.bounds) {
    return [t, n]
  }
  var e$props$bounds = e.props.bounds
  e$props$bounds = "string" === typeof e$props$bounds ? e$props$bounds : function (e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom
    }
  }(e$props$bounds)
  var s = i(e)
  if ("string" === typeof e$props$bounds) {
    var c
    var s$ownerDocument = s.ownerDocument
    var s$ownerDocument$defaultView = s$ownerDocument.defaultView
    if (!((c = "parent" === e$props$bounds ? s.parentNode : s$ownerDocument.querySelector(e$props$bounds)) instanceof s$ownerDocument$defaultView.HTMLElement)) {
      throw new Error("Bounds selector \"" + e$props$bounds + "\" could not find an element.")
    }
    var d = s$ownerDocument$defaultView.getComputedStyle(s)
    var p = s$ownerDocument$defaultView.getComputedStyle(c)
    e$props$bounds = {
      left: -s.offsetLeft + (0, r.int)(p.paddingLeft) + (0, r.int)(d.marginLeft),
      top: -s.offsetTop + (0, r.int)(p.paddingTop) + (0, r.int)(d.marginTop),
      right: (0, o.innerWidth)(c) - (0, o.outerWidth)(s) - s.offsetLeft + (0, r.int)(p.paddingRight) - (0, r.int)(d.marginRight),
      bottom: (0, o.innerHeight)(c) - (0, o.outerHeight)(s) - s.offsetTop + (0, r.int)(p.paddingBottom) - (0, r.int)(d.marginBottom)
    }
  }
  if ((0, r.isNum)(e$props$bounds.right)) {
    t = Math.min(t, e$props$bounds.right)
  }
  if ((0, r.isNum)(e$props$bounds.bottom)) {
    n = Math.min(n, e$props$bounds.bottom)
  }
  if ((0, r.isNum)(e$props$bounds.left)) {
    t = Math.max(t, e$props$bounds.left)
  }
  if ((0, r.isNum)(e$props$bounds.top)) {
    n = Math.max(n, e$props$bounds.top)
  }
  return [t, n]
}
exports.snapToGrid = function (e, t, n) {
  var r = Math.round(t / e[0]) * e[0]
  var o = Math.round(n / e[1]) * e[1]
  return [r, o]
}
exports.canDragX = function (e) {
  return "both" === e.props.axis || "x" === e.props.axis
}
exports.canDragY = function (e) {
  return "both" === e.props.axis || "y" === e.props.axis
}
exports.getControlPosition = function (e, t, n) {
  var r = "number" === typeof t ? (0, o.getTouch)(e, t) : null
  if ("number" === typeof t && !r) {
    return null
  }
  var a = i(n)
  var s = n.props.offsetParent || a.offsetParent || a.ownerDocument.body
  return (0, o.offsetXYFromParent)(r || e, s, n.props.scale)
}
exports.createCoreData = function (e, t, n) {
  var e$state = e.state
  var a = !(0, r.isNum)(e$state.lastX)
  var s = i(e)
  return a ? {
    node: s,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: n,
    x: t,
    y: n
  } : {
    node: s,
    deltaX: t - e$state.lastX,
    deltaY: n - e$state.lastY,
    lastX: e$state.lastX,
    lastY: e$state.lastY,
    x: t,
    y: n
  }
}
exports.createDraggableData = function (e, t) {
  var e$props$scale = e.props.scale
  return {
    node: t.node,
    x: e.state.x + t.deltaX / e$props$scale,
    y: e.state.y + t.deltaY / e$props$scale,
    deltaX: t.deltaX / e$props$scale,
    deltaY: t.deltaY / e$props$scale,
    lastX: e.state.x,
    lastY: e.state.y
  }
}
var r = require("./928")
var o = require("./1049/index")
function i(e) {
  var t = e.findDOMNode()
  if (!t) {
    throw new Error("<DraggableCore>: Unmounted during event!")
  }
  return t
}
