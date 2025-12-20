/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：yX6s
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ErrorCode = exports.PlayerTypes = exports.EStageType = exports.EKnType = undefined
var EKnType;
(function (EKnType) {
  EKnType["KN"] = "kn"
  EKnType["TANYUE"] = "tanyue-kn"
  EKnType["GUYU"] = "guyu-kn"
})(EKnType || (exports.EKnType = EKnType = {}))
var EStageType;
(function (EStageType) {
  EStageType[EStageType["VERTICAL"] = 1] = "VERTICAL"
  EStageType[EStageType["HORIZONTAL"] = 2] = "HORIZONTAL"
  EStageType[EStageType["UNSET"] = 3] = "UNSET"
  EStageType[EStageType["NONE"] = 4] = "NONE"
})(EStageType || (exports.EStageType = EStageType = {}))
var PlayerTypes;
(function (PlayerTypes) {
  PlayerTypes["Player"] = "1"
  PlayerTypes["Share"] = "2"
})(PlayerTypes || (exports.PlayerTypes = PlayerTypes = {}))
// TODO: 跟业务方确认是否有引用了此依赖，没引用的话可删除
var ErrorCode;
(function (ErrorCode) {
  // 未知错误
  ErrorCode["UNKNOWN"] = "UNKNOWN"
  // 未登录
  ErrorCode["UNAUTHORIZED"] = "40201001"
  // 作品被锁定
  ErrorCode["WORK_LOCKED"] = "40210002"
  // 作品不存在
  ErrorCode["WORK_NOT_EXIST"] = "40100001"
  // 无权限访问作品
  ErrorCode["WORK_NO_PERMISSION"] = "40100003"
  // 请求404
  ErrorCode["NOT_FOUND"] = "Path-Not-Found@Common"
  // 版本过高
  ErrorCode["VERSION_TOO_HIGH"] = "VERSION_TOO_HIGH"
  // 登录态失效
  ErrorCode["LOGIN_EXPIRY"] = "10023001"
  // 历史版本
  ErrorCode["HISTORY_BACKUP_STATE"] = "HISTORY_BACKUP_STATE"
  // 正在加载作品
  ErrorCode["WORK_LOADING"] = "WORK_LOADING"
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}))

/***/
