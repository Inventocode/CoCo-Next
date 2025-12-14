/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1185
 */

"use strict"

var r
function o(e) {
  return e && "number" === typeof e.status
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Status = undefined
exports.ok = function (e) {
  return o(e) && e.status === r.Success
}
exports.error = function (e) {
  return o(e) && e.status !== r.Success
};
(function (e) {
  e[e.Success = 2e3] = "Success"
  e[e.Failed = 3001] = "Failed"
  e[e.Timeout = 3002] = "Timeout"
  e[e.Canceled = 3003] = "Canceled"
  e[e.Unknown = 3004] = "Unknown"
})(r || (exports.Status = r = {}))
