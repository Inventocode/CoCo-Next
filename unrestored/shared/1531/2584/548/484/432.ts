/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：432
 */

"use strict"

export { a }
import r = require("./168");
import i = require("./111");
import o = require("./106");
function a(e, t) {
  o.a(1, arguments)
  var n = t || {}
  var n$locale = n.locale
  var s = n$locale && n$locale.options && n$locale.options.weekStartsOn
  var c = null == s ? 0 : r.a(s)
  var u = null == n.weekStartsOn ? c : r.a(n.weekStartsOn)
  if (!(u >= 0 && u <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")
  }
  var l = i.a(e)
  var f = l.getUTCDay()
  var d = (f < u ? 7 : 0) + f - u
  l.setUTCDate(l.getUTCDate() - d)
  l.setUTCHours(0, 0, 0, 0)
  return l
}
export default a
