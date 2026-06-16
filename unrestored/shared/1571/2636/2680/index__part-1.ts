/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2680__part-1
 */

"use strict"

import { g } from "./index__part-0"
var A
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"../801/index"
import * as /* [auto-meaningful-name] */Module_694 from /* 694 */"../801/694/index"
import * as /* [auto-meaningful-name] */Module_802 from /* 802 */"../616/802"
import * as /* [auto-meaningful-name] */Module_616 from /* 616 */"../616/index"
import * as /* [auto-meaningful-name] */Module_615 from /* 615 */"./615"
import * as /* [auto-meaningful-name] */Module_803 from /* 803 */"../803"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_1542 from /* 1542 */"./1542"
import { useContext, createElement, Fragment } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../35"
import * as /* [auto-meaningful-name] */Module_435 from /* 435 */"../435"
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
  var n = useContext(Module_801.b)
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
    return createElement(Fragment, null, createElement(Module_616.a, Module_19.a({
      onClick: y
    }, e.cancelButtonProps), e$cancelText || t.cancelText), createElement(Module_616.a, Module_19.a({}, Module_802.a(e$okType), {
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
  var P = createElement(Module_694.a, {
    componentName: "Modal",
    defaultLocale: Module_615.b()
  }, w)
  var N = createElement("span", {
    className: "".concat(R, "-close-x")
  }, e$closeIcon || createElement(Module_803.a, {
    className: "".concat(R, "-close-icon")
  }))
  var M = Classnames(e$wrapClassName, (t = {}, Module_35.a(t, "".concat(R, "-centered"), !!e$centered), Module_35.a(t, "".concat(R, "-wrap-rtl"), "rtl" === n$direction), t))
  return createElement(Module_1542.a, Module_19.a({}, I, {
    getContainer: undefined === e$getContainer ? n$getPopupContainer : e$getContainer,
    prefixCls: R,
    wrapClassName: M,
    footer: undefined === e$footer ? P : e$footer,
    visible: e$visible,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: Module_435.b(F, "zoom", e.transitionName),
    maskTransitionName: Module_435.b(F, "fade", e.maskTransitionName)
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
