/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1600
 */

var r = require("./1623/86")
var math$log = Math.log
var math$LOG10E = Math.LOG10E
r({
  target: "Math",
  stat: true
}, {
  log10: function (e) {
    return math$log(e) * math$LOG10E
  }
})
