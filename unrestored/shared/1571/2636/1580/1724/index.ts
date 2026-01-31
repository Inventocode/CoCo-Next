/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1724
 */

"use strict"

var r = require("../1661/86/index")
var /* [auto-meaningful-name] */require$$_1648_386_index$f = require("../1648/386/index").f
var i = require("../1775/256")
var a = require("../1785/310")
var s = require("./1096")
var c = require("../1723/424")
var l = require("./1097")
var u = require("../1581/533")
var /* [auto-meaningful-name] */$startsWith = "".startsWith
var /* [auto-meaningful-name] */Math$min = Math.min
var f = l("startsWith")
r({
  target: "String",
  proto: true,
  forced: !(!u && !f && !!function () {
    var e = require$$_1648_386_index$f(String.prototype, "startsWith")
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
