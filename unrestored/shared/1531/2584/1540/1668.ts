/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1668
 */

var r = require("./1541/272")
var o = require("./1541/300/index")
var i = require("./1667/944")
var a = require("./1541/167")
if (r && a(function () {
  return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
    dotAll: true,
    sticky: true
  })
})) {
  o.f(RegExp.prototype, "flags", {
    configurable: true,
    get: i
  })
}
