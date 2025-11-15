/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1370
 */

var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)
if (n) {
  var r = new Uint8Array(16)
  module.exports = function () {
    n(r)
    return r
  }
} else {
  var i = new Array(16)
  module.exports = function () {
    for (var e, t = 0; t < 16; t++) {
      if (0 === (3 & t)) {
        e = 4294967296 * Math.random()
      }
      i[t] = e >>> ((3 & t) << 3) & 255
    }
    return i
  }
}
