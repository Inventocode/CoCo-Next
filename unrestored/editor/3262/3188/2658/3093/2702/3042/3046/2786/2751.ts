"use strict";

(function (t) {
  var n = {};
  var r = n.hasOwnProperty;
  var i = function (e, t) {
    for (var n in e) if (r.call(e, n)) {
      t(n, e[n]);
    }
  };
  var a = n.toString;
  var s = Array.isArray;
  var o = t.isBuffer;
  var l = {
    '"': '\\"',
    "'": "\\'",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t"
  };
  var u = /["'\\\b\f\n\r\t]/;
  var c = /[0-9]/;
  var p = /[ !#-&\(-\[\]-_a-~]/;
  var f = function e(t, n) {
    var r;
    var f;
    var d = function () {
      S = b;
      ++n.indentLevel;
      b = n.indent.repeat(n.indentLevel);
    };
    var h = {
      escapeEverything: !1,
      minimal: !1,
      isScriptContext: !1,
      quotes: "single",
      wrap: !1,
      es6: !1,
      json: !1,
      compact: !0,
      lowercaseHex: !1,
      numbers: "decimal",
      indent: "\t",
      indentLevel: 0,
      __inline1__: !1,
      __inline2__: !1
    };
    var y = n && n.json;
    if (y) {
      h.quotes = "double";
      h.wrap = !0;
    }
    r = h;
    if ("single" != (n = (f = n) ? (i(f, function (e, t) {
      r[e] = t;
    }), r) : r).quotes && "double" != n.quotes && "backtick" != n.quotes) {
      n.quotes = "single";
    }
    var m;
    var v = "double" == n.quotes ? '"' : "backtick" == n.quotes ? "`" : "'";
    var g = n.compact;
    var T = n.lowercaseHex;
    var b = n.indent.repeat(n.indentLevel);
    var S = "";
    var E = n.__inline1__;
    var x = n.__inline2__;
    var P = g ? "" : "\n";
    var A = !0;
    var k = "binary" == n.numbers;
    var w = "octal" == n.numbers;
    var O = "decimal" == n.numbers;
    var C = "hexadecimal" == n.numbers;
    if (y && t && "function" == typeof t.toJSON && (t = t.toJSON()), !function (e) {
      return "string" == typeof e || "[object String]" == a.call(e);
    }(t)) {
      if (function (e) {
        return "[object Map]" == a.call(e);
      }(t)) {
        return 0 == t.size ? "new Map()" : (g || (n.__inline1__ = !0, n.__inline2__ = !1), "new Map(" + e(Array.from(t), n) + ")");
      }
      if (function (e) {
        return "[object Set]" == a.call(e);
      }(t)) {
        return 0 == t.size ? "new Set()" : "new Set(" + e(Array.from(t), n) + ")";
      }
      if (o(t)) {
        return 0 == t.length ? "Buffer.from([])" : "Buffer.from(" + e(Array.from(t), n) + ")";
      }
      if (s(t)) {
        m = [];
        n.wrap = !0;
        if (E) {
          n.__inline1__ = !1;
          n.__inline2__ = !0;
        }
        if (!x) {
          d();
        }
        (function (e, t) {
          for (var n = e.length, r = -1; ++r < n;) {
            t(e[r]);
          }
        })(t, function (t) {
          A = !1;
          if (x) {
            n.__inline2__ = !1;
          }
          m.push((g || x ? "" : b) + e(t, n));
        });
        return A ? "[]" : x ? "[" + m.join(", ") + "]" : "[" + P + m.join("," + P) + P + (g ? "" : S) + "]";
      }
      if (!function (e) {
        return "number" == typeof e || "[object Number]" == a.call(e);
      }(t)) {
        return function (e) {
          return "[object Object]" == a.call(e);
        }(t) ? (m = [], n.wrap = !0, d(), i(t, function (t, r) {
          A = !1;
          m.push((g ? "" : b) + e(t, n) + ":" + (g ? "" : " ") + e(r, n));
        }), A ? "{}" : "{" + P + m.join("," + P) + P + (g ? "" : S) + "}") : y ? JSON.stringify(t) || "null" : String(t);
      }
      if (y) {
        return JSON.stringify(t);
      }
      if (O) {
        return String(t);
      }
      if (C) {
        var I = t.toString(16);
        if (!T) {
          I = I.toUpperCase();
        }
        return "0x" + I;
      }
      if (k) {
        return "0b" + t.toString(2);
      }
      if (w) {
        return "0o" + t.toString(8);
      }
    }
    var N = t;
    var _ = -1;
    var D = N.length;
    for (m = ""; ++_ < D;) {
      var j = N.charAt(_);
      if (n.es6) {
        var L = N.charCodeAt(_);
        if (L >= 55296 && L <= 56319 && D > _ + 1) {
          var M = N.charCodeAt(_ + 1);
          if (M >= 56320 && M <= 57343) {
            var B = (1024 * (L - 55296) + M - 56320 + 65536).toString(16);
            if (!T) {
              B = B.toUpperCase();
            }
            m += "\\u{" + B + "}";
            ++_;
            continue;
          }
        }
      }
      if (!n.escapeEverything) {
        if (p.test(j)) {
          m += j;
          continue;
        }
        if ('"' == j) {
          m += v == j ? '\\"' : j;
          continue;
        }
        if ("`" == j) {
          m += v == j ? "\\`" : j;
          continue;
        }
        if ("'" == j) {
          m += v == j ? "\\'" : j;
          continue;
        }
      }
      if ("\0" != j || y || c.test(N.charAt(_ + 1))) {
        if (u.test(j)) {
          m += l[j];
        } else {
          var F = j.charCodeAt(0);
          if (n.minimal && 8232 != F && 8233 != F) {
            m += j;
          } else {
            var R = F.toString(16);
            if (!T) {
              R = R.toUpperCase();
            }
            var U = R.length > 2 || y;
            var K = "\\" + (U ? "u" : "x") + ("0000" + R).slice(U ? -4 : -2);
            m += K;
          }
        }
      } else {
        m += "\\0";
      }
    }
    if (n.wrap) {
      m = v + m + v;
    }
    if ("`" == v) {
      m = m.replace(/\$\{/g, "\\${");
    }
    return n.isScriptContext ? m.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, y ? "\\u003C!--" : "\\x3C!--") : m;
  };
  f.version = "2.5.2";
  module.exports = f;
}).call(this, require("../../../../../../../../1524/2574/616/570/index").Buffer);