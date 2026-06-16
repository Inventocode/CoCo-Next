/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：156
 */

"use strict"

var r = require(/* 6 */"../275/6")
var i = require(/* 9 */"../275/9")
var /* [auto-meaningful-name] */r$RegExp = r.RegExp
var a = !i(function () {
  var e = true
  try {
    r$RegExp(".", "d")
  } catch (u) {
    e = false
  }
  var t = {}
  var n = ""
  var r = e ? "dgimsy" : "gimsy"
  var i = function (e, r) {
    Object.defineProperty(t, e, {
      get: function () {
        n += r
        return true
      }
    })
  }
  var a = {
    dotAll: "s",
    global: "g",
    ignoreCase: "i",
    multiline: "m",
    sticky: "y"
  }
  for (var s in e && (a.hasIndices = "d"), a) i(s, a[s])
  return Object.getOwnPropertyDescriptor(r$RegExp.prototype, "flags").get.call(t) !== r || n !== r
})
module.exports = {
  correct: a
}
