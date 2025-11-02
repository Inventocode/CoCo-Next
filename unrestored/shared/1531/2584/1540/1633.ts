/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1633
 */

var r = require("./1623/86")
var o = require("./1736/167")
var i = require("./1738/231")
var object$isFrozen = Object.isFrozen
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    object$isFrozen(1)
  })
}, {
  isFrozen: function (e) {
    return !i(e) || !!object$isFrozen && object$isFrozen(e)
  }
})
