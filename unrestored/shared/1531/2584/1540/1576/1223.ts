/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1223
 */

var /* [auto-meaningful-name] */Math$floor = Math.floor
var r = function (e, t) {
  for (var n, r, /* [auto-meaningful-name] */e$length = e.length, i = 1; i < e$length;) {
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
  for (var /* [auto-meaningful-name] */e$length = e.length, /* [auto-meaningful-name] */t$length = t.length, i = 0, a = 0, s = []; i < e$length || a < t$length;) {
    if (i < e$length && a < t$length) {
      s.push(n(e[i], t[a]) <= 0 ? e[i++] : t[a++])
    } else {
      s.push(i < e$length ? e[i++] : t[a++])
    }
  }
  return s
}
module.exports = function e(t, i) {
  var /* [auto-meaningful-name] */t$length = t.length
  var s = Math$floor(t$length / 2)
  return t$length < 8 ? r(t, i) : o(e(t.slice(0, s), i), e(t.slice(s), i), i)
}
