/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1158
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Checkboard = undefined
var r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
var i = require("react")
var o = c(i)
var a = c(require("../../785/104/index"))
var s = function (e) {
  if (e && e.__esModule) {
    return e
  }
  var t = {}
  if (null != e) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      t[n] = e[n]
    }
  }
  t.default = e
  return t
}(require("./2509"))
function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = exports.Checkboard = function (e) {
  var e$white = e.white
  var e$grey = e.grey
  var e$size = e.size
  var e$renderers = e.renderers
  var e$borderRadius = e.borderRadius
  var e$boxShadow = e.boxShadow
  var e$children = e.children
  var h = (0, a.default)({
    default: {
      grid: {
        borderRadius: e$borderRadius,
        boxShadow: e$boxShadow,
        absolute: "0px 0px 0px 0px",
        background: "url(" + s.get(e$white, e$grey, e$size, e$renderers.canvas) + ") center left"
      }
    }
  })
  return (0, i.isValidElement)(e$children) ? o.default.cloneElement(e$children, r({}, e$children.props, {
    style: r({}, e$children.props.style, h.grid)
  })) : o.default.createElement("div", {
    style: h.grid
  })
}
u.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}
exports.default = u
