/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1622
 */

"use strict"

var r = require("../1698/86/index")
var o = require("../1541/272")
var i = require("./942")
var a = require("../1541/309")
var s = require("../1564/439")
var c = require("../1541/300/index")
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __defineGetter__: function (e, t) {
      c.f(a(this), e, {
        get: s(t),
        enumerable: true,
        configurable: true
      })
    }
  })
}
