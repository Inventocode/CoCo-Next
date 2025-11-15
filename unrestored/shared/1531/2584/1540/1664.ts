/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1664
 */

var r = require("./1698/86/index")
var o = require("./1541/472")
var i = require("./1541/241")
r({
  target: "Reflect",
  stat: true,
  sham: !require("./1625/826")
}, {
  preventExtensions: function (e) {
    i(e)
    try {
      var t = o("Object", "preventExtensions")
      if (t) {
        t(e)
      }
      return true
    } catch (n) {
      return false
    }
  }
})
