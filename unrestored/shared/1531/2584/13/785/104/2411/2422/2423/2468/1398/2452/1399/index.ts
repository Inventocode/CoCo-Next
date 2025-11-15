/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1399
 */

var r = require("./2453/index")
var i = require("./2456")
var o = require("./2457")
module.exports = function (e, t, n, a, s, c) {
  var u = 1 & n
  var /* [auto-meaningful-name] */e$length = e.length
  var /* [auto-meaningful-name] */t$length = t.length
  if (e$length != t$length && !(u && t$length > e$length)) {
    return false
  }
  var d = c.get(e)
  var h = c.get(t)
  if (d && h) {
    return d == t && h == e
  }
  var p = -1
  var _ = true
  var A = 2 & n ? new r() : undefined
  for (c.set(e, t), c.set(t, e); ++p < e$length;) {
    var g = e[p]
    var v = t[p]
    if (a) {
      var m = u ? a(v, g, p, t, e, c) : a(g, v, p, e, t, c)
    }
    if (undefined !== m) {
      if (m) {
        continue
      }
      _ = false
      break
    }
    if (A) {
      if (!i(t, function (e, t) {
        if (!o(A, t) && (g === e || s(g, e, n, a, c))) {
          return A.push(t)
        }
      })) {
        _ = false
        break
      }
    } else if (g !== v && !s(g, v, n, a, c)) {
      _ = false
      break
    }
  }
  c.delete(e)
  c.delete(t)
  return _
}
