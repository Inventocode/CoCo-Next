/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1672
 */

"use strict"

var r = require("./1698/86/index")
var /* [auto-meaningful-name] */require$_1684_386$f = require("./1684/386").f
var i = require("./1684/257")
var a = require("./1684/310")
var s = require("./1684/1075")
var c = require("./1684/421")
var l = require("./1684/1076")
var u = require("./1684/530")
var /* [auto-meaningful-name] */$endsWith = "".endsWith
var /* [auto-meaningful-name] */Math$min = Math.min
var f = l("endsWith")
r({
  target: "String",
  proto: true,
  forced: !(!u && !f && !!function () {
    var e = require$_1684_386$f(String.prototype, "endsWith")
    return e && !e.writable
  }()) && !f
}, {
  endsWith: function (e) {
    var t = a(c(this))
    s(e)
    var n = arguments.length > 1 ? arguments[1] : undefined
    var r = i(t.length)
    var o = undefined === n ? r : Math$min(i(n), r)
    var l = a(e)
    return $endsWith ? $endsWith.call(t, l, o) : t.slice(o - l.length, o) === l
  }
})
