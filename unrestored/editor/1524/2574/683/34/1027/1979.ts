(function (e, r) {
  var i;
  !function (o) {
    if (exports) {
      exports.nodeType;
    }
    if (e) {
      e.nodeType;
    }
    var a = "object" == typeof r && r;
    if (a.global !== a && a.window !== a) {
      a.self;
    }
    var s;
    var c = 2147483647;
    var u = /^xn--/;
    var l = /[^\x20-\x7E]/;
    var f = /[\x2E\u3002\uFF0E\uFF61]/g;
    var h = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    var d = Math.floor;
    var p = String.fromCharCode;
    function _(e) {
      throw new RangeError(h[e]);
    }
    function A(e, t) {
      for (var n = e.length, r = []; n--;) {
        r[n] = t(e[n]);
      }
      return r;
    }
    function g(e, t) {
      var n = e.split("@");
      var r = "";
      if (n.length > 1) {
        r = n[0] + "@";
        e = n[1];
      }
      return r + A((e = e.replace(f, ".")).split("."), t).join(".");
    }
    function v(e) {
      for (var t, n, r = [], i = 0, o = e.length; i < o;) {
        if ((t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o) {
          if (56320 == (64512 & (n = e.charCodeAt(i++)))) {
            r.push(((1023 & t) << 10) + (1023 & n) + 65536);
          } else {
            r.push(t);
            i--;
          }
        } else {
          r.push(t);
        }
      }
      return r;
    }
    function m(e) {
      return A(e, function (e) {
        var t = "";
        if (e > 65535) {
          t += p((e -= 65536) >>> 10 & 1023 | 55296);
          e = 56320 | 1023 & e;
        }
        return t += p(e);
      }).join("");
    }
    function y(e, t) {
      return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    }
    function b(e, t, n) {
      var r = 0;
      for (e = n ? d(e / 700) : e >> 1, e += d(e / t); e > 455; r += 36) {
        e = d(e / 35);
      }
      return d(r + 36 * e / (e + 38));
    }
    function w(e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var f;
      var h;
      var p = [];
      var A = e.length;
      var g = 0;
      var v = 128;
      var y = 72;
      for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) {
        if (e.charCodeAt(r) >= 128) {
          _("not-basic");
        }
        p.push(e.charCodeAt(r));
      }
      for (i = n > 0 ? n + 1 : 0; i < A;) {
        for (o = g, a = 1, s = 36; i >= A && _("invalid-input"), ((u = (h = e.charCodeAt(i++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : 36) >= 36 || u > d((c - g) / a)) && _("overflow"), g += u * a, !(u < (l = s <= y ? 1 : s >= y + 26 ? 26 : s - y)); s += 36) {
          if (a > d(c / (f = 36 - l))) {
            _("overflow");
          }
          a *= f;
        }
        y = b(g - o, t = p.length + 1, 0 == o);
        if (d(g / t) > c - v) {
          _("overflow");
        }
        v += d(g / t);
        g %= t;
        p.splice(g++, 0, v);
      }
      return m(p);
    }
    function E(e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var l;
      var f;
      var h;
      var A;
      var g;
      var m;
      var w;
      var E = [];
      for (A = (e = v(e)).length, t = 128, n = 0, o = 72, a = 0; a < A; ++a) {
        if ((h = e[a]) < 128) {
          E.push(p(h));
        }
      }
      for (r = i = E.length, i && E.push("-"); r < A;) {
        for (s = c, a = 0; a < A; ++a) {
          if ((h = e[a]) >= t && h < s) {
            s = h;
          }
        }
        for (s - t > d((c - n) / (g = r + 1)) && _("overflow"), n += (s - t) * g, t = s, a = 0; a < A; ++a) {
          if ((h = e[a]) < t && ++n > c && _("overflow"), h == t) {
            for (u = n, l = 36; !(u < (f = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += 36) {
              w = u - f;
              m = 36 - f;
              E.push(p(y(f + w % m, 0)));
              u = d(w / m);
            }
            E.push(p(y(u, 0)));
            o = b(n, g, r == i);
            n = 0;
            ++r;
          }
        }
        ++n;
        ++t;
      }
      return E.join("");
    }
    s = {
      version: "1.4.1",
      ucs2: {
        decode: v,
        encode: m
      },
      decode: w,
      encode: E,
      toASCII: function (e) {
        return g(e, function (e) {
          return l.test(e) ? "xn--" + E(e) : e;
        });
      },
      toUnicode: function (e) {
        return g(e, function (e) {
          return u.test(e) ? w(e.slice(4).toLowerCase()) : e;
        });
      }
    };
    if (!(void 0 === (i = function () {
      return s;
    }.call(exports, require, exports, e)))) {
      e.exports = i;
    }
  }();
}).call(this, require("../../../31/571")(module), require("../../../31/251"));