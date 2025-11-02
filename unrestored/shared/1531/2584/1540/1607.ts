/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1607
 */

var r = require("./1623/86")
var math$ceil = Math.ceil
var math$floor = Math.floor
r({
  target: "Math",
  stat: true
}, {
  trunc: function (e) {
    return (e > 0 ? math$floor : math$ceil)(e)
  }
})
