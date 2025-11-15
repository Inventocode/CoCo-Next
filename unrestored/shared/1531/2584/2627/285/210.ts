/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：210
 */

"use strict"

function r(e, t) {
  if (function (e) {
    return "string" === typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e)
  }(e)) {
    e = "100%"
  }
  var n = function (e) {
    return "string" === typeof e && -1 !== e.indexOf("%")
  }(e)
  e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))
  if (n) {
    e = parseInt(String(e * t), 10) / 100
  }
  return Math.abs(e - t) < 1e-6 ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t))
}
function i(e) {
  return Math.min(1, Math.max(0, e))
}
function o(e) {
  e = parseFloat(e)
  if (isNaN(e) || e < 0 || e > 1) {
    e = 1
  }
  return e
}
function a(e) {
  return e <= 1 ? 100 * Number(e) + "%" : e
}
function s(e) {
  return 1 === e.length ? "0" + e : String(e)
}
export { r as a }
export { i as c }
export { o as b }
export { a as d }
export { s as e }
export default r
