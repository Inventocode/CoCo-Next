/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1736
 */

"use strict"

var r = require("./1705/86/index")
var o = require("./1729/444")
r({
  target: "String",
  proto: true,
  forced: require("./1729/445")("link")
}, {
  link: function (e) {
    return o(this, "a", "href", e)
  }
})
