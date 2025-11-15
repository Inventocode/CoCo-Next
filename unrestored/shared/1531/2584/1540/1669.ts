/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1669
 */

"use strict"

var r = require("./1541/398")
var o = require("./1541/241")
var i = require("./1684/310")
var a = require("./1541/167")
var s = require("./1667/944")
var /* [auto-meaningful-name] */RegExp$prototype = RegExp.prototype
var /* [auto-meaningful-name] */RegExp$prototype$toString = RegExp$prototype.toString
var u = a(function () {
  return "/a/b" != RegExp$prototype$toString.call({
    source: "a",
    flags: "b"
  })
})
var d = "toString" != RegExp$prototype$toString.name
if (u || d) {
  r(RegExp.prototype, "toString", function () {
    var e = o(this)
    var t = i(e.source)
    var /* [auto-meaningful-name] */e$flags = e.flags
    return "/" + t + "/" + i(undefined === e$flags && e instanceof RegExp && !("flags" in RegExp$prototype) ? s.call(e) : e$flags)
  }, {
    unsafe: true
  })
}
