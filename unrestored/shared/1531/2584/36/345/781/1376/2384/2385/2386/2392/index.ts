var r = "function" === typeof Map && Map.prototype;
var i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var o = r && i && "function" === typeof i.get ? i.get : null;
var a = r && Map.prototype.forEach;
var s = "function" === typeof Set && Set.prototype;
var c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var u = s && c && "function" === typeof c.get ? c.get : null;
var l = s && Set.prototype.forEach;
var f = "function" === typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null;
var d = "function" === typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null;
var h = Boolean.prototype.valueOf;
var p = Object.prototype.toString;
var _ = Function.prototype.toString;
var A = String.prototype.match;
var g = "function" === typeof BigInt ? BigInt.prototype.valueOf : null;
var v = Object.getOwnPropertySymbols;
var y = "function" === typeof Symbol ? Symbol.prototype.toString : null;
var b = Object.prototype.propertyIsEnumerable;
var w = require("./1140").custom;
var E = w && k(w) ? w : null;
function x(e, t, n) {
  var r = "double" === (n.quoteStyle || t) ? '"' : "'";
  return r + e + r;
}
function C(e) {
  return String(e).replace(/"/g, "&quot;");
}
function O(e) {
  return "[object Array]" === B(e);
}
function k(e) {
  return "[object Symbol]" === B(e);
}
module.exports = function e(t, n, r, i) {
  var s = n || {};
  if (T(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (T(s, "maxStringLength") && ("number" === typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var c = !T(s, "customInspect") || s.customInspect;
  if ("boolean" !== typeof c) {
    throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
  }
  if (T(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) {
    throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
  }
  if ("undefined" === typeof t) {
    return "undefined";
  }
  if (null === t) {
    return "null";
  }
  if ("boolean" === typeof t) {
    return t ? "true" : "false";
  }
  if ("string" === typeof t) {
    return function e(t, n) {
      if (t.length > n.maxStringLength) {
        var r = t.length - n.maxStringLength;
        var i = "... " + r + " more character" + (r > 1 ? "s" : "");
        return e(t.slice(0, n.maxStringLength), n) + i;
      }
      return x(t.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, I), "single", n);
    }(t, s);
  }
  if ("number" === typeof t) {
    return 0 === t ? 1 / 0 / t > 0 ? "0" : "-0" : String(t);
  }
  if ("bigint" === typeof t) {
    return String(t) + "n";
  }
  var p = "undefined" === typeof s.depth ? 5 : s.depth;
  if ("undefined" === typeof r) {
    r = 0;
  }
  if (r >= p && p > 0 && "object" === typeof t) {
    return O(t) ? "[Array]" : "[Object]";
  }
  var v = function (e, t) {
    var n;
    if ("\t" === e.indent) {
      n = "\t";
    } else {
      if (!("number" === typeof e.indent && e.indent > 0)) {
        return null;
      }
      n = Array(e.indent + 1).join(" ");
    }
    return {
      base: n,
      prev: Array(t + 1).join(n)
    };
  }(s, r);
  if ("undefined" === typeof i) {
    i = [];
  } else if (D(i, t) >= 0) {
    return "[Circular]";
  }
  function b(t, n, o) {
    if (n) {
      (i = i.slice()).push(n);
    }
    if (o) {
      var a = {
        depth: s.depth
      };
      if (T(s, "quoteStyle")) {
        a.quoteStyle = s.quoteStyle;
      }
      return e(t, a, r + 1, i);
    }
    return e(t, s, r + 1, i);
  }
  if ("function" === typeof t) {
    var w = function (e) {
      if (e.name) {
        return e.name;
      }
      var t = A.call(_.call(e), /^function\s*([\w$]+)/);
      if (t) {
        return t[1];
      }
      return null;
    }(t);
    var S = M(t, b);
    return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (S.length > 0 ? " { " + S.join(", ") + " }" : "");
  }
  if (k(t)) {
    var j = y.call(t);
    return "object" === typeof t ? F(j) : j;
  }
  if (function (e) {
    if (!e || "object" !== typeof e) {
      return !1;
    }
    if ("undefined" !== typeof HTMLElement && e instanceof HTMLElement) {
      return !0;
    }
    return "string" === typeof e.nodeName && "function" === typeof e.getAttribute;
  }(t)) {
    for (var L = "<" + String(t.nodeName).toLowerCase(), U = t.attributes || [], H = 0; H < U.length; H++) {
      L += " " + U[H].name + "=" + x(C(U[H].value), "double", s);
    }
    L += ">";
    if (t.childNodes && t.childNodes.length) {
      L += "...";
    }
    return L += "</" + String(t.nodeName).toLowerCase() + ">";
  }
  if (O(t)) {
    if (0 === t.length) {
      return "[]";
    }
    var V = M(t, b);
    return v && !function (e) {
      for (var t = 0; t < e.length; t++) {
        if (D(e[t], "\n") >= 0) {
          return !1;
        }
      }
      return !0;
    }(V) ? "[" + N(V, v) + "]" : "[ " + V.join(", ") + " ]";
  }
  if (function (e) {
    return "[object Error]" === B(e);
  }(t)) {
    var G = M(t, b);
    return 0 === G.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + G.join(", ") + " }";
  }
  if ("object" === typeof t && c) {
    if (E && "function" === typeof t[E]) {
      return t[E]();
    }
    if ("function" === typeof t.inspect) {
      return t.inspect();
    }
  }
  if (function (e) {
    if (!o || !e || "object" !== typeof e) {
      return !1;
    }
    try {
      o.call(e);
      try {
        u.call(e);
      } catch (L) {
        return !0;
      }
      return e instanceof Map;
    } catch (t) {}
    return !1;
  }(t)) {
    var z = [];
    a.call(t, function (e, n) {
      z.push(b(n, t, !0) + " => " + b(e, t));
    });
    return P("Map", o.call(t), z, v);
  }
  if (function (e) {
    if (!u || !e || "object" !== typeof e) {
      return !1;
    }
    try {
      u.call(e);
      try {
        o.call(e);
      } catch (m) {
        return !0;
      }
      return e instanceof Set;
    } catch (t) {}
    return !1;
  }(t)) {
    var Q = [];
    l.call(t, function (e) {
      Q.push(b(e, t));
    });
    return P("Set", u.call(t), Q, v);
  }
  if (function (e) {
    if (!f || !e || "object" !== typeof e) {
      return !1;
    }
    try {
      f.call(e, f);
      try {
        d.call(e, d);
      } catch (L) {
        return !0;
      }
      return e instanceof WeakMap;
    } catch (t) {}
    return !1;
  }(t)) {
    return R("WeakMap");
  }
  if (function (e) {
    if (!d || !e || "object" !== typeof e) {
      return !1;
    }
    try {
      d.call(e, d);
      try {
        f.call(e, f);
      } catch (L) {
        return !0;
      }
      return e instanceof WeakSet;
    } catch (t) {}
    return !1;
  }(t)) {
    return R("WeakSet");
  }
  if (function (e) {
    return "[object Number]" === B(e);
  }(t)) {
    return F(b(Number(t)));
  }
  if (function (e) {
    return "[object BigInt]" === B(e);
  }(t)) {
    return F(b(g.call(t)));
  }
  if (function (e) {
    return "[object Boolean]" === B(e);
  }(t)) {
    return F(h.call(t));
  }
  if (function (e) {
    return "[object String]" === B(e);
  }(t)) {
    return F(b(String(t)));
  }
  if (!function (e) {
    return "[object Date]" === B(e);
  }(t) && !function (e) {
    return "[object RegExp]" === B(e);
  }(t)) {
    var W = M(t, b);
    return 0 === W.length ? "{}" : v ? "{" + N(W, v) + "}" : "{ " + W.join(", ") + " }";
  }
  return String(t);
};
var S = Object.prototype.hasOwnProperty || function (e) {
  return e in this;
};
function T(e, t) {
  return S.call(e, t);
}
function B(e) {
  return p.call(e);
}
function D(e, t) {
  if (e.indexOf) {
    return e.indexOf(t);
  }
  for (var n = 0, r = e.length; n < r; n++) {
    if (e[n] === t) {
      return n;
    }
  }
  return -1;
}
function I(e) {
  var t = e.charCodeAt(0);
  var n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + t.toString(16).toUpperCase();
}
function F(e) {
  return "Object(" + e + ")";
}
function R(e) {
  return e + " { ? }";
}
function P(e, t, n, r) {
  return e + " (" + t + ") {" + (r ? N(n, r) : n.join(", ")) + "}";
}
function N(e, t) {
  if (0 === e.length) {
    return "";
  }
  var n = "\n" + t.prev + t.base;
  return n + e.join("," + n) + "\n" + t.prev;
}
function M(e, t) {
  var n = O(e);
  var r = [];
  if (n) {
    r.length = e.length;
    for (var i = 0; i < e.length; i++) {
      r[i] = T(e, i) ? t(e[i], e) : "";
    }
  }
  for (var o in e) if (T(e, o)) {
    if (!(n && String(Number(o)) === o && o < e.length)) {
      if (/[^\w$]/.test(o)) {
        r.push(t(o, e) + ": " + t(e[o], e));
      } else {
        r.push(o + ": " + t(e[o], e));
      }
    }
  }
  if ("function" === typeof v) {
    for (var a = v(e), s = 0; s < a.length; s++) {
      if (b.call(e, a[s])) {
        r.push("[" + t(a[s]) + "]: " + t(e[a[s]], e));
      }
    }
  }
  return r;
}