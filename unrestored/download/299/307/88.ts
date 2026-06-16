/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：88
 */

"use strict"

export { o as a }
export { s as b }
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
var i = 50
function o() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  var n = e.sort(function (e, t) {
    return e[0] - t[0]
  }).map(function (e) {
    return e[1]
  })
  return function (e, t) {
    var o
    var /* [auto-meaningful-name] */l$return
    var s
    var /* [auto-meaningful-name] */d$return
    if (undefined === t) {
      t = 0
    }
    var c = []
    try {
      for (var l = Module_5.e(e.split("\n").slice(t)), f = l.next(); !f.done; f = l.next()) {
        var /* [auto-meaningful-name] */f$value = f.value
        try {
          for (s = undefined, d = Module_5.e(n), h = d.next(), undefined; !h.done; h = d.next()) {
            var d
            var h
            var g = (0, h.value)(f$value)
            if (g) {
              c.push(g)
              break
            }
          }
        } catch (m) {
          s = {
            error: m
          }
        } finally {
          try {
            if (h && !h.done && (d$return = d.return)) {
              d$return.call(d)
            }
          } finally {
            if (s) {
              throw s.error
            }
          }
        }
      }
    } catch (v) {
      o = {
        error: v
      }
    } finally {
      try {
        if (f && !f.done && (l$return = l.return)) {
          l$return.call(l)
        }
      } finally {
        if (o) {
          throw o.error
        }
      }
    }
    return function (e) {
      if (!e.length) {
        return []
      }
      var t = e
      var n = t[0].function || ""
      var o = t[t.length - 1].function || ""
      if (!(-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException"))) {
        t = t.slice(1)
      }
      if (-1 !== o.indexOf("sentryWrapped")) {
        t = t.slice(0, -1)
      }
      return t.slice(0, i).map(function (e) {
        return Module_5.a(Module_5.a({}, e), {
          filename: e.filename || t[0].filename,
          function: e.function || "?"
        })
      }).reverse()
    }(c)
  }
}
var /* [auto-meaningful-name] */Anonymous = "<anonymous>"
function s(e) {
  try {
    return e && "function" === typeof e && e.name || Anonymous
  } catch (t) {
    return Anonymous
  }
}
export default o
