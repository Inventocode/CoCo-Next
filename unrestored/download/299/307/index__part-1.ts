/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-1
 */

"use strict"

var /* [auto-meaningful-name] */Function$prototype$toString
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
var p = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    Function$prototype$toString = Function.prototype.toString
    Function.prototype.toString = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      var n = Module_23.f(this) || this
      return Function$prototype$toString.apply(n, e)
    }
  }
  e.id = "FunctionToString"
  return e
}()
var d = function () {
  d = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }
  return d.apply(this, arguments)
}
function h(e) {
  var t = "function" === typeof Symbol && Symbol.iterator
  var n = t && e[t]
  var r = 0
  if (n) {
    return n.call(e)
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined
        }
        return {
          value: e && e[r++],
          done: !e
        }
      }
    }
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function g(e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
function m() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(g(arguments[t]))
  }
  return e
}
export { p }
export { d }
export { h }
export { g }
export { m }
