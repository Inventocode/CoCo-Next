/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：117
 */

"use strict"

var r = function () {
  function t() {}
  t.arraycopy = function (t, e, n, r, i) {
    for (; i--;) {
      n[r++] = t[e++]
    }
  }
  t.currentTimeMillis = function () {
    return Date.now()
  }
  return t
}()
exports.a = r
