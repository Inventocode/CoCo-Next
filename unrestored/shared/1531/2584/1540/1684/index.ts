/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1684
 */

"use strict"

var r = require("../1698/86/index")
var /* [auto-meaningful-name] */require$_386$f = require("./386").f
var i = require("./257")
var a = require("./310")
var s = require("./1075")
var c = require("./421")
var l = require("./1076")
var u = require("./530")
var /* [auto-meaningful-name] */$startsWith = "".startsWith
var /* [auto-meaningful-name] */Math$min = Math.min
var f = l("startsWith")
r({
  target: "String",
  proto: true,
  forced: !(!u && !f && !!function () {
    var e = require$_386$f(String.prototype, "startsWith")
    return e && !e.writable
  }()) && !f
}, {
  startsWith: function (e) {
    var t = a(c(this))
    s(e)
    var n = i(Math$min(arguments.length > 1 ? arguments[1] : undefined, t.length))
    var r = a(e)
    return $startsWith ? $startsWith.call(t, r, n) : t.slice(n, n + r.length) === r
  }
})
