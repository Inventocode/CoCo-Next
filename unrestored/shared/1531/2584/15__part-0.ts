/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as o from "./47"
function i(e, t, n) {
  return (e / t * 100).toFixed(n)
}
function a(e, t, n) {
  return Math.min(Math.max(e, t), n)
}
function s(e, t) {
  var n = t.indexOf(e)
  return n > -1 ? t[n] : t.reduce(function (t, n) {
    return Math.abs(n - e) < Math.abs(t - e) ? n : t
  })
}
function c(e) {
  if ("string" !== typeof e || e.startsWith("0x") || "" === e.trim() || "Infinity" === e) {
    return e
  }
  var t = Number(e)
  return isNaN(t) ? e : t
}
function l(e, t) {
  var n
  var r = new Set(e)
  var i = new Set(t)
  var a = []
  var s = o.a(r)
  try {
    for (s.s(); !(n = s.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      if (!i.has(n$value)) {
        a.push(n$value)
      }
    }
  } catch (l) {
    s.e(l)
  } finally {
    s.f()
  }
  return a
}
function u(e) {
  return /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9_]*$/.test(e)
}
export { i as "15__part-0__i" }
export { a as "15__part-0__a" }
export { s as "15__part-0__s" }
export { c as "15__part-0__c" }
export { l as "15__part-0__l" }
export { u as "15__part-0__u" }
