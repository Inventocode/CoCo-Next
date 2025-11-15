/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2415
 */

module.exports = function (e) {
  return function (t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), /* [auto-meaningful-name] */a$length = a.length; a$length--;) {
      var c = a[e ? a$length : ++i]
      if (false === n(o[c], c, o)) {
        break
      }
    }
    return t
  }
}
