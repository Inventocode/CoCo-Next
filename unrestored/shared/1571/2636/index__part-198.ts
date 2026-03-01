/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-198
 */

"use strict"

import { hS } from "./index__part-154"
import { zM } from "./index__part-197"
import * as /* [auto-meaningful-name] */Module_1543 from /* 1543 */"./1543/index"
import * as /* [auto-meaningful-name] */Module_364 from /* 364 */"./364/index"
import * as /* [auto-meaningful-name] */Module_315 from /* 315 */"./315"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"./801/index"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"./35"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_614 from /* 614 */"./614"
Module_614.a("topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight")
var KM = function (e) {
  var t
  var n = React.useContext(Module_801.b)
  var /* [auto-meaningful-name] */n$getPopupContainer = n.getPopupContainer
  var /* [auto-meaningful-name] */n$getPrefixCls = n.getPrefixCls
  var /* [auto-meaningful-name] */n$direction = n.direction
  var /* [auto-meaningful-name] */e$arrow = e.arrow
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$trigger = e.trigger
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$overlayClassName = e.overlayClassName
  var h = n$getPrefixCls("dropdown", e$prefixCls)
  var m = React.Children.only(e$children)
  var g = Module_315.a(m, {
    className: Classnames("".concat(h, "-trigger"), Module_35.a({}, "".concat(h, "-rtl"), "rtl" === n$direction), m.props.className),
    disabled: e$disabled
  })
  var _ = Classnames(e$overlayClassName, Module_35.a({}, "".concat(h, "-rtl"), "rtl" === n$direction))
  var v = e$disabled ? [] : e$trigger
  if (v && -1 !== v.indexOf("contextMenu")) {
    t = true
  }
  return React.createElement(Module_1543.a, Module_19.a({
    arrow: e$arrow,
    alignPoint: t
  }, e, {
    overlayClassName: _,
    prefixCls: h,
    getPopupContainer: e$getPopupContainer || n$getPopupContainer,
    transitionName: function () {
      var t = n$getPrefixCls()
      var /* [auto-meaningful-name] */e$placement = e.placement
      var r = undefined === e$placement ? "" : e$placement
      var /* [auto-meaningful-name] */e$transitionName = e.transitionName
      return undefined !== e$transitionName ? e$transitionName : r.indexOf("top") >= 0 ? "".concat(t, "-slide-down") : "".concat(t, "-slide-up")
    }(),
    trigger: v,
    overlay: function () {
      return function (t) {
        var n
        var /* [auto-meaningful-name] */e$overlay = e.overlay
        n = "function" === typeof e$overlay ? e$overlay() : e$overlay
        var /* [auto-meaningful-name] */NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props = (n = React.Children.only("string" === typeof n ? React.createElement("span", null, n) : n)).props
        Module_364.a(!NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props.mode || "vertical" === NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props.mode, "Dropdown", "mode=\"".concat(NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props.mode, "\" is not supported for Dropdown's Menu."))
        var /* [auto-meaningful-name] */NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$selectable = NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props.selectable
        var a = undefined !== NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$selectable && NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$selectable
        var /* [auto-meaningful-name] */NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$expandIcon = NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props.expandIcon
        var c = "undefined" !== typeof NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$expandIcon && React.isValidElement(NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$expandIcon) ? NReact$Children$onlyStringTypeofNReact$createElementSpanNullNN$props$expandIcon : React.createElement("span", {
          className: "".concat(t, "-menu-submenu-arrow")
        }, React.createElement(hS, {
          className: "".concat(t, "-menu-submenu-arrow-icon")
        }))
        return "string" === typeof n.type ? n : Module_315.a(n, {
          mode: "vertical",
          selectable: a,
          expandIcon: c
        })
      }(h)
    },
    placement: function () {
      var /* [auto-meaningful-name] */e$placement = e.placement
      return undefined !== e$placement ? e$placement : "rtl" === n$direction ? "bottomRight" : "bottomLeft"
    }()
  }), g)
}
KM.Button = zM
KM.defaultProps = {
  mouseEnterDelay: .15,
  mouseLeaveDelay: .1
}
var qM = KM
var XM = qM
export { qM }
export { XM }
