/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：759
 */

"use strict"

var r = require("../1282/476")
var o = require("../1662/300/index")
var i = require("../1282/246/index")
var a = require("../1662/271")
var s = i("species")
module.exports = function (e) {
  var t = r(e)
  var n = o.f
  if (a && t && !t[s]) {
    n(t, s, {
      configurable: true,
      get: function () {
        return this
      }
    })
  }
}
