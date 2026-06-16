/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：43__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */Module_15 from /* 15 */"./15"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26"
function a(e) {
  return "function" === typeof e
}
function s(e, t, n, u, l, c, f) {
  if (1 === e.length && Module_15.e(e[0])) {
    return [
      {
        type: r.literal,
        value: e[0].value
      }
    ]
  }
  for (var d = [], p = 0, h = e; p < h.length; p++) {
    var m = h[p]
    if (Module_15.e(m)) {
      d.push({
        type: r.literal,
        value: m.value
      })
    } else if (Module_15.i(m)) {
      if ("number" === typeof c) {
        d.push({
          type: r.literal,
          value: n.getNumberFormat(t).format(c)
        })
      }
    } else {
      var /* [auto-meaningful-name] */m$value = m.value
      if (!l || !(m$value in l)) {
        throw new Module_26.e(m$value, f)
      }
      var y = l[m$value]
      if (Module_15.b(m)) {
        if (!(y && "string" !== typeof y && "number" !== typeof y)) {
          y = "string" === typeof y || "number" === typeof y ? String(y) : ""
        }
        d.push({
          type: "string" === typeof y ? r.literal : r.object,
          value: y
        })
      } else if (Module_15.c(m)) {
        var g = "string" === typeof m.style ? u.date[m.style] : Module_15.d(m.style) ? m.style.parsedOptions : undefined
        d.push({
          type: r.literal,
          value: n.getDateTimeFormat(t, g).format(y)
        })
      } else if (Module_15.l(m)) {
        g = "string" === typeof m.style ? u.time[m.style] : Module_15.d(m.style) ? m.style.parsedOptions : undefined
        d.push({
          type: r.literal,
          value: n.getDateTimeFormat(t, g).format(y)
        })
      } else if (Module_15.f(m)) {
        if ((g = "string" === typeof m.style ? u.number[m.style] : Module_15.g(m.style) ? m.style.parsedOptions : undefined) && g.scale) {
          y *= g.scale || 1
        }
        d.push({
          type: r.literal,
          value: n.getNumberFormat(t, g).format(y)
        })
      } else {
        if (Module_15.k(m)) {
          var /* [auto-meaningful-name] */m$children = m.children
          var /* [auto-meaningful-name] */m$value1 = m.value
          var E = l[m$value1]
          if (!a(E)) {
            throw new Module_26.d(m$value1, "function", f)
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
        if (Module_15.j(m)) {
          if (!(w = m.options[y] || m.options.other)) {
            throw new Module_26.c(m.value, y, Object.keys(m.options), f)
          }
          d.push.apply(d, s(w.value, t, n, u, l))
        } else if (Module_15.h(m)) {
          var w
          if (!(w = m.options["=" + y])) {
            if (!Intl.PluralRules) {
              throw new Module_26.b("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Module_26.a.MISSING_INTL_API, f)
            }
            var S = n.getPluralRules(t, {
              type: m.pluralType
            }).select(y - (m.offset || 0))
            w = m.options[S] || m.options.other
          }
          if (!w) {
            throw new Module_26.c(m.value, y, Object.keys(m.options), f)
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
export { r }
export { a }
export { s }
export default a
