/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：827
 */

var r = require("../../1659/241")
var o = require("../../1720/1249/1064")
var i = require("../../1735/257")
var a = require("../../1253/632")
var s = require("../../1253/934")
var c = require("../../1253/824")
var l = require("./1218")
var u = function (e, t) {
  this.stopped = e
  this.result = t
}
module.exports = function (e, t, n) {
  var d
  var p
  var f
  var h
  var m
  var /* [auto-meaningful-name] */d$next
  var _
  var v = n && n.that
  var b = !(!n || !n.AS_ENTRIES)
  var y = !(!n || !n.IS_ITERATOR)
  var E = !(!n || !n.INTERRUPTED)
  var O = a(t, v, 1 + b + E)
  var w = function (e) {
    if (d) {
      l(d, "normal", e)
    }
    return new u(true, e)
  }
  var C = function (e) {
    return b ? (r(e), E ? O(e[0], e[1], w) : O(e[0], e[1])) : E ? O(e, w) : O(e)
  }
  if (y) {
    d = e
  } else {
    if ("function" != typeof (p = c(e))) {
      throw TypeError("Target is not iterable")
    }
    if (o(p)) {
      for (f = 0, h = i(e.length); h > f; f++) {
        if ((m = C(e[f])) && m instanceof u) {
          return m
        }
      }
      return new u(false)
    }
    d = s(e, p)
  }
  for (d$next = d.next; !(_ = d$next.call(d)).done;) {
    try {
      m = C(_.value)
    } catch (T) {
      l(d, "throw", T)
    }
    if ("object" == typeof m && m && m instanceof u) {
      return m
    }
  }
  return new u(false)
}
