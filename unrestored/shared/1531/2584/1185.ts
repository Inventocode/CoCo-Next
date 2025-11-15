/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1185
 */

"use strict"

var r = require("./19")
var i = require("react")
var o = require("./739/index")
var a = require("./789")
var s = function (e) {
  return e ? "function" === typeof e ? e() : e : null
}
var c = require("./431")
var u = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
var l = i.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$content = e.content
  var d = u(e, ["prefixCls", "title", "content"])
  var /* [auto-meaningful-name] */i$useContextA$b$getPrefixCls = i.useContext(a.b).getPrefixCls
  var p = i$useContextA$b$getPrefixCls("popover", e$prefixCls)
  var _ = i$useContextA$b$getPrefixCls()
  return i.createElement(o.a, r.a({}, d, {
    prefixCls: p,
    ref: t,
    overlay: function (e) {
      return i.createElement(i.Fragment, null, e$title && i.createElement("div", {
        className: "".concat(e, "-title")
      }, s(e$title)), i.createElement("div", {
        className: "".concat(e, "-inner-content")
      }, s(e$content)))
    }(p),
    transitionName: c.b(_, "zoom-big", d.transitionName)
  }))
})
l.displayName = "Popover"
l.defaultProps = {
  placement: "top",
  trigger: "hover",
  mouseEnterDelay: .1,
  mouseLeaveDelay: .1,
  overlayStyle: {}
}
exports.a = l
