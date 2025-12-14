/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：17
 */

"use strict"

export { l as c }
export { c as f }
export { p as e }
export { v as d }
export { y as b }
export { g as a }
import * as /* [auto-meaningful-name] */$$_$$_72_18 from "../../72/18"
import * as /* [auto-meaningful-name] */$$_40 from "../40"
import * as o from "../9"
import * as a from "./45"
import * as /* [auto-meaningful-name] */$$_$$_72_34 from "../../72/34"
import * as /* [auto-meaningful-name] */$$_25 from "../25"
function l(e, t, n) {
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
function c(e) {
  return Object.keys(e).map(function (t) {
    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
  }).join("&")
}
function f(e) {
  if (o.d(e)) {
    var t = e
    var n = {
      message: t.message,
      name: t.name,
      stack: t.stack
    }
    for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
      n[r] = t[r]
    }
    return n
  }
  if (o.f(e)) {
    var a = e
    var s = {}
    s.type = a.type
    try {
      s.target = o.c(a.target) ? $$_40.a(a.target) : Object.prototype.toString.call(a.target)
    } catch (l) {
      s.target = "<unknown>"
    }
    try {
      s.currentTarget = o.c(a.currentTarget) ? $$_40.a(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
    } catch (l) {
      s.currentTarget = "<unknown>"
    }
    for (var u in "undefined" !== typeof CustomEvent && o.g(e, CustomEvent) && (s.detail = a.detail), a) if (Object.prototype.hasOwnProperty.call(a, u)) {
      s[u] = a[u]
    }
    return s
  }
  return e
}
function d(e) {
  return function (e) {
    return ~-encodeURI(e).split(/%..|./).length
  }(JSON.stringify(e))
}
function p(e, t, n) {
  if (undefined === t) {
    t = 3
  }
  if (undefined === n) {
    n = 102400
  }
  var r = v(e, t)
  return d(r) > n ? p(e, t - 1, n) : r
}
function h(t, n) {
  return "domain" === n && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" !== typeof global && t === global ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : o.l(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : undefined === t ? "[undefined]" : "function" === typeof t ? "[Function: " + $$_$$_72_34.a(t) + "]" : "symbol" === typeof t ? "[" + String(t) + "]" : "bigint" === typeof t ? "[BigInt: " + String(t) + "]" : t
}
function m(e, t, n, r) {
  if (undefined === n) {
    n = 1 / 0
  }
  if (undefined === r) {
    r = new a.a()
  }
  if (0 === n) {
    return function (e) {
      var t = Object.prototype.toString.call(e)
      if ("string" === typeof e) {
        return e
      }
      if ("[object Object]" === t) {
        return "[Object]"
      }
      if ("[object Array]" === t) {
        return "[Array]"
      }
      var n = h(e)
      return o.i(n) ? n : t
    }(t)
  }
  if (null !== t && undefined !== t && "function" === typeof t.toJSON) {
    return t.toJSON()
  }
  var i = h(t, e)
  if (o.i(i)) {
    return i
  }
  var s = f(t)
  var u = Array.isArray(t) ? [] : {}
  if (r.memoize(t)) {
    return "[Circular ~]"
  }
  for (var l in s) if (Object.prototype.hasOwnProperty.call(s, l)) {
    u[l] = m(l, s[l], n - 1, r)
  }
  r.unmemoize(t)
  return u
}
function v(e, t) {
  try {
    return JSON.parse(JSON.stringify(e, function (e, n) {
      return m(e, n, t)
    }))
  } catch (n) {
    return "**non-serializable**"
  }
}
function y(e, t) {
  if (undefined === t) {
    t = 40
  }
  var n = Object.keys(f(e))
  n.sort()
  if (!n.length) {
    return "[object has no keys]"
  }
  if (n[0].length >= t) {
    return $$_25.d(n[0], t)
  }
  for (var /* [auto-meaningful-name] */n$length = n.length; n$length > 0; n$length--) {
    var i = n.slice(0, n$length).join(", ")
    if (!(i.length > t)) {
      return n$length === n.length ? i : $$_25.d(i, t)
    }
  }
  return ""
}
function g(e) {
  var t
  var /* [auto-meaningful-name] */s$return
  if (o.h(e)) {
    var i = e
    var a = {}
    try {
      for (var s = $$_$$_72_18.d(Object.keys(i)), u = s.next(); !u.done; u = s.next()) {
        var /* [auto-meaningful-name] */u$value = u.value
        if ("undefined" !== typeof i[u$value]) {
          a[u$value] = g(i[u$value])
        }
      }
    } catch (c) {
      t = {
        error: c
      }
    } finally {
      try {
        if (u && !u.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return a
  }
  return Array.isArray(e) ? e.map(g) : e
}
export default g
