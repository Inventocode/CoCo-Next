/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：409
 */

"use strict"

var r = function () {
  function t(t, e) {
    this.value = t
    this.checksumPortion = e
  }
  t.prototype.getValue = function () {
    return this.value
  }
  t.prototype.getChecksumPortion = function () {
    return this.checksumPortion
  }
  t.prototype.toString = function () {
    return this.value + "(" + this.checksumPortion + ")"
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var n = e
    return this.value === n.value && this.checksumPortion === n.checksumPortion
  }
  t.prototype.hashCode = function () {
    return this.value ^ this.checksumPortion
  }
  return t
}()
exports.a = r
