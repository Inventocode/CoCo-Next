/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-0
 */

"use strict"

import { "72__part-1__w" as w } from "./index__part-1"
var r = {}
Object.defineProperty(r, "FunctionToString", {
  get: function () {
    return d
  }
})
Object.defineProperty(r, "InboundFilters", {
  get: function () {
    return w
  }
})
var /* [auto-meaningful-name] */_6$11$0 = "6.11.0"
var o = function (e, t) {
  return (o = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function a(e, t) {
  function n() {
    this.constructor = e
  }
  o(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var /* [auto-meaningful-name] */Function$prototype$toString
var u = function () {
  return (u = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
function l(e) {
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
function c(e, t) {
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
function f() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(c(arguments[t]))
  }
  return e
}
var d = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    Function$prototype$toString = Function.prototype.toString
    Function.prototype.toString = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      var n = this.__sentry_original__ || this
      return Function$prototype$toString.apply(n, e)
    }
  }
  e.id = "FunctionToString"
  return e
}()
var p = function () {
  return (p = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
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
function m(e, t) {
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
function v() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(m(arguments[t]))
  }
  return e
}
export { r as "72__part-0__r" }
export { _6$11$0 as "72__part-0__i" }
export { a as "72__part-0__a" }
export { u as "72__part-0__u" }
export { l as "72__part-0__l" }
export { f as "72__part-0__f" }
export { p as "72__part-0__p" }
export { h as "72__part-0__h" }
export { v as "72__part-0__v" }
