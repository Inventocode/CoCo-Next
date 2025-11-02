/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1602
 */

var r = require("./1623/86")
var math$log = Math.log
var math$LN2 = Math.LN2
r({
  target: "Math",
  stat: true
}, {
  log2: function (e) {
    return math$log(e) / math$LN2
  }
})
