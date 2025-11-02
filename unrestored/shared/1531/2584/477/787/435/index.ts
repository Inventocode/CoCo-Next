/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：435
 */

"use strict";

(function (e) {
  Object.defineProperty(exports, "b", {
    get: function () {
      return o
    },
    enumerable: true
  })
  Object.defineProperty(exports, "a", {
    get: function () {
      return a
    },
    enumerable: true
  })
  var r = require("../../../36/483/39")
  require("../1168")
  var i = require("../316")
  require("./1435")
  require("./986")
  require("../736")
  function o(e, t, n) {
    if (t in e) {
      var r = e[t]
      var i = n(r)
      if ("function" === typeof i) {
        try {
          i.prototype = i.prototype || {}
          Object.defineProperties(i, {
            __sentry_original__: {
              enumerable: false,
              value: r
            }
          })
        } catch (o) {}
      }
      e[t] = i
    }
  }
  function a(e) {
    var t
    var /* [auto-meaningful-name] */c$return
    if (i.e(e)) {
      var o = e
      var s = {}
      try {
        for (var c = r.g(Object.keys(o)), u = c.next(); !u.done; u = c.next()) {
          var u$value = u.value
          if ("undefined" !== typeof o[u$value]) {
            s[u$value] = a(o[u$value])
          }
        }
      } catch (f) {
        t = {
          error: f
        }
      } finally {
        try {
          if (u && !u.done && (c$return = c.return)) {
            c$return.call(c)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
      return s
    }
    return Array.isArray(e) ? e.map(a) : e
  }
}).call(this, require("../../../710/251"))
