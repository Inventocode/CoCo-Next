/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1676
 */

"use strict"

var r = require("./1705/86/index")
var o = require("./1699/271")
var i = require("./1662/955")
var a = require("./1581/309")
var s = require("./1696/632")
var c = require("./1705/497")
var /* [auto-meaningful-name] */require$_1705_386$f = require("./1705/386").f
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
        if (t = require$_1705_386$f(n, r)) {
          return t.get
        }
      } while (n = c(n))
    }
  })
}
