/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1633
 */

var r = require("./1662/86")
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */Math$log = Math.log
var /* [auto-meaningful-name] */Math$LOG2E = Math.LOG2E
r({
  target: "Math",
  stat: true
}, {
  clz32: function (e) {
    return (e >>>= 0) ? 31 - Math$floor(Math$log(e + .5) * Math$LOG2E) : 32
  }
})
