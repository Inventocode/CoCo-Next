/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1632
 */

var r = require("./1623/86")
var o = require("./1736/167")
var i = require("./1738/231")
var object$isExtensible = Object.isExtensible
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    object$isExtensible(1)
  })
}, {
  isExtensible: function (e) {
    return !!i(e) && (!object$isExtensible || object$isExtensible(e))
  }
})
