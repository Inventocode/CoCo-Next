/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-198
 */

"use strict"

import { hS } from "./index__part-154"
import { zM } from "./index__part-197"
import * as /* [auto-meaningful-name] */$_1543_index from "./1543/index"
import * as /* [auto-meaningful-name] */$_364_index from "./364/index"
import * as /* [auto-meaningful-name] */$_315 from "./315"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import * as Ln from "./35"
import * as Dn from "./19"
import N from "./8"
import { useContext, Children, createElement, isValidElement } from "react"
import * as /* [auto-meaningful-name] */$_614 from "./614"
$_614.a("topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight")
var KM = function (e) {
  var t
  var n = useContext($_801_index.b)
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
  var m = Children.only(e$children)
  var g = $_315.a(m, {
    className: N("".concat(h, "-trigger"), Ln.a({}, "".concat(h, "-rtl"), "rtl" === n$direction), m.props.className),
    disabled: e$disabled
  })
  var _ = N(e$overlayClassName, Ln.a({}, "".concat(h, "-rtl"), "rtl" === n$direction))
  var v = e$disabled ? [] : e$trigger
  if (v && -1 !== v.indexOf("contextMenu")) {
    t = true
  }
  return createElement($_1543_index.a, Dn.a({
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
        var /* [auto-meaningful-name] */NChildren$onlyStringTypeofNCreateElementSpanNullNN$props = (n = Children.only("string" === typeof n ? createElement("span", null, n) : n)).props
        $_364_index.a(!NChildren$onlyStringTypeofNCreateElementSpanNullNN$props.mode || "vertical" === NChildren$onlyStringTypeofNCreateElementSpanNullNN$props.mode, "Dropdown", "mode=\"".concat(NChildren$onlyStringTypeofNCreateElementSpanNullNN$props.mode, "\" is not supported for Dropdown's Menu."))
        var /* [auto-meaningful-name] */NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$selectable = NChildren$onlyStringTypeofNCreateElementSpanNullNN$props.selectable
        var a = undefined !== NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$selectable && NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$selectable
        var /* [auto-meaningful-name] */NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$expandIcon = NChildren$onlyStringTypeofNCreateElementSpanNullNN$props.expandIcon
        var c = "undefined" !== typeof NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$expandIcon && isValidElement(NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$expandIcon) ? NChildren$onlyStringTypeofNCreateElementSpanNullNN$props$expandIcon : createElement("span", {
          className: "".concat(t, "-menu-submenu-arrow")
        }, createElement(hS, {
          className: "".concat(t, "-menu-submenu-arrow-icon")
        }))
        return "string" === typeof n.type ? n : $_315.a(n, {
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
