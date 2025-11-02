/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1336
 */

"use strict"

module.exports = function (e, t) {
  if (!t) {
    t = {}
  }
  if ("function" === typeof t) {
    t = {
      cmp: t
    }
  }
  var /* [auto-meaningful-name] */t$cmp
  var r = "boolean" === typeof t.cycles && t.cycles
  var i = t.cmp && (t$cmp = t.cmp, function (e) {
    return function (t, r) {
      var i = {
        key: t,
        value: e[t]
      }
      var o = {
        key: r,
        value: e[r]
      }
      return t$cmp(i, o)
    }
  })
  var o = []
  return function e(t) {
    if (t && t.toJSON && "function" === typeof t.toJSON) {
      t = t.toJSON()
    }
    if (undefined !== t) {
      if ("number" == typeof t) {
        return isFinite(t) ? "" + t : "null"
      }
      if ("object" !== typeof t) {
        return JSON.stringify(t)
      }
      var n
      var a
      if (Array.isArray(t)) {
        for (a = "[", n = 0; n < t.length; n++) {
          if (n) {
            a += ","
          }
          a += e(t[n]) || "null"
        }
        return a + "]"
      }
      if (null === t) {
        return "null"
      }
      if (-1 !== o.indexOf(t)) {
        if (r) {
          return JSON.stringify("__cycle__")
        }
        throw new TypeError("Converting circular structure to JSON")
      }
      var s = o.push(t) - 1
      var c = Object.keys(t).sort(i && i(t))
      for (a = "", n = 0; n < c.length; n++) {
        var u = c[n]
        var l = e(t[u])
        if (l) {
          if (a) {
            a += ","
          }
          a += JSON.stringify(u) + ":" + l
        }
      }
      o.splice(s, 1)
      return "{" + a + "}"
    }
  }(e)
}
