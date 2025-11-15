/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1632
 */

var r = require("./1698/86/index")
var o = require("./1541/167")
var i = require("./1541/231")
var /* [auto-meaningful-name] */Object$isExtensible = Object.isExtensible
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    Object$isExtensible(1)
  })
}, {
  isExtensible: function (e) {
    return !!i(e) && (!Object$isExtensible || Object$isExtensible(e))
  }
})
