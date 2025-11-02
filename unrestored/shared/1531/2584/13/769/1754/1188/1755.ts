/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1755
 */

module.exports = function (e, t) {
  if (null == e) {
    return {}
  }
  var n
  var r
  var i = {}
  var o = Object.keys(e)
  for (r = 0; r < o.length; r++) {
    n = o[r]
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n]
    }
  }
  return i
}
