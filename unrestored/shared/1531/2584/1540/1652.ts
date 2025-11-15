/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1652
 */

"use strict"

var r = require("./1698/86/index")
var o = require("./1684/530")
var i = require("./1646/1236")
var a = require("./1541/167")
var s = require("./1541/472")
var c = require("./1646/943")
var l = require("./1646/1239")
var u = require("./1541/398")
r({
  target: "Promise",
  proto: true,
  real: true,
  forced: !!i && a(function () {
    i.prototype.finally.call({
      then: function () {}
    }, function () {})
  })
}, {
  finally: function (e) {
    var t = c(this, s("Promise"))
    var n = "function" == typeof e
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
if (!o && "function" == typeof i) {
  var /* [auto-meaningful-name] */sPromise$prototype$finally = s("Promise").prototype.finally
  if (i.prototype.finally !== sPromise$prototype$finally) {
    u(i.prototype, "finally", sPromise$prototype$finally, {
      unsafe: true
    })
  }
}
