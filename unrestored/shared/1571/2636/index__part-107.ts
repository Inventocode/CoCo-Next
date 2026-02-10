/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-107
 */

"use strict"

import { Zv } from "./index__part-91"
import { mb } from "./index__part-94"
import { Zb } from "./index__part-99"
import { oE, lE } from "./index__part-106"
import * as /* [auto-meaningful-name] */$_517 from "./517"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import qv from "./88"
import * as Ln from "./35"
import * as Dn from "./19"
import * as te from "../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { forwardRef, useContext, createElement, memo, useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_315 from "./315"
var dE = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var pE = forwardRef(function (e, t) {
  var n
  var r = useContext($_801_index.b)
  var /* [auto-meaningful-name] */r$getPrefixCls = r.getPrefixCls
  var /* [auto-meaningful-name] */r$direction = r.direction
  var a = useContext($_517.b)
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$addonBefore = e.addonBefore
  var /* [auto-meaningful-name] */e$addonAfter = e.addonAfter
  var /* [auto-meaningful-name] */e$bordered = e.bordered
  var h = undefined === e$bordered || e$bordered
  var /* [auto-meaningful-name] */e$readOnly = e.readOnly
  var g = dE(e, ["className", "size", "prefixCls", "addonBefore", "addonAfter", "bordered", "readOnly"])
  var _ = r$getPrefixCls("input-number", e$prefixCls)
  var v = createElement(lE, {
    className: "".concat(_, "-handler-up-inner")
  })
  var b = createElement(Zb, {
    className: "".concat(_, "-handler-down-inner")
  })
  var y = e$size || a
  var E = N((n = {}, Ln.a(n, "".concat(_, "-lg"), "large" === y), Ln.a(n, "".concat(_, "-sm"), "small" === y), Ln.a(n, "".concat(_, "-rtl"), "rtl" === r$direction), Ln.a(n, "".concat(_, "-readonly"), e$readOnly), Ln.a(n, "".concat(_, "-borderless"), !h), n), e$className)
  var O = createElement(oE, Dn.a({
    ref: t,
    className: E,
    upHandler: v,
    downHandler: b,
    prefixCls: _,
    readOnly: e$readOnly
  }, g))
  if (null != e$addonBefore || null != e$addonAfter) {
    var w
    var C = "".concat(_, "-group")
    var T = "".concat(C, "-addon")
    var S = e$addonBefore ? createElement("div", {
      className: T
    }, e$addonBefore) : null
    var A = e$addonAfter ? createElement("div", {
      className: T
    }, e$addonAfter) : null
    var I = N("".concat(_, "-wrapper"), C, Ln.a({}, "".concat(C, "-rtl"), "rtl" === r$direction))
    var j = N("".concat(_, "-group-wrapper"), (w = {}, Ln.a(w, "".concat(_, "-group-wrapper-sm"), "small" === a), Ln.a(w, "".concat(_, "-group-wrapper-lg"), "large" === a), Ln.a(w, "".concat(_, "-group-wrapper-rtl"), "rtl" === r$direction), w), e$className)
    return createElement("div", {
      className: j,
      style: e.style
    }, createElement("div", {
      className: I
    }, S, $_315.a(O, {
      style: null
    }), A))
  }
  return O
})
var fE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "number" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = (0, $_710.a().formatMessage)({
    id: e$formConfig.label || "content"
  })
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var c = undefined === e$formConfig$max ? 1 / 0 : e$formConfig$max
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var u = undefined === e$formConfig$min ? -1 / 0 : e$formConfig$min
  var /* [auto-meaningful-name] */e$formConfig$addonAfter = e$formConfig.addonAfter
  var p = e$getValue(n)
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper),
    align: "horizontal",
    label: a
  }, React.createElement(pE, {
    value: p,
    addonAfter: e$formConfig$addonAfter,
    max: c,
    min: u,
    controls: false,
    onChange: function (e) {
      e = null === e ? 0 : e
      e = Math.max(e, u)
      e = Math.min(e, c)
      e$onChange(n, e)
    }
  }))
})
var hE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "visible" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$renderInline = e.renderInline
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var s = e$getValue(n)
  var c = React.createElement($_13_index.i, {
    className: "coco-visible-switch changeVisible"
  }, React.createElement(Zv, {
    hasIcon: true,
    onClick: function () {
      e$onChange(n, !s)
    }
  }, React.createElement("span", {
    className: qv.btnIcon
  }, React.createElement($_13_index.j, {
    type: s ? "icon-see" : "icon-see-disable"
  })), $_710$a$formatMessage(s ? {
    id: "show"
  } : {
    id: "hide"
  })))
  return e$renderInline ? React.createElement($_13_index.e, null, c) : React.createElement($_13_index.u, {
    className: qv.formItemWrapper
  }, c)
})
var mE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "disabled" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$renderInline = e.renderInline
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var s = e$getValue(n)
  var c = React.createElement($_13_index.i, {
    className: "changeDisabled"
  }, React.createElement(Zv, {
    hasIcon: true,
    onClick: function () {
      e$onChange(n, !s)
    }
  }, React.createElement("span", {
    className: qv.btnIcon
  }, React.createElement($_13_index.j, {
    type: s ? "icon-use_disable" : "icon-use"
  })), $_710$a$formatMessage(s ? {
    id: "disabled"
  } : {
    id: "able"
  })))
  return e$renderInline ? React.createElement($_13_index.e, null, c) : React.createElement($_13_index.u, {
    className: qv.formItemWrapper
  }, c)
})
var gE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "color" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$renderInline = e.renderInline
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var s = undefined === e$formConfig$label ? "color" : e$formConfig$label
  var c = e$getValue(n)
  var l = (0, $_710.a().formatMessage)({
    id: s
  })
  var u = React.createElement($_13_index.i, {
    className: "changeColor",
    label: l
  }, React.createElement(mb, {
    keyName: n,
    onChange: e$onChange,
    color: c
  }))
  return e$renderInline ? React.createElement($_13_index.e, {
    span: 23
  }, u) : React.createElement($_13_index.u, {
    className: qv.formItemWrapper
  }, u)
})
var _E = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "backgroundColor" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$renderInline = e.renderInline
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var s = e$getValue(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var u = $_710$a$formatMessage({
    id: undefined === e$formConfig$label ? "backgroundColor" : e$formConfig$label
  })
  var d = useState(false)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var _ = React.createElement($_13_index.i, {
    label: u,
    className: "changeBackgroundColor"
  }, React.createElement($_1213.a, {
    placement: "rightBottom",
    trigger: "click",
    onVisibleChange: function (e) {
      g(e)
    },
    content: m && React.createElement($_13_index.q, {
      value: s,
      onChange: function (e) {
        e$onChange(n, e)
      }
    })
  }, React.createElement("div", {
    className: qv.colorBlock,
    style: {
      backgroundColor: te.i(s) ? "#ffffff" : s
    }
  }, te.i(s) && React.createElement("div", {
    className: qv.slash
  }))))
  return e$renderInline ? React.createElement($_13_index.e, {
    span: 23
  }, _) : React.createElement($_13_index.u, {
    className: qv.formItemWrapper
  }, _)
})
export { fE }
export { hE }
export { mE }
export { gE }
export { _E }
