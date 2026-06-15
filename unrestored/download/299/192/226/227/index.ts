/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：227
 */

"use strict"

var r = require(/* 43 */"../../204/142/43")
var i = require(/* 20 */"../../288/20/index")
var o = require(/* 27 */"../../225/27")
var a = require(/* 62 */"../../263/49/62")
var s = require(/* 115 */"./115")
var u = require(/* 31 */"../../204/31")
var c = require(/* 45 */"../../233/45")
var l = require(/* 87 */"./87")
var f = require(/* 74 */"./74")
var p = require(/* 152 */"./152")
var d = TypeError
var h = function (e, t) {
  this.stopped = e
  this.result = t
}
var /* [auto-meaningful-name] */h$prototype = h.prototype
module.exports = function (e, t, n) {
  var m
  var v
  var y
  var _
  var b
  var w
  var S
  var k = n && n.that
  var O = !(!n || !n.AS_ENTRIES)
  var E = !(!n || !n.IS_RECORD)
  var T = !(!n || !n.IS_ITERATOR)
  var x = !(!n || !n.INTERRUPTED)
  var j = r(t, k)
  var P = function (e) {
    if (m) {
      p(m, "normal")
    }
    return new h(true, e)
  }
  var C = function (e) {
    return O ? (o(e), x ? j(e[0], e[1], P) : j(e[0], e[1])) : x ? j(e, P) : j(e)
  }
  if (E) {
    m = e.iterator
  } else if (T) {
    m = e
  } else {
    if (!(v = f(e))) {
      throw new d(a(e) + " is not iterable")
    }
    if (s(v)) {
      for (y = 0, _ = u(e); _ > y; y++) {
        if ((b = C(e[y])) && c(h$prototype, b)) {
          return b
        }
      }
      return new h(false)
    }
    m = l(e, v)
  }
  for (w = E ? e.next : m.next; !(S = i(w, m)).done;) {
    try {
      b = C(S.value)
    } catch (I) {
      p(m, "throw", I)
    }
    if ("object" == typeof b && b && c(h$prototype, b)) {
      return b
    }
  }
  return new h(false)
}
