/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13
 */

"use strict"

var r = require(/* 6 */"../../275/6")
var /* [auto-meaningful-name] */require_92_$_92_index$f = require(/* 92 */"./92/index").f
var o = require(/* 42 */"../../233/42")
var a = require(/* 34 */"../../228/34/index")
var s = require(/* 99 */"./99")
var u = require(/* 103 */"../../193/103/index")
var c = require(/* 141 */"../../233/141")
module.exports = function (e, t) {
  var n
  var l
  var f
  var p
  var d
  var /* [auto-meaningful-name] */e$target = e.target
  var /* [auto-meaningful-name] */e$global = e.global
  var /* [auto-meaningful-name] */e$stat = e.stat
  if (n = e$global ? r : e$stat ? r[e$target] || s(e$target, {}) : r[e$target] && r[e$target].prototype) {
    for (l in t) {
      p = t[l]
      f = e.dontCallGetSet ? (d = require_92_$_92_index$f(n, l)) && d.value : n[l]
      if (!c(e$global ? l : e$target + (e$stat ? "." : "#") + l, e.forced) && undefined !== f) {
        if (typeof p == typeof f) {
          continue
        }
        u(p, f)
      }
      if (e.sham || f && f.sham) {
        o(p, "sham", true)
      }
      a(n, l, p, e)
    }
  }
}
