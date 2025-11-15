/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1662
 */

var r = require("./1698/86/index")
var o = require("./1541/241")
var /* [auto-meaningful-name] */Object$isExtensible = Object.isExtensible
r({
  target: "Reflect",
  stat: true
}, {
  isExtensible: function (e) {
    o(e)
    return !Object$isExtensible || Object$isExtensible(e)
  }
})
