/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2679
 */

"use strict"

var r = require("../../../19")
var i = require("../../../54")
var o = require("react")
require("../../../50/index")
var a = require("../98")
var s = require("../366/154")
var c = require("../316/233")
var u = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$color = e.color
  var f = undefined === e$color ? "inherit" : e$color
  var /* [auto-meaningful-name] */e$component = e.component
  var h = undefined === e$component ? "svg" : e$component
  var /* [auto-meaningful-name] */e$fontSize = e.fontSize
  var _ = undefined === e$fontSize ? "medium" : e$fontSize
  var /* [auto-meaningful-name] */e$htmlColor = e.htmlColor
  var /* [auto-meaningful-name] */e$titleAccess = e.titleAccess
  var /* [auto-meaningful-name] */e$viewBox = e.viewBox
  var m = undefined === e$viewBox ? "0 0 24 24" : e$viewBox
  var y = i.a(e, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"])
  return o.createElement(h, r.a({
    className: a.a(e$classes.root, e$className, "inherit" !== f && e$classes["color".concat(c.a(f))], "default" !== _ && "medium" !== _ && e$classes["fontSize".concat(c.a(_))]),
    focusable: "false",
    viewBox: m,
    color: e$htmlColor,
    "aria-hidden": !e$titleAccess || undefined,
    role: e$titleAccess ? "img" : undefined,
    ref: t
  }, y), e$children, e$titleAccess ? o.createElement("title", null, e$titleAccess) : null)
})
u.muiName = "SvgIcon"
exports.a = s.a(function (e) {
  return {
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      fontSize: e.typography.pxToRem(24),
      transition: e.transitions.create("fill", {
        duration: e.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: e.palette.primary.main
    },
    colorSecondary: {
      color: e.palette.secondary.main
    },
    colorAction: {
      color: e.palette.action.active
    },
    colorError: {
      color: e.palette.error.main
    },
    colorDisabled: {
      color: e.palette.action.disabled
    },
    fontSizeInherit: {
      fontSize: "inherit"
    },
    fontSizeSmall: {
      fontSize: e.typography.pxToRem(20)
    },
    fontSizeLarge: {
      fontSize: e.typography.pxToRem(35)
    }
  }
}, {
  name: "MuiSvgIcon"
})(u)
