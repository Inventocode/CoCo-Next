/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2627__part-1
 */

"use strict"

import { "2627__part-0__g" as g } from "./index__part-0"
var A
import * as /* [auto-meaningful-name] */$$_789 from "../789"
import * as /* [auto-meaningful-name] */$_686 from "./686"
import * as /* [auto-meaningful-name] */$_790_index from "./790/index"
import * as /* [auto-meaningful-name] */$$_612 from "../612"
import * as /* [auto-meaningful-name] */$_611 from "./611"
import * as /* [auto-meaningful-name] */$$_791 from "../791"
import c from "../8"
import * as /* [auto-meaningful-name] */$_1501 from "./1501"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_29 from "../29"
import * as /* [auto-meaningful-name] */$$_431 from "../431"
var m = function (e, t) {
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
if (g()) {
  document.documentElement.addEventListener("click", function (e) {
    A = {
      x: e.pageX,
      y: e.pageY
    }
    setTimeout(function () {
      A = null
    }, 100)
  }, true)
}
var y = function (e) {
  var t
  var n = React.useContext($$_789.b)
  var /* [auto-meaningful-name] */n$getPopupContainer = n.getPopupContainer
  var /* [auto-meaningful-name] */n$getPrefixCls = n.getPrefixCls
  var /* [auto-meaningful-name] */n$direction = n.direction
  var y = function (t) {
    var /* [auto-meaningful-name] */e$onCancel = e.onCancel
    if (!(null === e$onCancel || undefined === e$onCancel)) {
      e$onCancel(t)
    }
  }
  var b = function (t) {
    var /* [auto-meaningful-name] */e$onOk = e.onOk
    if (!(null === e$onOk || undefined === e$onOk)) {
      e$onOk(t)
    }
  }
  var w = function (t) {
    var /* [auto-meaningful-name] */e$okText = e.okText
    var /* [auto-meaningful-name] */e$okType = e.okType
    var /* [auto-meaningful-name] */e$cancelText = e.cancelText
    var /* [auto-meaningful-name] */e$confirmLoading = e.confirmLoading
    return React.createElement(React.Fragment, null, React.createElement($$_612.a, $$_19.a({
      onClick: y
    }, e.cancelButtonProps), e$cancelText || t.cancelText), React.createElement($$_612.a, $$_19.a({}, $_790_index.a(e$okType), {
      loading: e$confirmLoading,
      onClick: b
    }, e.okButtonProps), e$okText || t.okText))
  }
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$footer = e.footer
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$wrapClassName = e.wrapClassName
  var /* [auto-meaningful-name] */e$centered = e.centered
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var /* [auto-meaningful-name] */e$focusTriggerAfterClose = e.focusTriggerAfterClose
  var D = undefined === e$focusTriggerAfterClose || e$focusTriggerAfterClose
  var I = m(e, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"])
  var F = n$getPrefixCls("modal", e$prefixCls)
  var R = n$getPrefixCls()
  var P = React.createElement($_686.a, {
    componentName: "Modal",
    defaultLocale: $_611.b()
  }, w)
  var N = React.createElement("span", {
    className: "".concat(F, "-close-x")
  }, e$closeIcon || React.createElement($$_791.a, {
    className: "".concat(F, "-close-icon")
  }))
  var M = c(e$wrapClassName, (t = {}, $$_29.a(t, "".concat(F, "-centered"), !!e$centered), $$_29.a(t, "".concat(F, "-wrap-rtl"), "rtl" === n$direction), t))
  return React.createElement($_1501.a, $$_19.a({}, I, {
    getContainer: undefined === e$getContainer ? n$getPopupContainer : e$getContainer,
    prefixCls: F,
    wrapClassName: M,
    footer: undefined === e$footer ? P : e$footer,
    visible: e$visible,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: $$_431.b(R, "zoom", e.transitionName),
    maskTransitionName: $$_431.b(R, "fade", e.maskTransitionName)
  }))
}
y.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
  okType: "primary"
}
var b = y
export { b as "2627__part-1__b" }
