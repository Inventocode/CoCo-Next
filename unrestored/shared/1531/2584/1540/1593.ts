/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1593
 */

var r = require("./1623/86")
var math$floor = Math.floor
var math$log = Math.log
var math$LOG2E = Math.LOG2E
r({
  target: "Math",
  stat: true
}, {
  clz32: function (e) {
    return (e >>>= 0) ? 31 - math$floor(math$log(e + .5) * math$LOG2E) : 32
  }
})
