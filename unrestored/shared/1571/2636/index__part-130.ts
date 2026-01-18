/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-130
 */

"use strict"

import { Nw } from "./index__part-129"
import * as /* [auto-meaningful-name] */$_517 from "./517"
import * as /* [auto-meaningful-name] */$_610 from "./610"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import qv from "./88"
import * as Ln from "./35"
import * as Dn from "./19"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1048_index from "./1048/index"
import * as /* [auto-meaningful-name] */$_364_index from "./364/index"
var xw = function (e, t) {
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
var Dw = React1.forwardRef(function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$loading = e.loading
  var /* [auto-meaningful-name] */e$className = e.className
  var s = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var l = xw(e, ["prefixCls", "size", "loading", "className", "disabled"])
  $_364_index.a("checked" in l || !("value" in l), "Switch", "`value` is not a valid prop, do you mean `checked`?")
  var u = React1.useContext($_801_index.b)
  var /* [auto-meaningful-name] */u$getPrefixCls = u.getPrefixCls
  var /* [auto-meaningful-name] */u$direction = u.direction
  var h = React1.useContext($_517.b)
  var m = u$getPrefixCls("switch", e$prefixCls)
  var g = React1.createElement("div", {
    className: "".concat(m, "-handle")
  }, e$loading && React1.createElement($_610.a, {
    className: "".concat(m, "-loading-icon")
  }))
  var _ = N((n = {}, Ln.a(n, "".concat(m, "-small"), "small" === (e$size || h)), Ln.a(n, "".concat(m, "-loading"), e$loading), Ln.a(n, "".concat(m, "-rtl"), "rtl" === u$direction), n), s)
  return React1.createElement($_1048_index.a, {
    insertExtraNode: true
  }, React1.createElement(Nw, Dn.a({}, l, {
    prefixCls: m,
    className: _,
    disabled: e$disabled || e$loading,
    ref: t,
    loadingIcon: g
  })))
})
Dw.__ANT_SWITCH = true
Dw.displayName = "Switch"
var Lw = Dw
var Pw = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "switch" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var s = undefined === e$formConfig$label ? "switch" : e$formConfig$label
  var /* [auto-meaningful-name] */e$formConfig$checkedLabel = e$formConfig.checkedLabel
  var /* [auto-meaningful-name] */e$formConfig$unCheckedLabel = e$formConfig.unCheckedLabel
  var /* [auto-meaningful-name] */e$formConfig$convert = e$formConfig.convert
  var /* [auto-meaningful-name] */e$formConfig$reverse = e$formConfig.reverse
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var f = $_710_index$a$formatMessage({
    id: s
  })
  var m = e$formConfig$checkedLabel ? $_710_index$a$formatMessage({
    id: e$formConfig$checkedLabel
  }) : ""
  var g = e$formConfig$unCheckedLabel ? $_710_index$a$formatMessage({
    id: e$formConfig$unCheckedLabel
  }) : ""
  var _ = e$getValue(n)
  if (e$formConfig$convert) {
    _ = e$formConfig$convert(_)
  }
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper),
    label: f
  }, React.createElement(Lw, {
    checkedChildren: m,
    unCheckedChildren: g,
    defaultChecked: _,
    onClick: function (e) {
      var t = e
      if (e$formConfig$reverse) {
        t = e$formConfig$reverse(e)
      }
      if (e$onChange) {
        e$onChange(n, t)
      }
    }
  }))
})
export { Lw }
export { Pw }
