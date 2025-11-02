/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：487
 */

"use strict"

export { o as d }
export { i as e }
export { a as f }
export { s as c }
export { c as b }
export { u as a }
import r = require("./80/index");
function o(e) {
  return Array.isArray(e) ? e : undefined !== e ? [e] : []
}
function i(e, t) {
  var t$labelInValue = t.labelInValue
  var t$combobox = t.combobox
  var o = new Map()
  if (undefined === e || "" === e && t$combobox) {
    return [[], o]
  }
  var i = Array.isArray(e) ? e : [e]
  var a = i
  if (t$labelInValue) {
    a = i.filter(function (e) {
      return null !== e
    }).map(function (e) {
      var e$key = e.key
      var e$value = e.value
      var r = undefined !== e$value ? e$value : e$key
      o.set(r, e)
      return r
    })
  }
  return [a, o]
}
function a(e, t) {
  var t$optionLabelProp = t.optionLabelProp
  var t$labelInValue = t.labelInValue
  var t$prevValueMap = t.prevValueMap
  var t$options = t.options
  var t$getLabeledValue = t.getLabeledValue
  var s = e
  if (t$labelInValue) {
    s = s.map(function (e) {
      return t$getLabeledValue(e, {
        options: t$options,
        prevValueMap: t$prevValueMap,
        labelInValue: t$labelInValue,
        optionLabelProp: t$optionLabelProp
      })
    })
  }
  return s
}
function s(e, t) {
  var n
  var o = r.a(t)
  for (n = e.length - 1; n >= 0 && e[n].disabled; n -= 1) {
    ;
  }
  var i = null
  if (-1 !== n) {
    i = o[n]
    o.splice(n, 1)
  }
  return {
    values: o,
    removedValue: i
  }
}
var c = "undefined" !== typeof window && window.document && window.document.documentElement
var l = 0
function u() {
  var e
  if (c) {
    e = l
    l += 1
  } else {
    e = "TEST_OR_SSR"
  }
  return e
}
export default u
