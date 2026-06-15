/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：238
 */

"use strict"

require(/* 160 */"../160/index")
var r = require(/* 20 */"../288/20/index")
var i = require(/* 34 */"../228/34/index")
var o = require(/* 117 */"../160/117/index")
var a = require(/* 9 */"../275/9")
var s = require(/* 18 */"../233/18/index")
var u = require(/* 42 */"../233/42")
var c = s("species")
var /* [auto-meaningful-name] */RegExp$prototype = RegExp.prototype
module.exports = function (e, t, n, f) {
  var p = s(e)
  var d = !a(function () {
    var t = {}
    t[p] = function () {
      return 7
    }
    return 7 !== ""[e](t)
  })
  var h = d && !a(function () {
    var t = false
    var n = /a/
    if ("split" === e) {
      (n = {}).constructor = {}
      n.constructor[c] = function () {
        return n
      }
      n.flags = ""
      n[p] = /./[p]
    }
    n.exec = function () {
      t = true
      return null
    }
    n[p]("")
    return !t
  })
  if (!d || !h || n) {
    var g = /./[p]
    var m = t(p, ""[e], function (e, t, n, i, a) {
      var /* [auto-meaningful-name] */t$exec = t.exec
      return t$exec === o || t$exec === RegExp$prototype.exec ? d && !a ? {
        done: true,
        value: r(g, t, n, i)
      } : {
        done: true,
        value: r(e, n, t, i)
      } : {
        done: false
      }
    })
    i(String.prototype, e, m[0])
    i(RegExp$prototype, p, m[1])
  }
  if (f) {
    u(RegExp$prototype[p], "sham", true)
  }
}
