/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1481__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */$_252 from "./252"
import * as /* [auto-meaningful-name] */$$_808_index from "../808/index"
function a(e) {
  return "function" === typeof e
}
function s(e, t, n, r, c, u, l) {
  if (1 === e.length && $_252.e(e[0])) {
    return [
      {
        type: 0,
        value: e[0].value
      }
    ]
  }
  for (var f = [], d = 0, h = e; d < h.length; d++) {
    var p = h[d]
    if ($_252.e(p)) {
      f.push({
        type: 0,
        value: p.value
      })
    } else if ($_252.i(p)) {
      if ("number" === typeof u) {
        f.push({
          type: 0,
          value: n.getNumberFormat(t).format(u)
        })
      }
    } else {
      var /* [auto-meaningful-name] */p$value = p.value
      if (!c || !(p$value in c)) {
        throw new $$_808_index.d(p$value, l)
      }
      var A = c[p$value]
      if ($_252.b(p)) {
        if (!(A && "string" !== typeof A && "number" !== typeof A)) {
          A = "string" === typeof A || "number" === typeof A ? String(A) : ""
        }
        f.push({
          type: "string" === typeof A ? 0 : 1,
          value: A
        })
      } else if ($_252.c(p)) {
        var g = "string" === typeof p.style ? r.date[p.style] : $_252.d(p.style) ? p.style.parsedOptions : undefined
        f.push({
          type: 0,
          value: n.getDateTimeFormat(t, g).format(A)
        })
      } else if ($_252.l(p)) {
        g = "string" === typeof p.style ? r.time[p.style] : $_252.d(p.style) ? p.style.parsedOptions : undefined
        f.push({
          type: 0,
          value: n.getDateTimeFormat(t, g).format(A)
        })
      } else if ($_252.f(p)) {
        g = "string" === typeof p.style ? r.number[p.style] : $_252.g(p.style) ? p.style.parsedOptions : undefined
        f.push({
          type: 0,
          value: n.getNumberFormat(t, g).format(A)
        })
      } else {
        if ($_252.k(p)) {
          var /* [auto-meaningful-name] */p$children = p.children
          var /* [auto-meaningful-name] */p$value1 = p.value
          var y = c[p$value1]
          if (!a(y)) {
            throw new $$_808_index.c(p$value1, "function", l)
          }
          var b = y(s(p$children, t, n, r, c, u).map(function (e) {
            return e.value
          }))
          if (!Array.isArray(b)) {
            b = [b]
          }
          f.push.apply(f, b.map(function (e) {
            return {
              type: "string" === typeof e ? 0 : 1,
              value: e
            }
          }))
        }
        if ($_252.j(p)) {
          if (!(w = p.options[A] || p.options.other)) {
            throw new $$_808_index.b(p.value, A, Object.keys(p.options), l)
          }
          f.push.apply(f, s(w.value, t, n, r, c))
        } else if ($_252.h(p)) {
          var w
          if (!(w = p.options["=" + A])) {
            if (!Intl.PluralRules) {
              throw new $$_808_index.a("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API", l)
            }
            var E = n.getPluralRules(t, {
              type: p.pluralType
            }).select(A - (p.offset || 0))
            w = p.options[E] || p.options.other
          }
          if (!w) {
            throw new $$_808_index.b(p.value, A, Object.keys(p.options), l)
          }
          f.push.apply(f, s(w.value, t, n, r, c, A - (p.offset || 0)))
        } else {
          ;
        }
      }
    }
  }
  return function (e) {
    return e.length < 2 ? e : e.reduce(function (e, t) {
      var n = e[e.length - 1]
      if (n && 0 === n.type && 0 === t.type) {
        n.value += t.value
      } else {
        e.push(t)
      }
      return e
    }, [])
  }(f)
}
!function (e) {
  e[e.literal = 0] = "literal"
  e[e.object = 1] = "object"
}(r || (r = {}))
export { a }
export { s }
export default a
