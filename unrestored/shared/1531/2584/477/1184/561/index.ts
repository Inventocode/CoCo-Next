/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：561
 */

"use strict";

(function (e) {
  Object.defineProperty(exports, "c", {
    get: function () {
      return u
    },
    enumerable: true
  })
  Object.defineProperty(exports, "f", {
    get: function () {
      return l
    },
    enumerable: true
  })
  Object.defineProperty(exports, "e", {
    get: function () {
      return h
    },
    enumerable: true
  })
  Object.defineProperty(exports, "d", {
    get: function () {
      return A
    },
    enumerable: true
  })
  Object.defineProperty(exports, "b", {
    get: function () {
      return g
    },
    enumerable: true
  })
  Object.defineProperty(exports, "a", {
    get: function () {
      return v
    },
    enumerable: true
  })
  var r = require("../../../36/483/39")
  var i = require("../1169")
  var o = require("../306")
  var a = require("./1437")
  var s = require("../987")
  var c = require("../737")
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
        s.target = o.c(a.target) ? i.a(a.target) : Object.prototype.toString.call(a.target)
      } catch (u) {
        s.target = "<unknown>"
      }
      try {
        s.currentTarget = o.c(a.currentTarget) ? i.a(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
      } catch (u) {
        s.currentTarget = "<unknown>"
      }
      for (var c in "undefined" !== typeof CustomEvent && o.g(e, CustomEvent) && (s.detail = a.detail), a) if (Object.prototype.hasOwnProperty.call(a, c)) {
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
    return "domain" === n && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" !== typeof e && t === e ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : o.l(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : undefined === t ? "[undefined]" : "function" === typeof t ? "[Function: " + s.a(t) + "]" : "symbol" === typeof t ? "[" + String(t) + "]" : "bigint" === typeof t ? "[BigInt: " + String(t) + "]" : t
  }
  function _(e, t, n, r) {
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
        var n = p(e)
        return o.i(n) ? n : t
      }(t)
    }
    if (null !== t && undefined !== t && "function" === typeof t.toJSON) {
      return t.toJSON()
    }
    var i = p(t, e)
    if (o.i(i)) {
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
      return c.d(n[0], t)
    }
    for (var n$length = n.length; n$length > 0; n$length--) {
      var i = n.slice(0, n$length).join(", ")
      if (!(i.length > t)) {
        return n$length === n.length ? i : c.d(i, t)
      }
    }
    return ""
  }
  function v(e) {
    var t
    var /* [auto-meaningful-name] */s$return
    if (o.h(e)) {
      var i = e
      var a = {}
      try {
        for (var s = r.g(Object.keys(i)), c = s.next(); !c.done; c = s.next()) {
          var c$value = c.value
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
}).call(this, require("../../../710/251"))
