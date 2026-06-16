/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：237
 */

"use strict"

var r = require(/* 118 */"./118")
var i = require(/* 20 */"../288/20/index")
var o = require(/* 10 */"../208/10")
var a = require(/* 238 */"./238")
var s = require(/* 9 */"../275/9")
var u = require(/* 27 */"../225/27")
var c = require(/* 14 */"../228/14")
var l = require(/* 26 */"./26")
var f = require(/* 46 */"../204/46/index")
var p = require(/* 64 */"../225/64")
var d = require(/* 36 */"../209/36")
var h = require(/* 61 */"./61")
var g = require(/* 239 */"./239")
var m = require(/* 81 */"./81")
var v = require(/* 240 */"./240")
var y = require(/* 155 */"../233/155")
var _ = require(/* 241 */"./241")
var b = require(/* 18 */"../233/18/index")("replace")
var /* [auto-meaningful-name] */Math$max = Math.max
var /* [auto-meaningful-name] */Math$min = Math.min
var k = o([].concat)
var O = o([].push)
var E = o("".indexOf)
var T = o("".slice)
var x = "$0" === "a".replace(/./, "$0")
var j = !!/./[b] && "" === /./[b]("a", "$0")
a("replace", function (e, t, n) {
  var o = j ? "$" : "$0"
  return [
    function (e, n) {
      var r = h(this)
      var o = l(e) ? m(e, b) : undefined
      return o ? i(o, e, r, n) : i(t, d(r), e, n)
    }, function (e, i) {
      var a = u(this)
      var s = d(e)
      if ("string" == typeof i && -1 === E(i, o) && -1 === E(i, "$<")) {
        var l = n(t, a, s, i)
        if (l.done) {
          return l.value
        }
      }
      var h = c(i)
      if (!h) {
        i = d(i)
      }
      var m
      var b = d(y(a))
      var x = -1 !== E(b, "g")
      if (x) {
        m = -1 !== E(b, "u")
        a.lastIndex = 0
      }
      for (var j, P = []; null !== (j = _(a, s)) && (O(P, j), x);) {
        if ("" === d(j[0])) {
          a.lastIndex = g(s, p(a.lastIndex), m)
        }
      }
      for (var C, I = "", N = 0, A = 0; A < P.length; A++) {
        for (var R, L = d((j = P[A])[0]), D = Math$max(Math$min(f(j.index), s.length), 0), M = [], U = 1; U < j.length; U++) {
          O(M, undefined === (C = j[U]) ? C : String(C))
        }
        var /* [auto-meaningful-name] */j$groups = j.groups
        if (h) {
          var H = k([L], M, D, s)
          if (undefined !== j$groups) {
            O(H, j$groups)
          }
          R = d(r(i, undefined, H))
        } else {
          R = v(L, s, D, M, j$groups, i)
        }
        if (D >= N) {
          I += T(s, N, D) + R
          N = D + L.length
        }
      }
      return I + T(s, N)
    }
  ]
}, !!s(function () {
  var e = /./
  e.exec = function () {
    var e = []
    e.groups = {
      a: "7"
    }
    return e
  }
  return "7" !== "".replace(e, "$<a>")
}) || !x || j)
