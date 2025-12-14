/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2621
 */

"use strict"

var r
var o
var i
var a
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ErrorCode = exports.PlayerTypes = exports.EStageType = exports.EKnType = undefined;
(function (e) {
  e.KN = "kn"
  e.TANYUE = "tanyue-kn"
  e.GUYU = "guyu-kn"
})(r || (exports.EKnType = r = {}));
(function (e) {
  e[e.VERTICAL = 1] = "VERTICAL"
  e[e.HORIZONTAL = 2] = "HORIZONTAL"
  e[e.UNSET = 3] = "UNSET"
  e[e.NONE = 4] = "NONE"
})(o || (exports.EStageType = o = {}));
(function (e) {
  e.Player = "1"
  e.Share = "2"
})(i || (exports.PlayerTypes = i = {}));
(function (e) {
  e.UNKNOWN = "UNKNOWN"
  e.UNAUTHORIZED = "40201001"
  e.WORK_LOCKED = "40210002"
  e.WORK_NOT_EXIST = "40100001"
  e.WORK_NO_PERMISSION = "40100003"
  e.NOT_FOUND = "Path-Not-Found@Common"
  e.VERSION_TOO_HIGH = "VERSION_TOO_HIGH"
  e.LOGIN_EXPIRY = "10023001"
  e.HISTORY_BACKUP_STATE = "HISTORY_BACKUP_STATE"
  e.WORK_LOADING = "WORK_LOADING"
})(a || (exports.ErrorCode = a = {}))
