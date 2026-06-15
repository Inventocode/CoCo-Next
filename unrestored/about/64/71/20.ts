/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：20
 */

"use strict"

export { s as c }
export { u as a }
export { l as b }
export { c as d }
import * as /* [auto-meaningful-name] */Module_0 from /* 0 */"../73/0"
import { Fragment, Children } from /* 13 */"react"
import * as /* [auto-meaningful-name] */Module_65 from /* 65 */"../73/65"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../73/11/index"
function s(e) {
  Module_65.a(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
}
var u = Module_0.a(Module_0.a({}, Module_11.a), {
  textComponent: Fragment
})
function l(e) {
  return function (t) {
    return e(Children.toArray(t))
  }
}
function c(e, t) {
  if (e === t) {
    return true
  }
  if (!e || !t) {
    return false
  }
  var n = Object.keys(e)
  var r = Object.keys(t)
  var /* [auto-meaningful-name] */n$length = n.length
  if (r.length !== n$length) {
    return false
  }
  for (var o = 0; o < n$length; o++) {
    var a = n[o]
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) {
      return false
    }
  }
  return true
}
export default u
