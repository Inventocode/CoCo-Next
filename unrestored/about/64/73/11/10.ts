/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：10
 */

"use strict"

function r(e, t) {
  var n = t && t.cache ? t.cache : c
  var r = t && t.serializer ? t.serializer : u
  return (t && t.strategy ? t.strategy : s)(e, {
    cache: n,
    serializer: r
  })
}
function i(e, t, n, r) {
  var i
  var o = null == (i = r) || "number" === typeof i || "boolean" === typeof i ? r : n(r)
  var a = t.get(o)
  if ("undefined" === typeof a) {
    a = e.call(this, r)
    t.set(o, a)
  }
  return a
}
function o(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3)
  var i = n(r)
  var o = t.get(i)
  if ("undefined" === typeof o) {
    o = e.apply(this, r)
    t.set(i, o)
  }
  return o
}
function a(e, t, n, r, i) {
  return n.bind(t, e, r, i)
}
function s(e, t) {
  return a(e, this, 1 === e.length ? i : o, t.cache.create(), t.serializer)
}
export { r as a }
export { f as b }
var u = function () {
  return JSON.stringify(arguments)
}
function l() {
  this.cache = Object.create(null)
}
l.prototype.get = function (e) {
  return this.cache[e]
}
l.prototype.set = function (e, t) {
  this.cache[e] = t
}
var c = {
  create: function () {
    return new l()
  }
}
var f = {
  variadic: function (e, t) {
    return a(e, this, o, t.cache.create(), t.serializer)
  },
  monadic: function (e, t) {
    return a(e, this, i, t.cache.create(), t.serializer)
  }
}
export default r
