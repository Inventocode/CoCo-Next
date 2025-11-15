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
import * as /* [auto-meaningful-name] */$$_73_0 from "../73/0"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_73_65 from "../73/65"
import * as /* [auto-meaningful-name] */$$_73_11_index from "../73/11/index"
function s(e) {
  $$_73_65.a(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
}
var u = $$_73_0.a($$_73_0.a({}, $$_73_11_index.a), {
  textComponent: React.Fragment
})
function l(e) {
  return function (t) {
    return e(React.Children.toArray(t))
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
