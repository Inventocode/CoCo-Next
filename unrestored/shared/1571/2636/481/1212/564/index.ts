/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：564
 */

"use strict"

export { u as c }
export { l as f }
export { h as e }
export { A as d }
export { g as b }
export { v as a }
import * as /* [auto-meaningful-name] */Module_38 from /* 38 */"../../799/38"
import * as /* [auto-meaningful-name] */Module_1195 from /* 1195 */"../1195"
import * as /* [auto-meaningful-name] */Module_306 from /* 306 */"../306"
import * as /* [auto-meaningful-name] */Module_1478 from /* 1478 */"./1478"
import * as /* [auto-meaningful-name] */Module_1008 from /* 1008 */"../1008"
import * as /* [auto-meaningful-name] */Module_746 from /* 746 */"../746"
function u(e, t, n) {
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
function l(e) {
  return Object.keys(e).map(function (t) {
    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
  }).join("&")
}
function f(e) {
  if (Module_306.d(e)) {
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
  if (Module_306.f(e)) {
    var a = e
    var s = {}
    s.type = a.type
    try {
      s.target = Module_306.c(a.target) ? Module_1195.a(a.target) : Object.prototype.toString.call(a.target)
    } catch (u) {
      s.target = "<unknown>"
    }
    try {
      s.currentTarget = Module_306.c(a.currentTarget) ? Module_1195.a(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
    } catch (u) {
      s.currentTarget = "<unknown>"
    }
    for (var c in "undefined" !== typeof CustomEvent && Module_306.g(e, CustomEvent) && (s.detail = a.detail), a) if (Object.prototype.hasOwnProperty.call(a, c)) {
      s[c] = a[c]
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
function h(e, t, n) {
  if (undefined === t) {
    t = 3
  }
  if (undefined === n) {
    n = 102400
  }
  var r = A(e, t)
  return d(r) > n ? h(e, t - 1, n) : r
}
function p(t, n) {
  return "domain" === n && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" !== typeof global && t === global ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : Module_306.l(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : undefined === t ? "[undefined]" : "function" === typeof t ? "[Function: " + Module_1008.a(t) + "]" : "symbol" === typeof t ? "[" + String(t) + "]" : "bigint" === typeof t ? "[BigInt: " + String(t) + "]" : t
}
function _(e, t, n, r) {
  if (undefined === n) {
    n = 1 / 0
  }
  if (undefined === r) {
    r = new Module_1478.a()
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
      var n = p(e)
      return Module_306.i(n) ? n : t
    }(t)
  }
  if (null !== t && undefined !== t && "function" === typeof t.toJSON) {
    return t.toJSON()
  }
  var i = p(t, e)
  if (Module_306.i(i)) {
    return i
  }
  var s = f(t)
  var c = Array.isArray(t) ? [] : {}
  if (r.memoize(t)) {
    return "[Circular ~]"
  }
  for (var u in s) if (Object.prototype.hasOwnProperty.call(s, u)) {
    c[u] = _(u, s[u], n - 1, r)
  }
  r.unmemoize(t)
  return c
}
function A(e, t) {
  try {
    return JSON.parse(JSON.stringify(e, function (e, n) {
      return _(e, n, t)
    }))
  } catch (n) {
    return "**non-serializable**"
  }
}
function g(e, t) {
  if (undefined === t) {
    t = 40
  }
  var n = Object.keys(f(e))
  n.sort()
  if (!n.length) {
    return "[object has no keys]"
  }
  if (n[0].length >= t) {
    return Module_746.d(n[0], t)
  }
  for (var /* [auto-meaningful-name] */n$length = n.length; n$length > 0; n$length--) {
    var i = n.slice(0, n$length).join(", ")
    if (!(i.length > t)) {
      return n$length === n.length ? i : Module_746.d(i, t)
    }
  }
  return ""
}
function v(e) {
  var t
  var /* [auto-meaningful-name] */s$return
  if (Module_306.h(e)) {
    var i = e
    var a = {}
    try {
      for (var s = Module_38.g(Object.keys(i)), c = s.next(); !c.done; c = s.next()) {
        var /* [auto-meaningful-name] */c$value = c.value
        if ("undefined" !== typeof i[c$value]) {
          a[c$value] = v(i[c$value])
        }
      }
    } catch (l) {
      t = {
        error: l
      }
    } finally {
      try {
        if (c && !c.done && (s$return = s.return)) {
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
  return Array.isArray(e) ? e.map(v) : e
}
export default v
