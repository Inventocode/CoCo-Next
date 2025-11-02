/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2482
 */

var r = require("../../../../../2513/2514/2519/2527/762/index")
module.exports = function (e, t) {
  return function (n, i) {
    if (null == n) {
      return n
    }
    if (!r(n)) {
      return e(n, i)
    }
    for (var n$length = n.length, a = t ? n$length : -1, s = Object(n); (t ? a-- : ++a < n$length) && false !== i(s[a], a, s);) {
      ;
    }
    return n
  }
}
