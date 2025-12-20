/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1672
 */

var r = require("./1705/86/index")
var o = require("./1705/168")
var i = require("./1705/231")
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
