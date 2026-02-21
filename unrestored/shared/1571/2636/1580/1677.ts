/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1677
 */

"use strict"

var r = require("./1662/86")
var o = require("./1662/271")
var i = require("./1662/955")
var a = require("./1662/309")
var s = require("./1581/632")
var c = require("./1625/497")
var /* [auto-meaningful-name] */require$_1581_386$f = require("./1581/386").f
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __lookupSetter__: function (e) {
      var t
      var n = a(this)
      var r = s(e)
      do {
        if (t = require$_1581_386$f(n, r)) {
          return t.set
        }
      } while (n = c(n))
    }
  })
}
