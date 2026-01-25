/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1700
 */

var r = require("../1706/86/index")
var o = require("../1706/240")
var i = require("../1705/497")
r({
  target: "Reflect",
  stat: true,
  sham: !require("./1088")
}, {
  getPrototypeOf: function (e) {
    return i(o(e))
  }
})
