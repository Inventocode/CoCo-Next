"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function e(t, n) {
  if ("object" !== typeof t || "object" !== typeof n || null == t || null == n) {
    return t === n;
  }
  if (t.type !== n.type) {
    return !1;
  }
  for (var a = Object.keys(r.NODE_FIELDS[t.type] || t.type), i = r.VISITOR_KEYS[t.type], o = 0, s = a; o < s.length; o++) {
    var u = s[o];
    if (typeof t[u] !== typeof n[u]) {
      return !1;
    }
    if (null != t[u] || null != n[u]) {
      if (null == t[u] || null == n[u]) {
        return !1;
      }
      if (Array.isArray(t[u])) {
        if (!Array.isArray(n[u])) {
          return !1;
        }
        if (t[u].length !== n[u].length) {
          return !1;
        }
        for (var l = 0; l < t[u].length; l++) {
          if (!e(t[u][l], n[u][l])) {
            return !1;
          }
        }
      } else if ("object" !== typeof t[u] || null != i && i.includes(u)) {
        if (!e(t[u], n[u])) {
          return !1;
        }
      } else {
        for (var p = 0, f = Object.keys(t[u]); p < f.length; p++) {
          var d = f[p];
          if (t[u][d] !== n[u][d]) {
            return !1;
          }
        }
      }
    }
  }
  return !0;
};
var r = require("./2635/index");