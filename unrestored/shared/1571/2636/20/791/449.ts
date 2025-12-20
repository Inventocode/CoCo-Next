/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：449
 */

function n(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a)
    var /* [auto-meaningful-name] */s$value = s.value
  } catch (u) {
    return void n(u)
  }
  if (s.done) {
    t(s$value)
  } else {
    Promise.resolve(s$value).then(r, i)
  }
}
module.exports = function (e) {
  return function () {
    var t = this
    var r = arguments
    return new Promise(function (i, o) {
      var a = e.apply(t, r)
      function s(e) {
        n(a, i, o, s, c, "next", e)
      }
      function c(e) {
        n(a, i, o, s, c, "throw", e)
      }
      s(undefined)
    })
  }
}
