/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2627__part-3
 */

"use strict"

import { "2627__part-1__b" as b } from "./index__part-1"
import { "2627__part-2__T" as T } from "./index__part-2"
import { "2627__part-4__P" as P } from "./index__part-4"
import * as /* [auto-meaningful-name] */$_914 from "./914"
import * as /* [auto-meaningful-name] */$_1025 from "./1025"
import * as /* [auto-meaningful-name] */$_1023 from "./1023"
import * as /* [auto-meaningful-name] */$_1024 from "./1024"
import * as /* [auto-meaningful-name] */$$_75_index from "../75/index"
import * as /* [auto-meaningful-name] */$$_431 from "../431"
import * as /* [auto-meaningful-name] */$_611 from "./611"
import c from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_29 from "../29"
import * as /* [auto-meaningful-name] */$$_363_index from "../363/index"
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
  $$_363_index.a(!("string" === typeof e$icon && e$icon.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  var R = e.okType || "primary"
  var P = "".concat(e$prefixCls, "-confirm")
  var N = !("okCancel" in e) || e.okCancel
  var M = e.width || 416
  var j = e.style || {}
  var L = undefined === e.mask || e.mask
  var U = undefined !== e.maskClosable && e.maskClosable
  var H = null !== e.autoFocusButton && (e.autoFocusButton || "ok")
  var V = c(P, "".concat(P, "-").concat(e.type), $$_29.a({}, "".concat(P, "-rtl"), "rtl" === e$direction), e.className)
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
    wrapClassName: c($$_29.a({}, "".concat(P, "-centered"), !!e.centered)),
    onCancel: function () {
      return e$close({
        triggerCancel: true
      })
    },
    visible: e$visible,
    title: "",
    footer: "",
    transitionName: $$_431.b(e$rootPrefixCls, "zoom", e.transitionName),
    maskTransitionName: $$_431.b(e$rootPrefixCls, "fade", e.maskTransitionName),
    mask: L,
    maskClosable: U,
    maskStyle: e$maskStyle,
    style: j,
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
    type: R,
    actionFn: e$onOk,
    close: e$close,
    autoFocus: "ok" === H,
    buttonProps: e$okButtonProps,
    prefixCls: "".concat(e$rootPrefixCls, "-btn")
  }, e$okText)))))
}
var F = []
var R = function (e, t) {
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
    $$_75_index.unmountComponentAtNode(t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      r[i] = arguments[i]
    }
    var o = r.some(function (e) {
      return e && e.triggerCancel
    })
    if (e.onCancel && o) {
      e.onCancel.apply(e, r)
    }
    for (var a = 0; a < F.length; a++) {
      var c = F[a]
      if (c === s) {
        F.splice(a, 1)
        break
      }
    }
  }
  function a(e) {
    var /* [auto-meaningful-name] */e$okText = e.okText
    var /* [auto-meaningful-name] */e$cancelText = e.cancelText
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    var s = R(e, ["okText", "cancelText", "prefixCls"])
    setTimeout(function () {
      var e = $_611.b()
      var c = $_285_index.b()
      var /* [auto-meaningful-name] */c$getPrefixCls = c.getPrefixCls
      var /* [auto-meaningful-name] */c$getIconPrefixCls = c.getIconPrefixCls
      var d = c$getPrefixCls(undefined, P)
      var h = e$prefixCls || "".concat(d, "-modal")
      var p = c$getIconPrefixCls()
      $$_75_index.render(React.createElement(I, $$_19.a({}, s, {
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
  F.push(s)
  return {
    destroy: s,
    update: function (e) {
      a(n = "function" === typeof e ? e(n) : $$_19.a($$_19.a({}, n), e))
    }
  }
}
function M(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_914.a, null),
    okCancel: false
  }, e), {
    type: "warning"
  })
}
function j(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1024.a, null),
    okCancel: false
  }, e), {
    type: "info"
  })
}
function L(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1023.a, null),
    okCancel: false
  }, e), {
    type: "success"
  })
}
function U(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1025.a, null),
    okCancel: false
  }, e), {
    type: "error"
  })
}
function H(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_914.a, null),
    okCancel: true
  }, e), {
    type: "confirm"
  })
}
export { I as "2627__part-3__I" }
export { F as "2627__part-3__F" }
export { N as "2627__part-3__N" }
export { M as "2627__part-3__M" }
export { j as "2627__part-3__j" }
export { L as "2627__part-3__L" }
export { U as "2627__part-3__U" }
export { H as "2627__part-3__H" }
