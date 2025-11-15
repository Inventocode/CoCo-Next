/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1633
 */

var r = require("./1698/86/index")
var o = require("./1541/167")
var i = require("./1541/231")
var /* [auto-meaningful-name] */Object$isFrozen = Object.isFrozen
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    Object$isFrozen(1)
  })
}, {
  isFrozen: function (e) {
    return !i(e) || !!Object$isFrozen && Object$isFrozen(e)
  }
})
