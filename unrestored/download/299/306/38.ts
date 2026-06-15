/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：38
 */

"use strict"

export { s as c }
export { u as a }
export { c as b }
export { l as d }
import * as /* [auto-meaningful-name] */Module_0 from /* 0 */"../308/0"
import { Fragment, Children } from /* 17 */"react"
import * as /* [auto-meaningful-name] */Module_300 from /* 300 */"../308/300"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../308/21"
function s(e) {
  Module_300.a(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
}
var u = Module_0.a(Module_0.a({}, Module_21.a), {
  textComponent: Fragment
})
function c(e) {
  return function (t) {
    return e(Children.toArray(t))
  }
}
function l(e, t) {
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
