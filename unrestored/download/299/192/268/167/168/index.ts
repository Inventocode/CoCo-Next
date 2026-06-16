/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：168
 */

"use strict"

var r = require(/* 13 */"../../../288/13/index")
var i = require(/* 20 */"../../../288/20/index")
var o = require(/* 63 */"../../../228/63")
var a = require(/* 83 */"../../../215/112/83")
var s = require(/* 14 */"../../../228/14")
var u = require(/* 169 */"../../../289/176/169")
var c = require(/* 86 */"../../../263/49/86/index")
var l = require(/* 72 */"../../../263/49/72/index")
var f = require(/* 65 */"../../65/index")
var p = require(/* 42 */"../../../233/42")
var d = require(/* 34 */"../../../228/34/index")
var h = require(/* 18 */"../../../233/18/index")
var g = require(/* 73 */"../73")
var m = require(/* 170 */"./170")
var /* [auto-meaningful-name] */a$PROPER = a.PROPER
var /* [auto-meaningful-name] */a$CONFIGURABLE = a.CONFIGURABLE
var /* [auto-meaningful-name] */m$IteratorPrototype = m.IteratorPrototype
var /* [auto-meaningful-name] */m$BUGGY_SAFARI_ITERATORS = m.BUGGY_SAFARI_ITERATORS
var w = h("iterator")
var S = "keys"
var /* [auto-meaningful-name] */Values = "values"
var /* [auto-meaningful-name] */Entries = "entries"
var E = function () {
  return this
}
module.exports = function (e, t, n, a, h, m, T) {
  u(n, t, a)
  var x
  var j
  var P
  var C = function (e) {
    if (e === h && L) {
      return L
    }
    if (!m$BUGGY_SAFARI_ITERATORS && e && e in e$prototype) {
      return e$prototype[e]
    }
    switch (e) {
      case S:
      case Values:
      case Entries:
        return function () {
          return new n(this, e)
        }
    }
    return function () {
      return new n(this)
    }
  }
  var I = t + " Iterator"
  var N = false
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  var R = e$prototype[w] || e$prototype["@@iterator"] || h && e$prototype[h]
  var L = !m$BUGGY_SAFARI_ITERATORS && R || C(h)
  var D = "Array" === t && e$prototype.entries || R
  if (D && (x = c(D.call(new e()))) !== Object.prototype && x.next) {
    if (!(o || c(x) === m$IteratorPrototype)) {
      if (l) {
        l(x, m$IteratorPrototype)
      } else {
        if (!s(x[w])) {
          d(x, w, E)
        }
      }
    }
    f(x, I, true, true)
    if (o) {
      g[I] = E
    }
  }
  if (a$PROPER && h === Values && R && R.name !== Values) {
    if (!o && a$CONFIGURABLE) {
      p(e$prototype, "name", Values)
    } else {
      N = true
      L = function () {
        return i(R, this)
      }
    }
  }
  if (h) {
    j = {
      values: C(Values),
      keys: m ? L : C(S),
      entries: C(Entries)
    }
    if (T) {
      for (P in j) if (m$BUGGY_SAFARI_ITERATORS || N || !(P in e$prototype)) {
        d(e$prototype, P, j[P])
      }
    } else {
      r({
        target: t,
        proto: true,
        forced: m$BUGGY_SAFARI_ITERATORS || N
      }, j)
    }
  }
  if (!(o && !T || e$prototype[w] === L)) {
    d(e$prototype, w, L, {
      name: h
    })
  }
  g[t] = L
  return j
}
