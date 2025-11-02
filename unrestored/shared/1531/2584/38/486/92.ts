/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：92
 */

"use strict"

export { P as a }
export { v as b }
export { M as c }
export { b as d }
export { u as e }
export { L as f }
export { W as g }
export { U as h }
export { Y as i }
export { te as j }
export { ne as k }
export { ee as l }
export { ie as m }
export { R as n }
export { D as o }
export { N as p }
export { V as q }
export { F as r }
export { oe as s }
export { J as t }
export { q as u }
export { $ as v }
export { j as w }
export { re as x }
export { H as y }
export { l as z }
export { G as A }
export { I as B }
export { z as C }
export { Q as D }
export { K as E }
export { m as F }
export { O as G }
export { s as H }
export { C as I }
export { y as J }
export { B as K }
export { p as L }
export { f as M }
export { g as N }
export { h as O }
export { x as P }
export { c as Q }
export { d as R }
export { k as S }
export { E as T }
export { w as U }
import r = require("./229");
import i = require("../../19");
import o = require("./179");
import a = require("./982");
var s = function (e) {
  return function () {
    return e
  }
}(true)
var c = function () {}
var u = function (e) {
  return e
}
if ("function" === typeof Symbol && Symbol.asyncIterator) {
  Symbol.asyncIterator
}
function l(e, t, n) {
  if (!t(e)) {
    throw new Error(n)
  }
}
var f = function (e, t) {
  i.a(e, t)
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(t).forEach(function (n) {
      e[n] = t[n]
    })
  }
}
var d = function (e, t) {
  var n
  return (n = []).concat.apply(n, t.map(e))
}
function h(e, t) {
  var n = e.indexOf(t)
  if (n >= 0) {
    e.splice(n, 1)
  }
}
function p(e) {
  var t = false
  return function () {
    if (!t) {
      t = true
      e()
    }
  }
}
var _ = function (e) {
  throw e
}
var A = function (e) {
  return {
    value: e,
    done: true
  }
}
function g(e, t, n) {
  if (undefined === t) {
    t = _
  }
  if (undefined === n) {
    n = "iterator"
  }
  var r = {
    meta: {
      name: n
    },
    next: e,
    throw: t,
    return: A,
    isSagaIterator: true
  }
  if ("undefined" !== typeof Symbol) {
    r[Symbol.iterator] = function () {
      return r
    }
  }
  return r
}
function v(e, t) {
  var t$sagaStack = t.sagaStack
  console.error(e)
  console.error(t$sagaStack)
}
var m = function (e) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + e + "\n")
}
var y = function (e) {
  return Array.apply(null, new Array(e))
}
var b = function (e) {
  return function (t) {
    return e(Object.defineProperty(t, r.f, {
      value: true
    }))
  }
}
var w = function (e) {
  return e === r.k
}
var E = function (e) {
  return e === r.j
}
var x = function (e) {
  return w(e) || E(e)
}
function C(e, t) {
  var n = Object.keys(e)
  var n$length = n.length
  var i
  var a = 0
  var s = o.a(e) ? y(n$length) : {}
  var u = {}
  n.forEach(function (e) {
    var n = function (n, o) {
      if (!i) {
        if (o || x(n)) {
          t.cancel()
          t(n, o)
        } else {
          s[e] = n
          if (++a === n$length) {
            i = true
            t(s)
          }
        }
      }
    }
    n.cancel = c
    u[e] = n
  })
  t.cancel = function () {
    if (!i) {
      i = true
      n.forEach(function (e) {
        return u[e].cancel()
      })
    }
  }
  return u
}
function O(e) {
  return {
    name: e.name || "anonymous",
    location: k(e)
  }
}
function k(e) {
  return e[r.g]
}
var S = {
  isEmpty: s,
  put: c,
  take: c
}
function T(e, t) {
  if (undefined === e) {
    e = 10
  }
  var n = new Array(e)
  var r = 0
  var i = 0
  var o = 0
  var a = function (t) {
    n[i] = t
    i = (i + 1) % e
    r++
  }
  var s = function () {
    if (0 != r) {
      var t = n[o]
      n[o] = null
      r--
      o = (o + 1) % e
      return t
    }
  }
  var c = function () {
    for (var e = []; r;) {
      e.push(s())
    }
    return e
  }
  return {
    isEmpty: function () {
      return 0 == r
    },
    put: function (s) {
      var u
      if (r < e) {
        a(s)
      } else {
        switch (t) {
          case 1:
            throw new Error("Channel's Buffer overflow!")
          case 3:
            n[i] = s
            o = i = (i + 1) % e
            break
          case 4:
            u = 2 * e
            n = c()
            r = n.length
            i = n.length
            o = 0
            n.length = u
            e = u
            a(s)
        }
      }
    },
    take: s,
    flush: c
  }
}
var B = function () {
  return S
}
var D = function (e) {
  return T(e, 3)
}
var I = function (e) {
  return T(e, 4)
}
var F = "TAKE"
var R = "PUT"
var P = "ALL"
var N = "RACE"
var M = "CALL"
var j = "CPS"
var L = "FORK"
var U = "JOIN"
var H = "CANCEL"
var V = "SELECT"
var G = "ACTION_CHANNEL"
var z = "CANCELLED"
var Q = "FLUSH"
var W = "GET_CONTEXT"
var K = "SET_CONTEXT"
var X = function (e, t) {
  var n;
  (n = {})[r.c] = true
  n.combinator = false
  n.type = e
  n.payload = t
  return n
}
function Y(e, t) {
  if (undefined === e) {
    e = "*"
  }
  return o.i(e) ? X(F, {
    pattern: e
  }) : o.f(e) && o.g(t) && o.i(t) ? X(F, {
    channel: e,
    pattern: t
  }) : o.b(e) ? X(F, {
    channel: e
  }) : undefined
}
function q(e, t) {
  if (o.n(t)) {
    t = e
    e = undefined
  }
  return X(R, {
    channel: e,
    action: t
  })
}
function $(e) {
  var t = X(P, e)
  t.combinator = true
  return t
}
function J(e) {
  var t = X(N, e)
  t.combinator = true
  return t
}
function Z(e, t) {
  var n
  var r = null
  if (o.d(e)) {
    n = e
  } else {
    if (o.a(e)) {
      r = e[0]
      n = e[1]
    } else {
      r = e.context
      n = e.fn
    }
    if (r && o.k(n) && o.d(r[n])) {
      n = r[n]
    }
  }
  return {
    context: r,
    fn: n,
    args: t
  }
}
function ee(e) {
  for (var arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  return X(M, Z(e, n))
}
function te(e) {
  for (var arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  return X(L, Z(e, n))
}
function ne(e) {
  if (undefined === e) {
    e = r.h
  }
  return X(H, e)
}
function re(e) {
  if (undefined === e) {
    e = u
  }
  for (var arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  return X(V, {
    selector: e,
    args: n
  })
}
function ie(e, t) {
  return X(G, {
    pattern: e,
    buffer: t
  })
}
var oe = ee.bind(null, a.a)
export default P
