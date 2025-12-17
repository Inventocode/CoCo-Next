/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：8T/t
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.EAuthOrigin = exports.ERequestType = exports.EStatus = undefined
var EStatus;
(function (EStatus) {
  EStatus[EStatus["Success"] = 2000] = "Success"
  EStatus[EStatus["Failed"] = 3001] = "Failed"
  EStatus[EStatus["Timeout"] = 3002] = "Timeout"
  EStatus[EStatus["Canceled"] = 3003] = "Canceled"
  EStatus[EStatus["Unknown"] = 3004] = "Unknown"
  // NOTE: for work
  EStatus[EStatus["WorkNetworkError"] = 31611] = "WorkNetworkError"
  EStatus[EStatus["WorkTimeout"] = 31612] = "WorkTimeout"
  EStatus[EStatus["WorkUnauthorized"] = 31613] = "WorkUnauthorized"
  EStatus[EStatus["WorkNotFound"] = 31614] = "WorkNotFound"
  EStatus[EStatus["WorkForbidden"] = 31615] = "WorkForbidden"
  EStatus[EStatus["WorkDataException"] = 31616] = "WorkDataException"
})(EStatus || (exports.EStatus = EStatus = {}))
var ERequestType;
(function (ERequestType) {
  ERequestType[ERequestType["Submit"] = 0] = "Submit"
  ERequestType[ERequestType["Finish"] = 1] = "Finish"
})(ERequestType || (exports.ERequestType = ERequestType = {}))
var EAuthOrigin;
(function (EAuthOrigin) {
  EAuthOrigin[EAuthOrigin["NCT"] = 9] = "NCT"
})(EAuthOrigin || (exports.EAuthOrigin = EAuthOrigin = {}))

/***/
