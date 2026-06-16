/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：175
 */

"use strict"

var r = require(/* 9 */"../../275/9")
var i = require(/* 18 */"../../233/18/index")
var o = require(/* 16 */"../../275/16")
var a = require(/* 63 */"../../228/63")
var s = i("iterator")
module.exports = !r(function () {
  var e = new URL("b?a=1&b=2&c=3", "https://a")
  var /* [auto-meaningful-name] */e$searchParams = e.searchParams
  var n = new URLSearchParams("a=1&a=2&b=3")
  var r = ""
  e.pathname = "c%20d"
  e$searchParams.forEach(function (e, n) {
    e$searchParams.delete("b")
    r += n + e
  })
  n.delete("a", 2)
  n.delete("b", undefined)
  return a && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", undefined) || n.has("b")) || !e$searchParams.size && (a || !o) || !e$searchParams.sort || "https://a/c%20d?a=1&c=3" !== e.href || "3" !== e$searchParams.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e$searchParams[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== r || "x" !== new URL("https://x", undefined).host
})
