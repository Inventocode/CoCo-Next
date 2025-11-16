/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：28
 */

"use strict"

export { c as j }
export { l as n }
export { u as a }
export { d as p }
export { p as o }
export { f as l }
export { h as e }
export { m as b }
export { g as h }
export { _ as f }
export { v as d }
export { b as g }
export { y as c }
export { E as k }
export { O as m }
export { w as i }
import "color"
import * as /* [auto-meaningful-name] */$_773_index from "./773/index"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_303_index from "./303/index"
import /* [auto-meaningful-name] */_$_303_index from "./303/index"
import * as /* [auto-meaningful-name] */$_651 from "./651"
function c(e) {
  return e + "_" + _$_303_index.generate()
}
function l() {
  var e = document.getElementById("rootPlayer")
  return e ? e.clientHeight / e.clientWidth : 640 / 360
}
function u() {
  return "undefined" === typeof window
}
function d(e) {
  return Lodash.isPlainObject(e) ? JSON.stringify(e) : (null === e || undefined === e ? undefined : e.toString()) || ""
}
function p(e) {
  return "%{COCO_player/".concat(e, "}")
}
function f() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return navigator$userAgent.indexOf("Android") > -1 || navigator$userAgent.indexOf("Linux") > -1 ? "Android" : navigator$userAgent.indexOf("iPhone") > -1 ? "ios" : "web"
}
function h() {
  return window.location.pathname.includes("/editor-player.html")
}
function m() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return navigator$userAgent.includes("Android") || navigator$userAgent.includes("Linux")
}
function g() {
  var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
  return /\sQQ\/\d/.test(navigator$userAgent)
}
function _() {
  return "web" !== f()
}
function v() {
  return navigator.userAgent.toLowerCase().includes("cordova")
}
function b() {
  return "web" === f()
}
function y(e) {
  return $_651.findIndex(function (t) {
    return e.includes(t)
  }) > -1
}
function E(e) {
  var t = e ? new Date(e) : new Date()
  var n = t.getFullYear()
  var r = t.getMonth() + 1
  var o = t.getDate()
  var i = t.getHours()
  var a = t.getMinutes()
  var s = "".concat(n, "-").concat(r < 10 ? "0" + r : r, "-").concat(o < 10 ? "0" + o : o)
  var c = "".concat(i < 10 ? "0" + i : i, ":").concat(a < 10 ? "0" + a : a, ":").concat("00")
  return {
    dateTime: "".concat(s, " ").concat(c),
    date: s,
    time: c,
    y: n,
    m: r,
    d: o,
    h: i,
    min: a,
    s: 0
  }
}
function O(e, t, n) {
  var r
  var /* [auto-meaningful-name] */t$defaultMode
  var i = ""
  if (t) {
    i = n ? null === (r = t[n]) || undefined === r ? undefined : r[e] : null === (t$defaultMode = t.defaultMode) || undefined === t$defaultMode ? undefined : t$defaultMode[e]
  }
  return i || ""
}
function w(e) {
  return $_773_index.filterXSS(e)
}
_$_303_index.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_")
export default u
