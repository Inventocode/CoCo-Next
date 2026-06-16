/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：274
 */

"use strict"

var r = require(/* 6 */"../../275/6")
var i = require(/* 118 */"../../237/118")
var o = require(/* 14 */"../../228/14")
var a = require(/* 173 */"../../275/276/172/173")
var s = require(/* 40 */"../../209/143/40")
var u = require(/* 71 */"../../280/281/71")
var c = require(/* 75 */"../../275/75")
var /* [auto-meaningful-name] */r$Function = r.Function
var f = /MSIE .\./.test(s) || "BUN" === a && function () {
  var e = r.Bun.version.split(".")
  return e.length < 3 || "0" === e[0] && (e[1] < 3 || "3" === e[1] && "0" === e[2])
}()
module.exports = function (e, t) {
  var n = t ? 2 : 1
  return f ? function (r, a) {
    var s = c(arguments.length, 1) > n
    var f = o(r) ? r : r$Function(r)
    var p = s ? u(arguments, n) : []
    var d = s ? function () {
      i(f, this, p)
    } : f
    return t ? e(d, a) : e(d)
  } : e
}
