/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：436
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$_169 from "./169"
import * as /* [auto-meaningful-name] */$_109 from "./109"
import * as /* [auto-meaningful-name] */$_104 from "./104"
function a(e, t) {
  $_104.a(1, arguments)
  var n = t || {}
  var /* [auto-meaningful-name] */n$locale = n.locale
  var s = n$locale && n$locale.options && n$locale.options.weekStartsOn
  var c = null == s ? 0 : $_169.a(s)
  var u = null == n.weekStartsOn ? c : $_169.a(n.weekStartsOn)
  if (!(u >= 0 && u <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
  }
  var l = $_109.a(e)
  var f = l.getUTCDay()
  var d = (f < u ? 7 : 0) + f - u
  l.setUTCDate(l.getUTCDate() - d)
  l.setUTCHours(0, 0, 0, 0)
  return l
}
export default a
