/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2519
 */

var r = require("./2520/index")
var i = require("./2527/index")
module.exports = function (e) {
  return r(function (t, n) {
    var r = -1
    var n$length = n.length
    var a = n$length > 1 ? n[n$length - 1] : undefined
    var s = n$length > 2 ? n[2] : undefined
    for (a = e.length > 3 && "function" == typeof a ? (n$length--, a) : undefined, s && i(n[0], n[1], s) && (a = n$length < 3 ? undefined : a, n$length = 1), t = Object(t); ++r < n$length;) {
      var c = n[r]
      if (c) {
        e(t, c, r, a)
      }
    }
    return t
  })
}
