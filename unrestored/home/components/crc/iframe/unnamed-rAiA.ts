/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：rAiA
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Status = undefined
exports.ok = ok
exports.error = error
/**
 * api返回值的状态码
 */
var Status;
(function (Status) {
  /**
   * 成功
   */
  Status[Status["Success"] = 2000] = "Success"
  /**
   * 基础错误 300X -- 309X
   */
  /**
   * 调用的异步接口失败/异常
   */
  Status[Status["Failed"] = 3001] = "Failed"
  /**
   * 调用的异步接口失败/异常
   */
  Status[Status["Timeout"] = 3002] = "Timeout"
  /**
   * 调用的异步接口被取消
   */
  Status[Status["Canceled"] = 3003] = "Canceled"
  /**
   * 未知错误
   */
  Status[Status["Unknown"] = 3004] = "Unknown"
})(Status || (exports.Status = Status = {}))
function isResult(res) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res && typeof res.status === "number"
}
/**
 * 判断是否为成功的结果
 */
function ok(res) {
  return isResult(res) && res.status === Status.Success
}
/**
 * 判断是否为失败的结果
 */
function error(err) {
  return isResult(err) && err.status !== Status.Success
}

/***/
