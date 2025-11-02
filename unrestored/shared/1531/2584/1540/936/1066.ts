/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1066
 */

"use strict"

var r = require("../1623/86")
var o = require("../1253/1219/index")
var i = require("../1660/495")
var a = require("../1666/634")
var s = require("../1745/531")
var c = require("../1740/422")
var l = require("../1745/398/index")
var u = require("../1742/247/index")
var d = require("../1684/530")
var p = require("./823")
var f = require("../1253/1219/1220")
var f$IteratorPrototype = f.IteratorPrototype
var f$BUGGY_SAFARI_ITERATORS = f.BUGGY_SAFARI_ITERATORS
var g = u("iterator")
var _ = function () {
  return this
}
module.exports = function (e, t, n, u, f, v, b) {
  o(n, t, u)
  var y
  var E
  var O
  var w = function (e) {
    if (e === f && A) {
      return A
    }
    if (!f$BUGGY_SAFARI_ITERATORS && e in e$prototype) {
      return e$prototype[e]
    }
    switch (e) {
      case "keys":
      case "values":
      case "entries":
        return function () {
          return new n(this, e)
        }
    }
    return function () {
      return new n(this)
    }
  }
  var C = t + " Iterator"
  var T = false
  var e$prototype = e.prototype
  var I = e$prototype[g] || e$prototype["@@iterator"] || f && e$prototype[f]
  var A = !f$BUGGY_SAFARI_ITERATORS && I || w(f)
  var j = "Array" == t && e$prototype.entries || I
  if (j) {
    y = i(j.call(new e()))
    if (f$IteratorPrototype !== Object.prototype && y.next) {
      if (!(d || i(y) === f$IteratorPrototype)) {
        if (a) {
          a(y, f$IteratorPrototype)
        } else {
          if ("function" != typeof y[g]) {
            c(y, g, _)
          }
        }
      }
      s(y, C, true, true)
      if (d) {
        p[C] = _
      }
    }
  }
  if ("values" == f && I && "values" !== I.name) {
    T = true
    A = function () {
      return I.call(this)
    }
  }
  if (!(d && !b || e$prototype[g] === A)) {
    c(e$prototype, g, A)
  }
  p[t] = A
  if (f) {
    E = {
      values: w("values"),
      keys: v ? A : w("keys"),
      entries: w("entries")
    }
    if (b) {
      for (O in E) if (f$BUGGY_SAFARI_ITERATORS || T || !(O in e$prototype)) {
        l(e$prototype, O, E[O])
      }
    } else {
      r({
        target: t,
        proto: true,
        forced: f$BUGGY_SAFARI_ITERATORS || T
      }, E)
    }
  }
  return E
}
