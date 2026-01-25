/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1087
 */

"use strict"

var r = require("../../1706/86/index")
var o = require("../../1282/1248")
var i = require("../../1705/497")
var a = require("../../1706/638")
var s = require("../../1686/534")
var c = require("../../1581/425")
var l = require("../../1692/400")
var u = require("../../1686/246/index")
var d = require("../../1692/533")
var p = require("../834")
var f = require("./1249")
var /* [auto-meaningful-name] */f$IteratorPrototype = f.IteratorPrototype
var /* [auto-meaningful-name] */f$BUGGY_SAFARI_ITERATORS = f.BUGGY_SAFARI_ITERATORS
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
    if (e === f && I) {
      return I
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
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  var A = e$prototype[g] || e$prototype["@@iterator"] || f && e$prototype[f]
  var I = !f$BUGGY_SAFARI_ITERATORS && A || w(f)
  var j = "Array" == t && e$prototype.entries || A
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
  if ("values" == f && A && "values" !== A.name) {
    T = true
    I = function () {
      return A.call(this)
    }
  }
  if (!(d && !b || e$prototype[g] === I)) {
    c(e$prototype, g, I)
  }
  p[t] = I
  if (f) {
    E = {
      values: w("values"),
      keys: v ? I : w("keys"),
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
