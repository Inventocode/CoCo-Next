/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-113
 */

"use strict"

import qv from "./88"
import * as Qu from "./60"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Yr from "./53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as te from "../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_541_index from "./541/index"
import * as /* [auto-meaningful-name] */$_1056 from "./1056"
import /* [auto-meaningful-name] */$_10561 from "./1056"
var qE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "headline" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var a = e$getValue("headlineVisible")
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var c = useState(1)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef(null)
  var m = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */p$current = p.current
    if (m && p$current) {
      p$current.setRows(Math.min(p$current.getRowCount(), 3))
    }
  }, [m])
  var g = te.p(function (e) {
    e$onChange("headline", e)
  }, 100)
  return React.createElement($_13_index.i, {
    className: N($_10561.headline, $_10561.formItemWrapper, "changeHeadline")
  }, React.createElement("div", {
    className: $_10561.formTitle
  }, React.createElement("p", null, $_710$a$formatMessage({
    id: "headline"
  })), React.createElement($_541_index.a, {
    checked: a,
    onChange: function (e) {
      e$onChange("headlineVisible", e)
    }
  })), a && React.createElement($_13_index.A, {
    ref: p,
    maxLength: 200,
    defaultValue: i,
    rows: u,
    onFocus: function () {
      d(3)
    },
    onChange: function (e) {
      g(e.target.value)
    },
    onBlur: function (e, t) {
      d(Math.min(t, 3))
    }
  }))
})
var XE = [[Qu.t, Qu.l], [Qu.o, Qu.g]]
var QE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "size" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$sizeRange = e.formConfig.sizeRange
  var a = undefined === e$formConfig$sizeRange ? XE : e$formConfig$sizeRange
  var s = e$getValue(n) || {
    width: 0,
    height: 0
  }
  var c = null === s || undefined === s ? undefined : s.width
  var l = null === s || undefined === s ? undefined : s.height
  var u = e$getValue("type")
  var d = e$getValue("id")
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var m = useRef({})
  var g = function (e, t, r) {
    var i = {}
    i[e] = parseInt(r)
    var /* [auto-meaningful-name] */m$current = m.current
    m.current = D.a(D.a({}, m$current), i);
    (function (e) {
      return Lodash.debounce(function () {
        var /* [auto-meaningful-name] */m$current1 = m.current
        if (m$current1) {
          e$onChange(n, m$current1)
          m.current = {}
        }
      }, e)
    })(t)()
    if (u === $$_$$_$$_$$_src_editor_widget_builtIn_types.H && d && "height" === e) {
      e$onChange("sizeAdaptive", $$_$$_$$_$$_src_editor_widget_builtIn_types.q.FIXED)
    }
  }
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: "".concat(qv.formItemWrapper, " ").concat(qv.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: "size"
  })), React.createElement("div", {
    className: qv.formInputNumberRow
  }, React.createElement($_13_index.i, {
    className: "changeWidth"
  }, React.createElement($_13_index.o, {
    label: $_710$a$formatMessage({
      id: "width"
    }),
    defaultValue: c,
    type: "number",
    min: a[0][0],
    max: Math.min(a[0][1], Qu.m),
    rules: [
      {
        rule: Yr.w(9)
      }, {
        rule: Yr.v
      }
    ],
    className: "".concat(qv.justifyInputContent, " coco-number-inputRow"),
    onChange: g.bind(undefined, "width", 50),
    onStep: g.bind(undefined, "width", 0)
  })), React.createElement($_13_index.i, {
    className: "changeHeight"
  }, React.createElement($_13_index.o, {
    label: $_710$a$formatMessage({
      id: "height"
    }),
    defaultValue: l,
    type: "number",
    min: a[1][0],
    max: Math.min(a[1][1], Qu.h),
    rules: [
      {
        rule: Yr.w(9)
      }, {
        rule: Yr.v
      }
    ],
    className: "".concat(qv.justifyInputContent, " coco-number-inputRow"),
    onChange: g.bind(undefined, "height", 50),
    onStep: g.bind(undefined, "height", 0)
  }))))
})
export { qE }
export { QE }
