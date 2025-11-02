/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1743
 */

var r = require("../1623/86")
var o = require("../1736/194")
var i = require("./1072/index")
r({
  global: true,
  bind: true,
  enumerable: true,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
})
