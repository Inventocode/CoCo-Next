/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：183
 */

"use strict"

function r() {
  var e = "function" === typeof WeakSet
  var t = e ? new WeakSet() : []
  return [
    function (n) {
      if (e) {
        return !!t.has(n) || (t.add(n), false)
      }
      for (var r = 0; r < t.length; r++) {
        if (t[r] === n) {
          return true
        }
      }
      t.push(n)
      return false
    }, function (n) {
      if (e) {
        t.delete(n)
      } else {
        for (var r = 0; r < t.length; r++) {
          if (t[r] === n) {
            t.splice(r, 1)
            break
          }
        }
      }
    }
  ]
}
export { r as a }
export default r
