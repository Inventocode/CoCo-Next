/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：951
 */

"use strict"

var r = require("../1705/86/index")
var o = require("../1686/194")
var i = require("../1686/829")
var a = require("../1692/400")
var s = require("../1778/718")
var c = require("../1686/838/index")
var l = require("../1686/639")
var u = require("../1705/231")
var d = require("../1705/168")
var p = require("../1686/948")
var f = require("../1686/534")
var h = require("../1648/952")
module.exports = function (e, t, n) {
  var m = -1 !== e.indexOf("Map")
  var g = -1 !== e.indexOf("Weak")
  var _ = m ? "set" : "add"
  var v = o[e]
  var b = v && v.prototype
  var y = v
  var E = {}
  var O = function (e) {
    var t = b[e]
    a(b, e, "add" == e ? function (e) {
      t.call(this, 0 === e ? 0 : e)
      return this
    } : "delete" == e ? function (e) {
      return !(g && !u(e)) && t.call(this, 0 === e ? 0 : e)
    } : "get" == e ? function (e) {
      return g && !u(e) ? undefined : t.call(this, 0 === e ? 0 : e)
    } : "has" == e ? function (e) {
      return !(g && !u(e)) && t.call(this, 0 === e ? 0 : e)
    } : function (e, n) {
      t.call(this, 0 === e ? 0 : e, n)
      return this
    })
  }
  if (i(e, "function" != typeof v || !(g || b.forEach && !d(function () {
    new v().entries().next()
  })))) {
    y = n.getConstructor(t, e, m, _)
    s.enable()
  } else if (i(e, true)) {
    var w = new y()
    var C = w[_](g ? {} : -0, 1) != w
    var T = d(function () {
      w.has(1)
    })
    var S = p(function (e) {
      new v(e)
    })
    var A = !g && d(function () {
      for (var e = new v(), t = 5; t--;) {
        e[_](t, t)
      }
      return !e.has(-0)
    })
    if (!S) {
      (y = t(function (t, n) {
        l(t, y, e)
        var r = h(new v(), t, y)
        if (undefined != n) {
          c(n, r[_], {
            that: r,
            AS_ENTRIES: m
          })
        }
        return r
      })).prototype = b
      b.constructor = y
    }
    if (T || A) {
      O("delete")
      O("has")
      if (m) {
        O("get")
      }
    }
    if (A || C) {
      O(_)
    }
    if (g && b.clear) {
      delete b.clear
    }
  }
  E[e] = y
  r({
    global: true,
    forced: y != v
  }, E)
  f(y, e)
  if (!g) {
    n.setStrong(y, e, m)
  }
  return y
}
