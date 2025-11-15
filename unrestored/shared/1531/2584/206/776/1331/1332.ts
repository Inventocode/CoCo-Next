/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1332
 */

"use strict"

var r = [3, 5, 6, 7, 8, 9, 10, 11]
module.exports = {
  normalizeOptions: function (e) {
    var t = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 5
      if ("number" !== typeof e) {
        throw new Error("ecmaVersion must be a number. Received value of type ".concat(typeof e, " instead."))
      }
      var t = e
      if (t >= 2015) {
        t -= 2009
      }
      if (!r.includes(t)) {
        throw new Error("Invalid ecmaVersion.")
      }
      return t
    }(e.ecmaVersion)
    var n = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "script"
      if ("script" === e || "module" === e) {
        return e
      }
      throw new Error("Invalid sourceType.")
    }(e.sourceType)
    var i = true === e.range
    var o = true === e.loc
    if ("module" === n && t < 6) {
      throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.")
    }
    return Object.assign({}, e, {
      ecmaVersion: t,
      sourceType: n,
      ranges: i,
      locations: o
    })
  },
  getLatestEcmaVersion: function () {
    return r[r.length - 1]
  },
  getSupportedEcmaVersions: function () {
    return [].concat(r)
  }
}
