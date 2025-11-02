/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1669
 */

"use strict"

var r = require("./1745/398/index")
var o = require("./1659/241")
var i = require("./1745/310")
var a = require("./1736/167")
var s = require("./1668/944")
var regExp$prototype = RegExp.prototype
var regExp$prototype$toString = regExp$prototype.toString
var u = a(function () {
  return "/a/b" != regExp$prototype$toString.call({
    source: "a",
    flags: "b"
  })
})
var d = "toString" != regExp$prototype$toString.name
if (u || d) {
  r(RegExp.prototype, "toString", function () {
    var e = o(this)
    var t = i(e.source)
    var e$flags = e.flags
    return "/" + t + "/" + i(undefined === e$flags && e instanceof RegExp && !("flags" in regExp$prototype) ? s.call(e) : e$flags)
  }, {
    unsafe: true
  })
}
