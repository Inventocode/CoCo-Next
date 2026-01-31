/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-129
 */

"use strict"

import * as vb from "./54"
import * as Ln from "./35"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import N from "./8"
import { forwardRef, createElement } from "react"
import * as /* [auto-meaningful-name] */$_1521 from "./1521"
import * as /* [auto-meaningful-name] */$_1202 from "./1202"
var jw = forwardRef(function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var o = undefined === e$prefixCls ? "rc-switch" : e$prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$checked = e.checked
  var /* [auto-meaningful-name] */e$defaultChecked = e.defaultChecked
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$loadingIcon = e.loadingIcon
  var /* [auto-meaningful-name] */e$checkedChildren = e.checkedChildren
  var /* [auto-meaningful-name] */e$unCheckedChildren = e.unCheckedChildren
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var g = vb.a(e, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"])
  var _ = $_1521.a(false, {
    value: e$checked,
    defaultValue: e$defaultChecked
  })
  var v = $_40_index.a(_, 2)
  var b = v[0]
  var y = v[1]
  function E(e, t) {
    var n = b
    if (!e$disabled) {
      y(n = e)
      if (!(null === e$onChange || undefined === e$onChange)) {
        e$onChange(n, t)
      }
    }
    return n
  }
  var O = N(o, e$className, (n = {}, Ln.a(n, "".concat(o, "-checked"), b), Ln.a(n, "".concat(o, "-disabled"), e$disabled), n))
  return createElement("button", Object.assign({}, g, {
    type: "button",
    role: "switch",
    "aria-checked": b,
    disabled: e$disabled,
    className: O,
    ref: t,
    onKeyDown: function (e) {
      if (e.which === $_1202.a.LEFT) {
        E(false, e)
      } else {
        if (e.which === $_1202.a.RIGHT) {
          E(true, e)
        }
      }
      if (!(null === e$onKeyDown || undefined === e$onKeyDown)) {
        e$onKeyDown(e)
      }
    },
    onClick: function (e) {
      var t = E(!b, e)
      if (!(null === e$onClick || undefined === e$onClick)) {
        e$onClick(t, e)
      }
    }
  }), e$loadingIcon, createElement("span", {
    className: "".concat(o, "-inner")
  }, b ? e$checkedChildren : e$unCheckedChildren))
})
jw.displayName = "Switch"
var Nw = jw
export { Nw }
