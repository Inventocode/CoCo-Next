/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2680__part-1
 */

"use strict"

import { g } from "./index__part-0"
var A
import * as /* [auto-meaningful-name] */$$_801_index from "../801/index"
import * as /* [auto-meaningful-name] */$$_801_694_index from "../801/694/index"
import * as /* [auto-meaningful-name] */$$_616_802_index from "../616/802/index"
import * as /* [auto-meaningful-name] */$$_616_index from "../616/index"
import * as /* [auto-meaningful-name] */$_615 from "./615"
import * as /* [auto-meaningful-name] */$$_803 from "../803"
import c from "../8"
import * as /* [auto-meaningful-name] */$_1542 from "./1542"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_435 from "../435"
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
  var n = React.useContext($$_801_index.b)
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
    return React.createElement(React.Fragment, null, React.createElement($$_616_index.a, $$_19.a({
      onClick: y
    }, e.cancelButtonProps), e$cancelText || t.cancelText), React.createElement($$_616_index.a, $$_19.a({}, $$_616_802_index.a(e$okType), {
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
  var R = n$getPrefixCls("modal", e$prefixCls)
  var F = n$getPrefixCls()
  var P = React.createElement($$_801_694_index.a, {
    componentName: "Modal",
    defaultLocale: $_615.b()
  }, w)
  var N = React.createElement("span", {
    className: "".concat(R, "-close-x")
  }, e$closeIcon || React.createElement($$_803.a, {
    className: "".concat(R, "-close-icon")
  }))
  var M = c(e$wrapClassName, (t = {}, $$_35.a(t, "".concat(R, "-centered"), !!e$centered), $$_35.a(t, "".concat(R, "-wrap-rtl"), "rtl" === n$direction), t))
  return React.createElement($_1542.a, $$_19.a({}, I, {
    getContainer: undefined === e$getContainer ? n$getPopupContainer : e$getContainer,
    prefixCls: R,
    wrapClassName: M,
    footer: undefined === e$footer ? P : e$footer,
    visible: e$visible,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: $$_435.b(F, "zoom", e.transitionName),
    maskTransitionName: $$_435.b(F, "fade", e.maskTransitionName)
  }))
}
y.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
  okType: "primary"
}
var b = y
export { b }
