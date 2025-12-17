/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1041
 */

module.exports = function (e, t, n, r) {
  var o = n ? n.call(r, e, t) : undefined
  if (undefined !== o) {
    return !!o
  }
  if (e === t) {
    return true
  }
  if ("object" !== typeof e || !e || "object" !== typeof t || !t) {
    return false
  }
  var i = Object.keys(e)
  var a = Object.keys(t)
  if (i.length !== a.length) {
    return false
  }
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var l = i[c]
    if (!s(l)) {
      return false
    }
    var u = e[l]
    var d = t[l]
    if (false === (o = n ? n.call(r, u, d, l) : undefined) || undefined === o && u !== d) {
      return false
    }
  }
  return true
}
