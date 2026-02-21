/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1783
 */

var r = require("../1662/86")
var o = require("../1785/194")
var i = require("./1093")
r({
  global: true,
  bind: true,
  enumerable: true,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
})
