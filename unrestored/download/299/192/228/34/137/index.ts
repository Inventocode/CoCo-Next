/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：137
 */

"use strict"

var r = require(/* 10 */"../../../208/10")
var i = require(/* 9 */"../../../275/9")
var o = require(/* 14 */"../../14")
var a = require(/* 24 */"../../../233/24")
var s = require(/* 16 */"../../../275/16")
var /* [auto-meaningful-name] */require_83_$$_$$_$$_215_112_83$CONFIGURABLE = require(/* 83 */"../../../215/112/83").CONFIGURABLE
var c = require(/* 138 */"./138")
var l = require(/* 35 */"../../../233/35/index")
var /* [auto-meaningful-name] */l$enforce = l.enforce
var /* [auto-meaningful-name] */l$get = l.get
var d = String
var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
var g = r("".slice)
var m = r("".replace)
var v = r([].join)
var y = s && !i(function () {
  return 8 !== Object$defineProperty(function () {}, "length", {
    value: 8
  }).length
})
var _ = String(String).split("String")
var b = module.exports = function (e, t, n) {
  if ("Symbol(" === g(d(t), 0, 7)) {
    t = "[" + m(d(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"
  }
  if (n && n.getter) {
    t = "get " + t
  }
  if (n && n.setter) {
    t = "set " + t
  }
  if (!a(e, "name") || require_83_$$_$$_$$_215_112_83$CONFIGURABLE && e.name !== t) {
    if (s) {
      Object$defineProperty(e, "name", {
        value: t,
        configurable: true
      })
    } else {
      e.name = t
    }
  }
  if (y && n && a(n, "arity") && e.length !== n.arity) {
    Object$defineProperty(e, "length", {
      value: n.arity
    })
  }
  try {
    if (n && a(n, "constructor") && n.constructor) {
      if (s) {
        Object$defineProperty(e, "prototype", {
          writable: false
        })
      }
    } else {
      if (e.prototype) {
        e.prototype = undefined
      }
    }
  } catch (i) {}
  var r = l$enforce(e)
  if (!a(r, "source")) {
    r.source = v(_, "string" == typeof t ? t : "")
  }
  return e
}
Function.prototype.toString = b(function () {
  return o(this) && l$get(this).source || c(this)
}, "toString")
