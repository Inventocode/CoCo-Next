/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1614
 */

var r = require("./1623/86")
var o = require("./1612/1070")
var math$abs = Math.abs
r({
  target: "Number",
  stat: true
}, {
  isSafeInteger: function (e) {
    return o(e) && math$abs(e) <= 9007199254740991
  }
})
