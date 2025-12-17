/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：119
 */

"use strict"

export { r as b }
export { i as a }
var r = function () {
  function e(e) {
    this.value = e
  }
  e.prototype.is_error = function (e) {
    return e && "error_msg" === e.type
  }
  e.error = function (t) {
    return new e(new i(t))
  }
  e.success = function (t) {
    return new e(t)
  }
  return e
}()
var i = function () {
  function e(t) {
    this.error = {
      message: ""
    }
    this.type = "error_msg"
    this.error.message = t
    if (e.log_enabled) {
      console.error(t)
    }
  }
  e.set_log_enabled = function (e) {
    this.log_enabled = e
  }
  e.log_enabled = false
  return e
}()
export default i
