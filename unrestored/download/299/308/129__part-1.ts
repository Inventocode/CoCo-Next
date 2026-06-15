/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：129__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"./58"
function a(e) {
  return "function" === typeof e
}
function s(e, t, n, u, c, l, f) {
  if (1 === e.length && Module_25.e(e[0])) {
    return [
      {
        type: r.literal,
        value: e[0].value
      }
    ]
  }
  for (var p = [], d = 0, h = e; d < h.length; d++) {
    var g = h[d]
    if (Module_25.e(g)) {
      p.push({
        type: r.literal,
        value: g.value
      })
    } else if (Module_25.i(g)) {
      if ("number" === typeof l) {
        p.push({
          type: r.literal,
          value: n.getNumberFormat(t).format(l)
        })
      }
    } else {
      var /* [auto-meaningful-name] */g$value = g.value
      if (!c || !(g$value in c)) {
        throw new Module_58.e(g$value, f)
      }
      var v = c[g$value]
      if (Module_25.b(g)) {
        if (!(v && "string" !== typeof v && "number" !== typeof v)) {
          v = "string" === typeof v || "number" === typeof v ? String(v) : ""
        }
        p.push({
          type: "string" === typeof v ? r.literal : r.object,
          value: v
        })
      } else if (Module_25.c(g)) {
        var y = "string" === typeof g.style ? u.date[g.style] : Module_25.d(g.style) ? g.style.parsedOptions : undefined
        p.push({
          type: r.literal,
          value: n.getDateTimeFormat(t, y).format(v)
        })
      } else if (Module_25.l(g)) {
        y = "string" === typeof g.style ? u.time[g.style] : Module_25.d(g.style) ? g.style.parsedOptions : u.time.medium
        p.push({
          type: r.literal,
          value: n.getDateTimeFormat(t, y).format(v)
        })
      } else if (Module_25.f(g)) {
        if ((y = "string" === typeof g.style ? u.number[g.style] : Module_25.g(g.style) ? g.style.parsedOptions : undefined) && y.scale) {
          v *= y.scale || 1
        }
        p.push({
          type: r.literal,
          value: n.getNumberFormat(t, y).format(v)
        })
      } else {
        if (Module_25.k(g)) {
          var /* [auto-meaningful-name] */g$children = g.children
          var /* [auto-meaningful-name] */g$value1 = g.value
          var w = c[g$value1]
          if (!a(w)) {
            throw new Module_58.d(g$value1, "function", f)
          }
          var S = w(s(g$children, t, n, u, c, l).map(function (e) {
            return e.value
          }))
          if (!Array.isArray(S)) {
            S = [S]
          }
          p.push.apply(p, S.map(function (e) {
            return {
              type: "string" === typeof e ? r.literal : r.object,
              value: e
            }
          }))
        }
        if (Module_25.j(g)) {
          if (!(k = g.options[v] || g.options.other)) {
            throw new Module_58.c(g.value, v, Object.keys(g.options), f)
          }
          p.push.apply(p, s(k.value, t, n, u, c))
        } else if (Module_25.h(g)) {
          var k
          if (!(k = g.options["=".concat(v)])) {
            if (!Intl.PluralRules) {
              throw new Module_58.b("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Module_58.a.MISSING_INTL_API, f)
            }
            var O = n.getPluralRules(t, {
              type: g.pluralType
            }).select(v - (g.offset || 0))
            k = g.options[O] || g.options.other
          }
          if (!k) {
            throw new Module_58.c(g.value, v, Object.keys(g.options), f)
          }
          p.push.apply(p, s(k.value, t, n, u, c, v - (g.offset || 0)))
        } else {
          ;
        }
      }
    }
  }
  return function (e) {
    return e.length < 2 ? e : e.reduce(function (e, t) {
      var n = e[e.length - 1]
      if (n && n.type === r.literal && t.type === r.literal) {
        n.value += t.value
      } else {
        e.push(t)
      }
      return e
    }, [])
  }(p)
}
!function (e) {
  e[e.literal = 0] = "literal"
  e[e.object = 1] = "object"
}(r || (r = {}))
export { r }
export { a }
export { s }
export default a
