/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2680__part-3
 */

"use strict"

import { b } from "./index__part-1"
import { T } from "./index__part-2"
import { P } from "./index__part-4"
import * as /* [auto-meaningful-name] */$_927 from "./927"
import * as /* [auto-meaningful-name] */$_1047 from "./1047"
import * as /* [auto-meaningful-name] */$_1045 from "./1045"
import * as /* [auto-meaningful-name] */$_1046 from "./1046"
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import * as /* [auto-meaningful-name] */$$_435 from "../435"
import * as /* [auto-meaningful-name] */$_615 from "./615"
import c from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_364_index from "../364/index"
import * as /* [auto-meaningful-name] */$_285_index from "./285/index"
var I = function (e) {
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$close = e.close
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$afterClose = e.afterClose
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$keyboard = e.keyboard
  var /* [auto-meaningful-name] */e$centered = e.centered
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$maskStyle = e.maskStyle
  var /* [auto-meaningful-name] */e$okText = e.okText
  var /* [auto-meaningful-name] */e$okButtonProps = e.okButtonProps
  var /* [auto-meaningful-name] */e$cancelText = e.cancelText
  var /* [auto-meaningful-name] */e$cancelButtonProps = e.cancelButtonProps
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$rootPrefixCls = e.rootPrefixCls
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var /* [auto-meaningful-name] */e$bodyStyle = e.bodyStyle
  var /* [auto-meaningful-name] */e$closable = e.closable
  var k = undefined !== e$closable && e$closable
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var /* [auto-meaningful-name] */e$modalRender = e.modalRender
  var /* [auto-meaningful-name] */e$focusTriggerAfterClose = e.focusTriggerAfterClose
  $$_364_index.a(!("string" === typeof e$icon && e$icon.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  var F = e.okType || "primary"
  var P = "".concat(e$prefixCls, "-confirm")
  var N = !("okCancel" in e) || e.okCancel
  var M = e.width || 416
  var L = e.style || {}
  var j = undefined === e.mask || e.mask
  var U = undefined !== e.maskClosable && e.maskClosable
  var H = null !== e.autoFocusButton && (e.autoFocusButton || "ok")
  var V = c(P, "".concat(P, "-").concat(e.type), $$_35.a({}, "".concat(P, "-rtl"), "rtl" === e$direction), e.className)
  var G = N && React.createElement(T, {
    actionFn: e$onCancel,
    close: e$close,
    autoFocus: "cancel" === H,
    buttonProps: e$cancelButtonProps,
    prefixCls: "".concat(e$rootPrefixCls, "-btn")
  }, e$cancelText)
  return React.createElement($_285_index.a, {
    prefixCls: e$rootPrefixCls,
    iconPrefixCls: e$iconPrefixCls,
    direction: e$direction
  }, React.createElement(b, {
    prefixCls: e$prefixCls,
    className: V,
    wrapClassName: c($$_35.a({}, "".concat(P, "-centered"), !!e.centered)),
    onCancel: function () {
      return e$close({
        triggerCancel: true
      })
    },
    visible: e$visible,
    title: "",
    footer: "",
    transitionName: $$_435.b(e$rootPrefixCls, "zoom", e.transitionName),
    maskTransitionName: $$_435.b(e$rootPrefixCls, "fade", e.maskTransitionName),
    mask: j,
    maskClosable: U,
    maskStyle: e$maskStyle,
    style: L,
    bodyStyle: e$bodyStyle,
    width: M,
    zIndex: e$zIndex,
    afterClose: e$afterClose,
    keyboard: e$keyboard,
    centered: e$centered,
    getContainer: e$getContainer,
    closable: k,
    closeIcon: e$closeIcon,
    modalRender: e$modalRender,
    focusTriggerAfterClose: e$focusTriggerAfterClose
  }, React.createElement("div", {
    className: "".concat(P, "-body-wrapper")
  }, React.createElement("div", {
    className: "".concat(P, "-body")
  }, e$icon, undefined === e.title ? null : React.createElement("span", {
    className: "".concat(P, "-title")
  }, e.title), React.createElement("div", {
    className: "".concat(P, "-content")
  }, e.content)), React.createElement("div", {
    className: "".concat(P, "-btns")
  }, G, React.createElement(T, {
    type: F,
    actionFn: e$onOk,
    close: e$close,
    autoFocus: "ok" === H,
    buttonProps: e$okButtonProps,
    prefixCls: "".concat(e$rootPrefixCls, "-btn")
  }, e$okText)))))
}
var R = []
var F = function (e, t) {
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
function N(e) {
  var t = document.createDocumentFragment()
  var n = $$_19.a($$_19.a({}, e), {
    close: s,
    visible: true
  })
  function r() {
    $$_80_index.unmountComponentAtNode(t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      r[i] = arguments[i]
    }
    var o = r.some(function (e) {
      return e && e.triggerCancel
    })
    if (e.onCancel && o) {
      e.onCancel.apply(e, r)
    }
    for (var a = 0; a < R.length; a++) {
      var c = R[a]
      if (c === s) {
        R.splice(a, 1)
        break
      }
    }
  }
  function a(e) {
    var /* [auto-meaningful-name] */e$okText = e.okText
    var /* [auto-meaningful-name] */e$cancelText = e.cancelText
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    var s = F(e, ["okText", "cancelText", "prefixCls"])
    setTimeout(function () {
      var e = $_615.b()
      var c = $_285_index.b()
      var /* [auto-meaningful-name] */c$getPrefixCls = c.getPrefixCls
      var /* [auto-meaningful-name] */c$getIconPrefixCls = c.getIconPrefixCls
      var d = c$getPrefixCls(undefined, P)
      var h = e$prefixCls || "".concat(d, "-modal")
      var p = c$getIconPrefixCls()
      $$_80_index.render(React.createElement(I, $$_19.a({}, s, {
        prefixCls: h,
        rootPrefixCls: d,
        iconPrefixCls: p,
        okText: e$okText || (s.okCancel ? e.okText : e.justOkText),
        cancelText: e$cancelText || e.cancelText
      })), t)
    })
  }
  function s() {
    for (var t = this, /* [auto-meaningful-name] */arguments$length = arguments.length, s = new Array(arguments$length), c = 0; c < arguments$length; c++) {
      s[c] = arguments[c]
    }
    a(n = $$_19.a($$_19.a({}, n), {
      visible: false,
      afterClose: function () {
        if ("function" === typeof e.afterClose) {
          e.afterClose()
        }
        r.apply(t, s)
      }
    }))
  }
  a(n)
  R.push(s)
  return {
    destroy: s,
    update: function (e) {
      a(n = "function" === typeof e ? e(n) : $$_19.a($$_19.a({}, n), e))
    }
  }
}
function M(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_927.a, null),
    okCancel: false
  }, e), {
    type: "warning"
  })
}
function L(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1046.a, null),
    okCancel: false
  }, e), {
    type: "info"
  })
}
function j(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1045.a, null),
    okCancel: false
  }, e), {
    type: "success"
  })
}
function U(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1047.a, null),
    okCancel: false
  }, e), {
    type: "error"
  })
}
function H(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_927.a, null),
    okCancel: true
  }, e), {
    type: "confirm"
  })
}
export { I }
export { R }
export { N }
export { M }
export { L }
export { j }
export { U }
export { H }
