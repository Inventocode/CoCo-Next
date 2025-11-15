/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1634
 */

var r = require("./1698/86/index")
var o = require("./1541/167")
var i = require("./1541/231")
var /* [auto-meaningful-name] */Object$isSealed = Object.isSealed
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    Object$isSealed(1)
  })
}, {
  isSealed: function (e) {
    return !i(e) || !!Object$isSealed && Object$isSealed(e)
  }
})
