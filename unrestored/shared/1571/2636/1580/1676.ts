/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1676
 */

"use strict"

var r = require("./1661/86/index")
var o = require("./1785/271")
var i = require("./1677/955")
var a = require("./1771/309")
var s = require("./1581/632")
var c = require("./1625/497")
var /* [auto-meaningful-name] */require$_1648_386_index$f = require("./1648/386/index").f
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __lookupGetter__: function (e) {
      var t
      var n = a(this)
      var r = s(e)
      do {
        if (t = require$_1648_386_index$f(n, r)) {
          return t.get
        }
      } while (n = c(n))
    }
  })
}
