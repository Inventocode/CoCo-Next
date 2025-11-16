/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：785__part-4
 */

"use strict"

import { "785__part-2__Z" as Z } from "./index__part-2"
import { "785__part-3__$e" as $e, "785__part-3__tt" as tt, "785__part-3__ct" as ct } from "./index__part-3"
import * as /* [auto-meaningful-name] */$_731_index from "./731/index"
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */Function$prototype$toString = Function$prototype.toString
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
var At = Function$prototype$toString.call(Object)
var gt = function (e) {
  if (!tt(e) || "[object Object]" != Z(e)) {
    return false
  }
  var t = $e(e)
  if (null === t) {
    return true
  }
  var n = Object$prototype$hasOwnProperty.call(t, "constructor") && t.constructor
  return "function" == typeof n && n instanceof n && Function$prototype$toString.call(n) == At
}
var vt = {}
vt["[object Float32Array]"] = vt["[object Float64Array]"] = vt["[object Int8Array]"] = vt["[object Int16Array]"] = vt["[object Int32Array]"] = vt["[object Uint8Array]"] = vt["[object Uint8ClampedArray]"] = vt["[object Uint16Array]"] = vt["[object Uint32Array]"] = true
vt["[object Arguments]"] = vt["[object Array]"] = vt["[object ArrayBuffer]"] = vt["[object Boolean]"] = vt["[object DataView]"] = vt["[object Date]"] = vt["[object Error]"] = vt["[object Function]"] = vt["[object Map]"] = vt["[object Number]"] = vt["[object Object]"] = vt["[object RegExp]"] = vt["[object Set]"] = vt["[object String]"] = vt["[object WeakMap]"] = false
var mt = function (e) {
  return tt(e) && ct(e.length) && !!vt[Z(e)]
}
var yt = function (e) {
  return function (t) {
    return e(t)
  }
}
export { gt as "785__part-4__gt" }
export { mt as "785__part-4__mt" }
export { yt as "785__part-4__yt" }
