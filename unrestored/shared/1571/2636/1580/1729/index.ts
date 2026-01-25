/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1729
 */

"use strict"

var r = require("../1706/86/index")
var o = require("./444")
r({
  target: "String",
  proto: true,
  forced: require("./445")("big")
}, {
  big: function () {
    return o(this, "big", "", "")
  }
})
