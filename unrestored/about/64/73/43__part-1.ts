/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：43__part-1
 */

"use strict"

var r
import * as i from "./15"
import * as o from "./26"
function a(e) {
  return "function" === typeof e
}
function s(e, t, n, u, l, c, f) {
  if (1 === e.length && i.e(e[0])) {
    return [{
      type: r.literal,
      value: e[0].value
    }]
  }
  for (var d = [], p = 0, h = e; p < h.length; p++) {
    var m = h[p]
    if (i.e(m)) {
      d.push({
        type: r.literal,
        value: m.value
      })
    } else if (i.i(m)) {
      if ("number" === typeof c) {
        d.push({
          type: r.literal,
          value: n.getNumberFormat(t).format(c)
        })
      }
    } else {
      var /* [auto-meaningful-name] */m$value = m.value
      if (!l || !(m$value in l)) {
        throw new o.e(m$value, f)
      }
      var y = l[m$value]
      if (i.b(m)) {
        if (!(y && "string" !== typeof y && "number" !== typeof y)) {
          y = "string" === typeof y || "number" === typeof y ? String(y) : ""
        }
        d.push({
          type: "string" === typeof y ? r.literal : r.object,
          value: y
        })
      } else if (i.c(m)) {
        var g = "string" === typeof m.style ? u.date[m.style] : i.d(m.style) ? m.style.parsedOptions : undefined
        d.push({
          type: r.literal,
          value: n.getDateTimeFormat(t, g).format(y)
        })
      } else if (i.l(m)) {
        g = "string" === typeof m.style ? u.time[m.style] : i.d(m.style) ? m.style.parsedOptions : undefined
        d.push({
          type: r.literal,
          value: n.getDateTimeFormat(t, g).format(y)
        })
      } else if (i.f(m)) {
        if ((g = "string" === typeof m.style ? u.number[m.style] : i.g(m.style) ? m.style.parsedOptions : undefined) && g.scale) {
          y *= g.scale || 1
        }
        d.push({
          type: r.literal,
          value: n.getNumberFormat(t, g).format(y)
        })
      } else {
        if (i.k(m)) {
          var /* [auto-meaningful-name] */m$children = m.children
          var /* [auto-meaningful-name] */_m$value = m.value
          var E = l[_m$value]
          if (!a(E)) {
            throw new o.d(_m$value, "function", f)
          }
          var O = E(s(m$children, t, n, u, l, c).map(function (e) {
            return e.value
          }))
          if (!Array.isArray(O)) {
            O = [O]
          }
          d.push.apply(d, O.map(function (e) {
            return {
              type: "string" === typeof e ? r.literal : r.object,
              value: e
            }
          }))
        }
        if (i.j(m)) {
          if (!(w = m.options[y] || m.options.other)) {
            throw new o.c(m.value, y, Object.keys(m.options), f)
          }
          d.push.apply(d, s(w.value, t, n, u, l))
        } else if (i.h(m)) {
          var w
          if (!(w = m.options["=" + y])) {
            if (!Intl.PluralRules) {
              throw new o.b("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", o.a.MISSING_INTL_API, f)
            }
            var S = n.getPluralRules(t, {
              type: m.pluralType
            }).select(y - (m.offset || 0))
            w = m.options[S] || m.options.other
          }
          if (!w) {
            throw new o.c(m.value, y, Object.keys(m.options), f)
          }
          d.push.apply(d, s(w.value, t, n, u, l, y - (m.offset || 0)))
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
  }(d)
}
!function (e) {
  e[e.literal = 0] = "literal"
  e[e.object = 1] = "object"
}(r || (r = {}))
export { r as "43__part-1__r" }
export { a as "43__part-1__a" }
export { s as "43__part-1__s" }
