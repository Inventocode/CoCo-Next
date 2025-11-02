/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：209
 */

"use strict"

var r = require("axios")
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(r).a.create({
  timeout: 5e3,
  withCredentials: true
})
o.interceptors.request.use(function (e) {
  return e
}, function (e) {
  return Promise.reject(e)
})
o.interceptors.response.use(function (e) {
  return e
}, function (e) {
  e.response
  return Promise.reject(e)
})
exports.a = o
