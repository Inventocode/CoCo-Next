/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2623
 */

"use strict"

var r
var o
var i
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.EAuthOrigin = exports.ERequestType = exports.EStatus = undefined;
(function (e) {
  e[e.Success = 2e3] = "Success"
  e[e.Failed = 3001] = "Failed"
  e[e.Timeout = 3002] = "Timeout"
  e[e.Canceled = 3003] = "Canceled"
  e[e.Unknown = 3004] = "Unknown"
  e[e.WorkNetworkError = 31611] = "WorkNetworkError"
  e[e.WorkTimeout = 31612] = "WorkTimeout"
  e[e.WorkUnauthorized = 31613] = "WorkUnauthorized"
  e[e.WorkNotFound = 31614] = "WorkNotFound"
  e[e.WorkForbidden = 31615] = "WorkForbidden"
  e[e.WorkDataException = 31616] = "WorkDataException"
})(r || (exports.EStatus = r = {}));
(function (e) {
  e[e.Submit = 0] = "Submit"
  e[e.Finish = 1] = "Finish"
})(o || (exports.ERequestType = o = {}));
(function (e) {
  e[e.NCT = 9] = "NCT"
})(i || (exports.EAuthOrigin = i = {}))
