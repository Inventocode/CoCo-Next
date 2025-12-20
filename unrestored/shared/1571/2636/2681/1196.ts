/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1196
 */

"use strict"

module.exports = function (e, t) {
  if (e === t) {
    return true
  }
  if (!e || !t) {
    return false
  }
  var n = Object.keys(e)
  var r = Object.keys(t)
  var /* [auto-meaningful-name] */n$length = n.length
  if (r.length !== n$length) {
    return false
  }
  for (var o = 0; o < n$length; o++) {
    var a = n[o]
    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) {
      return false
    }
  }
  return true
}
