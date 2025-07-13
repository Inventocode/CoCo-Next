"use strict";

export default (function e(t, n) {
  if ("object" !== typeof t || "object" !== typeof n || null == t || null == n) {
    return t === n;
  }
  if (t.type !== n.type) {
    return !1;
  }
  for (var i = Object.keys(r.NODE_FIELDS[t.type] || t.type), a = r.VISITOR_KEYS[t.type], s = 0, o = i; s < o.length; s++) {
    var l = o[s];
    if (typeof t[l] !== typeof n[l]) {
      return !1;
    }
    if (null != t[l] || null != n[l]) {
      if (null == t[l] || null == n[l]) {
        return !1;
      }
      if (Array.isArray(t[l])) {
        if (!Array.isArray(n[l])) {
          return !1;
        }
        if (t[l].length !== n[l].length) {
          return !1;
        }
        for (var u = 0; u < t[l].length; u++) {
          if (!e(t[l][u], n[l][u])) {
            return !1;
          }
        }
      } else if ("object" !== typeof t[l] || null != a && a.includes(l)) {
        if (!e(t[l], n[l])) {
          return !1;
        }
      } else {
        for (var c = 0, p = Object.keys(t[l]); c < p.length; c++) {
          var f = p[c];
          if (t[l][f] !== n[l][f]) {
            return !1;
          }
        }
      }
    }
  }
  return !0;
});
import * as r from "./2633/index";