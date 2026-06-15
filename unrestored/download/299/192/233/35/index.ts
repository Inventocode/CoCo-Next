/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：35
 */

"use strict"

var r
var i
var o
var a = require(/* 195 */"./195")
var s = require(/* 6 */"../../275/6")
var u = require(/* 26 */"../../237/26")
var c = require(/* 42 */"../42")
var l = require(/* 24 */"../24")
var f = require(/* 98 */"./98")
var p = require(/* 101 */"../55/101")
var d = require(/* 102 */"../55/102")
var /* [auto-meaningful-name] */ObjectAlreadyInitialized = "Object already initialized"
var /* [auto-meaningful-name] */s$TypeError = s.TypeError
var /* [auto-meaningful-name] */s$WeakMap = s.WeakMap
if (a || f.state) {
  var v = f.state || (f.state = new s$WeakMap())
  v.get = v.get
  v.has = v.has
  v.set = v.set
  r = function (e, t) {
    if (v.has(e)) {
      throw new s$TypeError(ObjectAlreadyInitialized)
    }
    t.facade = e
    v.set(e, t)
    return t
  }
  i = function (e) {
    return v.get(e) || {}
  }
  o = function (e) {
    return v.has(e)
  }
} else {
  var y = p("state")
  d[y] = true
  r = function (e, t) {
    if (l(e, y)) {
      throw new s$TypeError(ObjectAlreadyInitialized)
    }
    t.facade = e
    c(e, y, t)
    return t
  }
  i = function (e) {
    return l(e, y) ? e[y] : {}
  }
  o = function (e) {
    return l(e, y)
  }
}
module.exports = {
  set: r,
  get: i,
  has: o,
  enforce: function (e) {
    return o(e) ? i(e) : r(e, {})
  },
  getterFor: function (e) {
    return function (t) {
      var n
      if (!u(t) || (n = i(t)).type !== e) {
        throw new s$TypeError("Incompatible receiver, " + e + " required")
      }
      return n
    }
  }
}
