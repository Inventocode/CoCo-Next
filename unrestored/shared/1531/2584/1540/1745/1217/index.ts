/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1217
 */

"use strict"

var r = require("../../1253/632")
var o = require("../../1623/309")
var i = require("./1566")
var a = require("../../1720/1249/1064")
var s = require("../../1735/257")
var c = require("../../1557/707")
var l = require("../../1253/934")
var u = require("../../1253/824")
module.exports = function (e) {
  var t
  var n
  var d
  var p
  var /* [auto-meaningful-name] */pLMY$next
  var h
  var m = o(e)
  var g = "function" == typeof this ? this : Array
  var arguments$length = arguments.length
  var v = arguments$length > 1 ? arguments[1] : undefined
  var b = undefined !== v
  var y = u(m)
  var E = 0
  if (b) {
    v = r(v, arguments$length > 2 ? arguments[2] : undefined, 2)
  }
  if (undefined == y || g == Array && a(y)) {
    for (n = new g(t = s(m.length)); t > E; E++) {
      h = b ? v(m[E], E) : m[E]
      c(n, E, h)
    }
  } else {
    for (pLMY$next = (p = l(m, y)).next, n = new g(); !(d = pLMY$next.call(p)).done; E++) {
      h = b ? i(p, v, [d.value, E], true) : d.value
      c(n, E, h)
    }
  }
  n.length = E
  return n
}
