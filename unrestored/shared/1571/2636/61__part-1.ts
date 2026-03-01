/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：61__part-1
 */

"use strict"

import { d } from "./61__part-0"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"./75"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
var f = "<sep gap=\"".concat(45, "\"></sep>")
var /* [auto-meaningful-name] */DROPDOWN_PLACEHOLDER_OPTION_VALUE = "DROPDOWN_PLACEHOLDER_OPTION_VALUE"
var m = "?"
var /* [auto-meaningful-name] */DROPDOWN_PLACEHOLDER_EMPTY_IMAGE_VALUE = "DROPDOWN_PLACEHOLDER_EMPTY_IMAGE_VALUE"
var /* [auto-meaningful-name] */_nBlockType_Date_get_current_date_Uncache_True__n_block_nBlockType_Date_check_date_is_equal_Uncache_True__nValueName_DATE_A__nShadowType_Date_get_current_date__shadow_n_value_nValueName_DATE_B__nShadowType_Date_get_current_date__shadow_n_value_n_block_nBlockType_Date_get_date_minus_operation_Uncache_True__nValueName_DATE_A__nShadowType_Date_get_current_date__shadow_n_value_nValueName_DATE_B__nShadowType_Date_get_current_date__shadow_n_value_n_block = "\n  <block type=\"date_get_current_date\" uncache=\"true\">\n  </block>\n  <block type=\"date_check_date_is_equal\" uncache=\"true\">\n    <value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n  </block>\n  <block type=\"date_get_date_minus_operation\" uncache=\"true\">\n    <value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n  </block>"
function v() {
  var e = [d]
  Module_33.K().forEach(function (t) {
    if (t.blockConfig) {
      e.push(t.blockConfig)
    }
    var /* [auto-meaningful-name] */t$blockConfig$getTemplate = t.blockConfig.getTemplate
    t.blockConfig.getTemplate = function (e, r) {
      if (r) {
        if (!t.hasAnyWidget) {
          console.error("anyWidget is not supported")
          return []
        }
        var o = Src_shared_widget_custom_storage.f(t.type)
        if (o) {
          return Src_shared_widget_custom_load.e(null, o.type, o.types, true)
        }
      }
      return t$blockConfig$getTemplate(e)
    }
  })
  return e
}
function b() {
  var e = new Map()
  var t = []
  v().forEach(function (e) {
    t.push.apply(t, Module_25.a(e.topBlocks))
  })
  t.forEach(function (t) {
    e.set(t, true)
  })
  return e
}
function y() {
  var e = {}
  v().forEach(function (t) {
    e[t.type] = t.category
  })
  return Module_6.a({}, e)
}
function E() {
  var e = {}
  v().forEach(function (t) {
    e[t.type] = t.categoryClass
  })
  return e
}
function O() {
  var e = []
  v().forEach(function (t) {
    e.push(t.blockDeclareGroup)
  })
  return e
}
function w() {
  var e = {}
  v().forEach(function (t) {
    e[t.type] = t.renameBlocksInfo
    if (!e[t.type].blocksList.includes("widget_set")) {
      e[t.type].blocksList.push("widget_set")
    }
    if (!e[t.type].blocksList.includes("widget_get")) {
      e[t.type].blocksList.push("widget_get")
    }
    if (!e[t.type].blocksList.includes("widget_method")) {
      e[t.type].blocksList.push("widget_method")
    }
  })
  return e
}
function C(e, t, n) {
  var r = v().find(function (t) {
    return t.type === e
  })
  return r ? r.getTemplate(t, n) : []
}
function T(e, t, n) {
  var r
  var o
  var i = 100
  var a = null === n || undefined === n ? undefined : n.find(function (e) {
    return e.label === t
  })
  if (a) {
    o = a.min
    r = a.max
    i = a.value
  } else {
    switch (t) {
      case "positionX":
      case "positionY":
        o = -(r = "positionX" === t ? Module_75.a : Module_75.b)
        break
      case "width":
        r = Module_75.e
        o = 24
        break
      case "height":
        r = Module_75.d
        o = 24
        break
      case "fontSize":
        r = 99
        o = 12
        i = 16
    }
  }
  !function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : Module_75.b
    var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 100
    var o = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : "NUM"
    var /* [auto-meaningful-name] */e$source_block = e.source_block
    var a = null === e$source_block || undefined === e$source_block ? undefined : e$source_block.get_shadow_field(o)
    if (a && "FieldNumber" === a.field_type) {
      a.set_value(r.toString())
      a.set_constraints(t, n, 1)
    }
  }(e, o, r, i)
}
export { f }
export { DROPDOWN_PLACEHOLDER_OPTION_VALUE as h }
export { m }
export { DROPDOWN_PLACEHOLDER_EMPTY_IMAGE_VALUE as g }
export { _nBlockType_Date_get_current_date_Uncache_True__n_block_nBlockType_Date_check_date_is_equal_Uncache_True__nValueName_DATE_A__nShadowType_Date_get_current_date__shadow_n_value_nValueName_DATE_B__nShadowType_Date_get_current_date__shadow_n_value_n_block_nBlockType_Date_get_date_minus_operation_Uncache_True__nValueName_DATE_A__nShadowType_Date_get_current_date__shadow_n_value_nValueName_DATE_B__nShadowType_Date_get_current_date__shadow_n_value_n_block as _ }
export { b }
export { y }
export { E }
export { O }
export { w }
export { C }
export { T }
