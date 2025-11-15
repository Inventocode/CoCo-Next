/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1636
 */

"use strict"

var r = require("./1698/86/index")
var o = require("./1541/272")
var i = require("./1622/942")
var a = require("./1541/309")
var s = require("./1541/628")
var c = require("./1585/495")
var /* [auto-meaningful-name] */require$_1684_386$f = require("./1684/386").f
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
        if (t = require$_1684_386$f(n, r)) {
          return t.get
        }
      } while (n = c(n))
    }
  })
}
