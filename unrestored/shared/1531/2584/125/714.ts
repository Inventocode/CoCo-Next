/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：714
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.adjust_bboxes_for_rtl = exports.get_computed_style = exports.get_style = exports.get_size = exports.get_viewport_page_offset = undefined
var r = require("@kitten-team/gl-matrix")
var i = require("./index")
var o = require("./474")
function a(e) {
  var /* [auto-meaningful-name] */e$offsetWidth = e.offsetWidth
  var /* [auto-meaningful-name] */e$offsetHeight = e.offsetHeight
  var r = o.is.webkit() && !e$offsetWidth && !e$offsetHeight
  if ((undefined != e$offsetWidth || r) && e.getBoundingClientRect) {
    var i = e.getBoundingClientRect()
    return {
      width: i.right - i.left,
      height: i.bottom - i.top
    }
  }
  return {
    width: e$offsetWidth,
    height: e$offsetHeight
  }
}
function s(e, t) {
  return c(e, t) || function (e, t) {
    return e.currentStyle ? e.currentStyle[t] : undefined
  }(e, t) || e.style && e.style[Number(t)]
}
function c(e, t) {
  var n = (0, i.get_owner_document)(e)
  if (n.defaultView && n.defaultView.getComputedStyle) {
    var r = n.defaultView.getComputedStyle(e, undefined)
    if (r) {
      return r[Number(t)] || r.getPropertyValue(t) || ""
    }
  }
  return ""
}
exports.get_viewport_page_offset = function (e) {
  var /* [auto-meaningful-name] */e$body = e.body
  var /* [auto-meaningful-name] */e$documentElement = e.documentElement
  var i = e$body.scrollLeft || e$documentElement.scrollLeft
  var o = e$body.scrollTop || e$documentElement.scrollTop
  return r.vec2.fromValues(i, o)
}
exports.get_size = function (e) {
  return function (e, t) {
    if ("none" != s(t, "display")) {
      return e(t)
    }
    var /* [auto-meaningful-name] */t$style = t.style
    var /* [auto-meaningful-name] */t$style$display = t$style.display
    var /* [auto-meaningful-name] */t$style$visibility = t$style.visibility
    var /* [auto-meaningful-name] */t$style$position = t$style.position
    t$style.visibility = "hidden"
    t$style.position = "absolute"
    t$style.display = "inline"
    var a = e(t)
    t$style.display = t$style$display
    t$style.position = t$style$position
    t$style.visibility = t$style$visibility
    return a
  }(a, e)
}
exports.get_style = s
exports.get_computed_style = c
exports.adjust_bboxes_for_rtl = function (e, t, n) {
  t.left += n.width
  t.right += n.width
  e.left += n.width
  e.right += n.width
}
