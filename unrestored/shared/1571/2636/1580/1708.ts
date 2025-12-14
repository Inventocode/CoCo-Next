/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1708
 */

var r = require("./1699/271")
var o = require("./1705/300/index")
var i = require("./1707/957")
var a = require("./1705/168")
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
