/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：439
 */

"use strict"

export { o as b }
export { a }
import * as /* [auto-meaningful-name] */$$_$$_1212_38 from "../../1212/38"
import "../1194"
import * as /* [auto-meaningful-name] */$$_317 from "../317"
import "./1476"
import "../1549/1007"
import "../745"
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
  if ($$_317.e(e)) {
    var o = e
    var s = {}
    try {
      for (var c = $$_$$_1212_38.g(Object.keys(o)), u = c.next(); !u.done; u = c.next()) {
        var /* [auto-meaningful-name] */u$value = u.value
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
export default a
