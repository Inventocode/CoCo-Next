/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1684
 */

"use strict"

var r = require("../1623/86")
var require$$1659386Index$f = require("../1659/386/index").f
var i = require("../1735/257")
var a = require("../1745/310")
var s = require("./1075")
var c = require("../1675/421")
var l = require("./1076")
var u = require("./530")
var $startsWith = "".startsWith
var math$min = Math.min
var f = l("startsWith")
r({
  target: "String",
  proto: true,
  forced: !(!u && !f && !!function () {
    var e = require$$1659386Index$f(String.prototype, "startsWith")
    return e && !e.writable
  }()) && !f
}, {
  startsWith: function (e) {
    var t = a(c(this))
    s(e)
    var n = i(math$min(arguments.length > 1 ? arguments[1] : undefined, t.length))
    var r = a(e)
    return $startsWith ? $startsWith.call(t, r, n) : t.slice(n, n + r.length) === r
  }
})
