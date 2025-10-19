/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1440
 */

"use strict";

export { a as b };
export { s as a };
var r;
import i = require("./253");
import o = require("../796");
function a(e) {
  return "function" === typeof e;
}
function s(e, t, n, r, c, u, l) {
  if (1 === e.length && i.e(e[0])) {
    return [{
      type: 0,
      value: e[0].value
    }];
  }
  for (var f = [], d = 0, h = e; d < h.length; d++) {
    var p = h[d];
    if (i.e(p)) {
      f.push({
        type: 0,
        value: p.value
      });
    } else if (i.i(p)) {
      if ("number" === typeof u) {
        f.push({
          type: 0,
          value: n.getNumberFormat(t).format(u)
        });
      }
    } else {
      var _ = p.value;
      if (!c || !(_ in c)) {
        throw new o.d(_, l);
      }
      var A = c[_];
      if (i.b(p)) {
        if (!(A && "string" !== typeof A && "number" !== typeof A)) {
          A = "string" === typeof A || "number" === typeof A ? String(A) : "";
        }
        f.push({
          type: "string" === typeof A ? 0 : 1,
          value: A
        });
      } else if (i.c(p)) {
        var g = "string" === typeof p.style ? r.date[p.style] : i.d(p.style) ? p.style.parsedOptions : undefined;
        f.push({
          type: 0,
          value: n.getDateTimeFormat(t, g).format(A)
        });
      } else if (i.l(p)) {
        g = "string" === typeof p.style ? r.time[p.style] : i.d(p.style) ? p.style.parsedOptions : undefined;
        f.push({
          type: 0,
          value: n.getDateTimeFormat(t, g).format(A)
        });
      } else if (i.f(p)) {
        g = "string" === typeof p.style ? r.number[p.style] : i.g(p.style) ? p.style.parsedOptions : undefined;
        f.push({
          type: 0,
          value: n.getNumberFormat(t, g).format(A)
        });
      } else {
        if (i.k(p)) {
          var v = p.children;
          var m = p.value;
          var y = c[m];
          if (!a(y)) {
            throw new o.c(m, "function", l);
          }
          var b = y(s(v, t, n, r, c, u).map(function (e) {
            return e.value;
          }));
          if (!Array.isArray(b)) {
            b = [b];
          }
          f.push.apply(f, b.map(function (e) {
            return {
              type: "string" === typeof e ? 0 : 1,
              value: e
            };
          }));
        }
        if (i.j(p)) {
          if (!(w = p.options[A] || p.options.other)) {
            throw new o.b(p.value, A, Object.keys(p.options), l);
          }
          f.push.apply(f, s(w.value, t, n, r, c));
        } else if (i.h(p)) {
          var w;
          if (!(w = p.options["=" + A])) {
            if (!Intl.PluralRules) {
              throw new o.a("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API", l);
            }
            var E = n.getPluralRules(t, {
              type: p.pluralType
            }).select(A - (p.offset || 0));
            w = p.options[E] || p.options.other;
          }
          if (!w) {
            throw new o.b(p.value, A, Object.keys(p.options), l);
          }
          f.push.apply(f, s(w.value, t, n, r, c, A - (p.offset || 0)));
        } else {
          ;
        }
      }
    }
  }
  return function (e) {
    return e.length < 2 ? e : e.reduce(function (e, t) {
      var n = e[e.length - 1];
      if (n && 0 === n.type && 0 === t.type) {
        n.value += t.value;
      } else {
        e.push(t);
      }
      return e;
    }, []);
  }(f);
}
!function (e) {
  e[e.literal = 0] = "literal";
  e[e.object = 1] = "object";
}(r || (r = {}));
export default s;