/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1666
 */

var r = require("../1623/86")
var o = require("../1659/241")
var i = require("./1221")
var a = require("./634")
if (a) {
  r({
    target: "Reflect",
    stat: true
  }, {
    setPrototypeOf: function (e, t) {
      o(e)
      i(t)
      try {
        a(e, t)
        return true
      } catch (n) {
        return false
      }
    }
  })
}
