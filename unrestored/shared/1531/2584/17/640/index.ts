/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：640
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.lazy_inject = exports.bind_singleton = exports.get_instance = undefined
var r = require("tslib")
var i = require("inversify")
var o = (0, r.__importDefault)(require("inversify-inject-decorators"))
var a = new i.Container()
exports.get_instance = function () {
  return a
}
exports.bind_singleton = function (e, t) {
  a.rebind(e).to(t).inSingletonScope()
}
exports.lazy_inject = (0, o.default)(a).lazyInject
