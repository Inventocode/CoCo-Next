/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：628
 */

var r = "undefined" !== typeof global && global || "undefined" !== typeof self && self || window
var /* [auto-meaningful-name] */Function$prototype$apply = Function.prototype.apply
function o(e, t) {
  this._id = e
  this._clearFn = t
}
exports.setTimeout = function () {
  return new o(Function$prototype$apply.call(setTimeout, r, arguments), clearTimeout)
}
exports.setInterval = function () {
  return new o(Function$prototype$apply.call(setInterval, r, arguments), clearInterval)
}
exports.clearTimeout = exports.clearInterval = function (e) {
  if (e) {
    e.close()
  }
}
o.prototype.unref = o.prototype.ref = function () {}
o.prototype.close = function () {
  this._clearFn.call(r, this._id)
}
exports.enroll = function (e, t) {
  clearTimeout(e._idleTimeoutId)
  e._idleTimeout = t
}
exports.unenroll = function (e) {
  clearTimeout(e._idleTimeoutId)
  e._idleTimeout = -1
}
exports._unrefActive = exports.active = function (e) {
  clearTimeout(e._idleTimeoutId)
  var /* [auto-meaningful-name] */e$_idleTimeout = e._idleTimeout
  if (e$_idleTimeout >= 0) {
    e._idleTimeoutId = setTimeout(function () {
      if (e._onTimeout) {
        e._onTimeout()
      }
    }, e$_idleTimeout)
  }
}
require(/* 2026 */"./2026")
exports.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof global && global.setImmediate || this && this.setImmediate
exports.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof global && global.clearImmediate || this && this.clearImmediate
