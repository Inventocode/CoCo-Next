/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1435
 */

"use strict"

export { r as a }
var r = function () {
  function e() {
    this._hasWeakSet = "function" === typeof WeakSet
    this._inner = this._hasWeakSet ? new WeakSet() : []
  }
  e.prototype.memoize = function (e) {
    if (this._hasWeakSet) {
      return !!this._inner.has(e) || (this._inner.add(e), false)
    }
    for (var t = 0; t < this._inner.length; t++) {
      if (this._inner[t] === e) {
        return true
      }
    }
    this._inner.push(e)
    return false
  }
  e.prototype.unmemoize = function (e) {
    if (this._hasWeakSet) {
      this._inner.delete(e)
    } else {
      for (var t = 0; t < this._inner.length; t++) {
        if (this._inner[t] === e) {
          this._inner.splice(t, 1)
          break
        }
      }
    }
  }
  return e
}()
export default r
