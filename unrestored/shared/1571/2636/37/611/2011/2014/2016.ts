/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2016
 */

function n(e, t, n) {
  var r = e[t]
  e[t] = e[n]
  e[n] = r
}
function r(e, t, i, o) {
  if (i < o) {
    var a = i - 1
    n(e, (l = i, f = o, Math.round(l + Math.random() * (f - l))), o)
    for (var s = e[o], c = i; c < o; c++) {
      if (t(e[c], s) <= 0) {
        n(e, a += 1, c)
      }
    }
    n(e, a + 1, c)
    var u = a + 1
    r(e, t, i, u - 1)
    r(e, t, u + 1, o)
  }
  var l
  var f
}
exports.quickSort = function (e, t) {
  r(e, t, 0, e.length - 1)
}
