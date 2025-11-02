/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：909
 */

"use strict"

function r() {
  for (var _arguments$length = arguments.length, t = new Array(_arguments$length), n = 0; n < _arguments$length; n++) {
    t[n] = arguments[n]
  }
  return t.reduce(function (e, t) {
    return null == t ? e : function () {
      for (var arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        r[i] = arguments[i]
      }
      e.apply(this, r)
      t.apply(this, r)
    }
  }, function () {})
}
export { r as a }
export default r
