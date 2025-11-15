/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1660
 */

var r = require("./1698/86/index")
var o = require("./1541/241")
var i = require("./1585/495")
r({
  target: "Reflect",
  stat: true,
  sham: !require("./1630/1067")
}, {
  getPrototypeOf: function (e) {
    return i(o(e))
  }
})
