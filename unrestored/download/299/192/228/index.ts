/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：228
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 63 */"./63")
var o = require(/* 229 */"./229")
var a = require(/* 9 */"../275/9")
var s = require(/* 54 */"./54")
var u = require(/* 14 */"./14")
var c = require(/* 230 */"./230/index")
var l = require(/* 231 */"./231/index")
var f = require(/* 34 */"./34/index")
var p = o && o.prototype
r({
  target: "Promise",
  proto: true,
  real: true,
  forced: !!o && a(function () {
    p.finally.call({
      then: function () {}
    }, function () {})
  })
}, {
  finally: function (e) {
    var t = c(this, s("Promise"))
    var n = u(e)
    return this.then(n ? function (n) {
      return l(t, e()).then(function () {
        return n
      })
    } : e, n ? function (n) {
      return l(t, e()).then(function () {
        throw n
      })
    } : e)
  }
})
if (!i && u(o)) {
  var /* [auto-meaningful-name] */sPromise$prototype$finally = s("Promise").prototype.finally
  if (p.finally !== sPromise$prototype$finally) {
    f(p, "finally", sPromise$prototype$finally, {
      unsafe: true
    })
  }
}
