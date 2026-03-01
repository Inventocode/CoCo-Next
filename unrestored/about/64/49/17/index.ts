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
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../72/18"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_45 from /* 45 */"./45"
import * as /* [auto-meaningful-name] */Module_34 from /* 34 */"../../72/34"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25"
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
  if (Module_9.d(e)) {
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
  if (Module_9.f(e)) {
    var a = e
    var s = {}
    s.type = a.type
    try {
      s.target = Module_9.c(a.target) ? Module_40.a(a.target) : Object.prototype.toString.call(a.target)
    } catch (l) {
      s.target = "<unknown>"
    }
    try {
      s.currentTarget = Module_9.c(a.currentTarget) ? Module_40.a(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
    } catch (l) {
      s.currentTarget = "<unknown>"
    }
    for (var u in "undefined" !== typeof CustomEvent && Module_9.g(e, CustomEvent) && (s.detail = a.detail), a) if (Object.prototype.hasOwnProperty.call(a, u)) {
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
  return "domain" === n && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" !== typeof global && t === global ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : Module_9.l(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : undefined === t ? "[undefined]" : "function" === typeof t ? "[Function: " + Module_34.a(t) + "]" : "symbol" === typeof t ? "[" + String(t) + "]" : "bigint" === typeof t ? "[BigInt: " + String(t) + "]" : t
}
function m(e, t, n, r) {
  if (undefined === n) {
    n = 1 / 0
  }
  if (undefined === r) {
    r = new Module_45.a()
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
      return Module_9.i(n) ? n : t
    }(t)
  }
  if (null !== t && undefined !== t && "function" === typeof t.toJSON) {
    return t.toJSON()
  }
  var i = h(t, e)
  if (Module_9.i(i)) {
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
    return Module_25.d(n[0], t)
  }
  for (var /* [auto-meaningful-name] */n$length = n.length; n$length > 0; n$length--) {
    var i = n.slice(0, n$length).join(", ")
    if (!(i.length > t)) {
      return n$length === n.length ? i : Module_25.d(i, t)
    }
  }
  return ""
}
function g(e) {
  var t
  var /* [auto-meaningful-name] */s$return
  if (Module_9.h(e)) {
    var i = e
    var a = {}
    try {
      for (var s = Module_18.d(Object.keys(i)), u = s.next(); !u.done; u = s.next()) {
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
