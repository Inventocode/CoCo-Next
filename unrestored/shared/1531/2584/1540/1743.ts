/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1743
 */

var r = require("./1698/86/index")
var o = require("./1541/194")
var i = require("./1646/1072")
r({
  global: true,
  bind: true,
  enumerable: true,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
})
