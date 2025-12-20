/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2380
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("./1396/448")
var i = require("./359")
var o = require("./2375/501")
exports.postConstruct = function () {
  return function (e, t, n) {
    var a = new o.Metadata(i.POST_CONSTRUCT, t)
    if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, e.constructor)) {
      throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS)
    }
    Reflect.defineMetadata(i.POST_CONSTRUCT, a, e.constructor)
  }
}
