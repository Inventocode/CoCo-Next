/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1223
 */

var math$floor = Math.floor
var r = function (e, t) {
  for (var n, r, e$length = e.length, i = 1; i < e$length;) {
    for (r = i, n = e[i]; r && t(e[r - 1], n) > 0;) {
      e[r] = e[--r]
    }
    if (r !== i++) {
      e[r] = n
    }
  }
  return e
}
var o = function (e, t, n) {
  for (var e$length = e.length, t$length = t.length, i = 0, a = 0, s = []; i < e$length || a < t$length;) {
    if (i < e$length && a < t$length) {
      s.push(n(e[i], t[a]) <= 0 ? e[i++] : t[a++])
    } else {
      s.push(i < e$length ? e[i++] : t[a++])
    }
  }
  return s
}
module.exports = function e(t, i) {
  var t$length = t.length
  var s = math$floor(t$length / 2)
  return t$length < 8 ? r(t, i) : o(e(t.slice(0, s), i), e(t.slice(s), i), i)
}
