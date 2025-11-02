/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1680
 */

"use strict"

var r = require("../1675/947")
var o = require("../1736/167")
var i = require("../1659/241")
var a = require("./473")
var s = require("../1735/257")
var c = require("../1745/310")
var l = require("../1675/421")
var u = require("../1675/1077")
var d = require("./1681")
var p = require("../1675/948")
var f = require("../1742/247/index")("replace")
var math$max = Math.max
var math$min = Math.min
var g = "$0" === "a".replace(/./, "$0")
var _ = !!/./[f] && "" === /./[f]("a", "$0")
r("replace", function (e, t, n) {
  var r = _ ? "$" : "$0"
  return [function (e, n) {
    var r = l(this)
    var o = undefined == e ? undefined : e[f]
    return undefined !== o ? o.call(e, r, n) : t.call(c(r), e, n)
  }, function (e, o) {
    var l = i(this)
    var f = c(e)
    if ("string" === typeof o && -1 === o.indexOf(r) && -1 === o.indexOf("$<")) {
      var g = n(t, l, f, o)
      if (g.done) {
        return g.value
      }
    }
    var _ = "function" === typeof o
    if (!_) {
      o = c(o)
    }
    var l$global = l.global
    if (l$global) {
      var l$unicode = l.unicode
      l.lastIndex = 0
    }
    for (var y = [];;) {
      var E = p(l, f)
      if (null === E) {
        break
      }
      y.push(E)
      if (!l$global) {
        break
      }
      if ("" === c(E[0])) {
        l.lastIndex = u(f, s(l.lastIndex), l$unicode)
      }
    }
    for (var O, w = "", C = 0, T = 0; T < y.length; T++) {
      E = y[T]
      for (var S = c(E[0]), I = math$max(math$min(a(E.index), f.length), 0), A = [], j = 1; j < E.length; j++) {
        A.push(undefined === (O = E[j]) ? O : String(O))
      }
      var e$groups = E.groups
      if (_) {
        var R = [S].concat(A, I, f)
        if (undefined !== e$groups) {
          R.push(e$groups)
        }
        var k = c(o.apply(undefined, R))
      } else {
        k = d(S, f, I, A, e$groups, o)
      }
      if (I >= C) {
        w += f.slice(C, I) + k
        C = I + S.length
      }
    }
    return w + f.slice(C)
  }]
}, !!o(function () {
  var e = /./
  e.exec = function () {
    var e = []
    e.groups = {
      a: "7"
    }
    return e
  }
  return "7" !== "".replace(e, "$<a>")
}) || !g || _)
