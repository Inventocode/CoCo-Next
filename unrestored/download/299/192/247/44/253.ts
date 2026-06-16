/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：253
 */

"use strict"

var r = require(/* 43 */"../../204/142/43")
var i = require(/* 10 */"../../208/10")
var o = require(/* 93 */"../../268/167/70/93")
var a = require(/* 29 */"../../204/29")
var s = require(/* 31 */"../../204/31")
var u = require(/* 108 */"../../204/108/index")
var c = i([].push)
var l = function (e) {
  var t = 1 === e
  var n = 2 === e
  var i = 3 === e
  var l = 4 === e
  var f = 6 === e
  var p = 7 === e
  var d = 5 === e || f
  return function (h, g, m, v) {
    for (var y, _, b = a(h), w = o(b), S = s(w), k = r(g, m), O = 0, E = v || u, T = t ? E(h, S) : n || p ? E(h, 0) : undefined; S > O; O++) {
      if ((d || O in w) && (_ = k(y = w[O], O, b), e)) {
        if (t) {
          T[O] = _
        } else if (_) {
          switch (e) {
            case 3:
              return true
            case 5:
              return y
            case 6:
              return O
            case 2:
              c(T, y)
          }
        } else {
          switch (e) {
            case 4:
              return false
            case 7:
              c(T, y)
          }
        }
      }
    }
    return f ? -1 : i || l ? l : T
  }
}
module.exports = {
  forEach: l(0),
  map: l(1),
  filter: l(2),
  some: l(3),
  every: l(4),
  find: l(5),
  findIndex: l(6),
  filterReject: l(7)
}
