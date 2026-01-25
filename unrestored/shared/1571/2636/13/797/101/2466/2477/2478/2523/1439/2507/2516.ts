/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2516
 */

var r = require("../../../../../../2538/2539/2540/1442")
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e, t, n, o, a, s) {
  var c = 1 & n
  var u = r(e)
  var /* [auto-meaningful-name] */u$length = u.length
  if (u$length != r(t).length && !c) {
    return false
  }
  for (var f = u$length; f--;) {
    var d = u[f]
    if (!(c ? d in t : Object$prototype$hasOwnProperty.call(t, d))) {
      return false
    }
  }
  var h = s.get(e)
  var p = s.get(t)
  if (h && p) {
    return h == t && p == e
  }
  var _ = true
  s.set(e, t)
  s.set(t, e)
  for (var A = c; ++f < u$length;) {
    var g = e[d = u[f]]
    var v = t[d]
    if (o) {
      var m = c ? o(v, g, d, t, e, s) : o(g, v, d, e, t, s)
    }
    if (!(undefined === m ? g === v || a(g, v, n, o, s) : m)) {
      _ = false
      break
    }
    if (!A) {
      A = "constructor" == d
    }
  }
  if (_ && !A) {
    var /* [auto-meaningful-name] */e$constructor = e.constructor
    var /* [auto-meaningful-name] */t$constructor = t.constructor
    if (!(e$constructor == t$constructor || !("constructor" in e) || !("constructor" in t) || "function" == typeof e$constructor && e$constructor instanceof e$constructor && "function" == typeof t$constructor && t$constructor instanceof t$constructor)) {
      _ = false
    }
  }
  s.delete(e)
  s.delete(t)
  return _
}
