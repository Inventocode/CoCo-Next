/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1349
 */

"use strict"

function r(e, t) {
  return e === t || null !== e && null !== t && "object" === typeof e && "object" === typeof t && (Array.isArray(e) ? function (e, t) {
    if (!Array.isArray(t)) {
      return false
    }
    if (e.length !== t.length) {
      return false
    }
    for (var n = 0; n < e.length; n++) {
      if (!r(e[n], t[n])) {
        return false
      }
    }
    return true
  }(e, t) : function (e, t) {
    if (Array.isArray(t)) {
      return false
    }
    for (var n in e) if (!r(e[n], t[n])) {
      return false
    }
    for (var i in t) if (undefined === e[i]) {
      return false
    }
    return true
  }(e, t))
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = r
