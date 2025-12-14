/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2480
 */

var r = require("../../../../../../253/2568/2569/2570/994/index")
var i = require("../2523/1439/index")
module.exports = function (e, t, n, o) {
  var /* [auto-meaningful-name] */n$length = n.length
  var s = n$length
  var c = !o
  if (null == e) {
    return !s
  }
  for (e = Object(e); n$length--;) {
    var u = n[n$length]
    if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) {
      return false
    }
  }
  for (; ++n$length < s;) {
    var l = (u = n[n$length])[0]
    var f = e[l]
    var d = u[1]
    if (c && u[2]) {
      if (undefined === f && !(l in e)) {
        return false
      }
    } else {
      var h = new r()
      if (o) {
        var p = o(f, d, l, e, t, h)
      }
      if (!(undefined === p ? i(d, f, 3, o, h) : p)) {
        return false
      }
    }
  }
  return true
}
