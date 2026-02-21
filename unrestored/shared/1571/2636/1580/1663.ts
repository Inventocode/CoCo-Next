/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1663
 */

"use strict"

var r = require("./1662/86")
var o = require("./1662/271")
var i = require("./1662/955")
var a = require("./1662/309")
var s = require("./1662/443")
var c = require("./1662/300/index")
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __defineSetter__: function (e, t) {
      c.f(a(this), e, {
        set: s(t),
        enumerable: true,
        configurable: true
      })
    }
  })
}
