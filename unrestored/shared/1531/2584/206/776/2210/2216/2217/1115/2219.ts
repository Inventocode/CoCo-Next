/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2219
 */

!function (e) {
  "use strict";

  function t() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    if (t.length > 1) {
      t[0] = t[0].slice(0, -1);
      for (var r = t.length - 1, i = 1; i < r; ++i) {
        t[i] = t[i].slice(1, -1);
      }
      t[r] = t[r].slice(1);
      return t.join("");
    }
    return t[0];
  }
  function n(e) {
    return "(?:" + e + ")";
  }
  function r(e) {
    return undefined === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase();
  }
  function i(e) {
    return e.toUpperCase();
  }
  function o(e) {
    var r = t("[0-9]", "[A-Fa-f]");
    var i = n(n("%[EFef]" + r + "%" + r + r + "%" + r + r) + "|" + n("%[89A-Fa-f]" + r + "%" + r + r) + "|" + n("%" + r + r));
    var o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]";
    var a = t("[\\:\\/\\?\\#\\[\\]\\@]", o);
    var s = e ? "[\\uE000-\\uF8FF]" : "[]";
    var c = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]");
    var u = n("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*");
    var l = n(n(i + "|" + t(c, o, "[\\:]")) + "*");
    n(n("25[0-5]") + "|" + n("2[0-4][0-9]") + "|" + n("1[0-9][0-9]") + "|" + n("[1-9][0-9]") + "|[0-9]");
    var f = n(n("25[0-5]") + "|" + n("2[0-4][0-9]") + "|" + n("1[0-9][0-9]") + "|" + n("0?[1-9][0-9]") + "|0?0?[0-9]");
    var d = n(f + "\\." + f + "\\." + f + "\\." + f);
    var h = n(r + "{1,4}");
    var p = n(n(h + "\\:" + h) + "|" + d);
    var _ = n(n(h + "\\:") + "{6}" + p);
    var A = n("\\:\\:" + n(h + "\\:") + "{5}" + p);
    var g = n(n(h) + "?\\:\\:" + n(h + "\\:") + "{4}" + p);
    var v = n(n(n(h + "\\:") + "{0,1}" + h) + "?\\:\\:" + n(h + "\\:") + "{3}" + p);
    var m = n(n(n(h + "\\:") + "{0,2}" + h) + "?\\:\\:" + n(h + "\\:") + "{2}" + p);
    var y = n(n(n(h + "\\:") + "{0,3}" + h) + "?\\:\\:" + h + "\\:" + p);
    var b = n(n(n(h + "\\:") + "{0,4}" + h) + "?\\:\\:" + p);
    var w = n(n(n(h + "\\:") + "{0,5}" + h) + "?\\:\\:" + h);
    var E = n(n(n(h + "\\:") + "{0,6}" + h) + "?\\:\\:");
    var x = n([_, A, g, v, m, y, b, w, E].join("|"));
    var C = n(n(c + "|" + i) + "+");
    n(x + "\\%25" + C);
    var O = n(x + n("\\%25|\\%(?!" + r + "{2})") + C);
    var k = n("[vV]" + r + "+\\." + t(c, o, "[\\:]") + "+");
    var S = n("\\[" + n(O + "|" + x + "|" + k) + "\\]");
    var T = n(n(i + "|" + t(c, o)) + "*");
    var B = n(S + "|" + d + "(?!" + T + ")|" + T);
    var D = n("[0-9]*");
    var I = n(n(l + "@") + "?" + B + n("\\:" + D) + "?");
    var F = n(i + "|" + t(c, o, "[\\:\\@]"));
    var R = n(F + "*");
    var P = n(F + "+");
    var N = n(n(i + "|" + t(c, o, "[\\@]")) + "+");
    var M = n(n("\\/" + R) + "*");
    var j = n("\\/" + n(P + M) + "?");
    var L = n(N + M);
    var U = n(P + M);
    var H = "(?!" + F + ")";
    n(M + "|" + j + "|" + L + "|" + U + "|" + H);
    var V = n(n(F + "|" + t("[\\/\\?]", s)) + "*");
    var G = n(n(F + "|[\\/\\?]") + "*");
    var z = n(n("\\/\\/" + I + M) + "|" + j + "|" + U + "|" + H);
    var Q = n(u + "\\:" + z + n("\\?" + V) + "?" + n("\\#" + G) + "?");
    var W = n(n("\\/\\/" + I + M) + "|" + j + "|" + L + "|" + H);
    var K = n(W + n("\\?" + V) + "?" + n("\\#" + G) + "?");
    n(Q + "|" + K);
    n(u + "\\:" + z + n("\\?" + V) + "?");
    n(n("\\/\\/(" + n("(" + l + ")@") + "?(" + B + ")" + n("\\:(" + D + ")") + "?)") + "?(" + M + "|" + j + "|" + U + "|" + H + ")");
    n("\\?(" + V + ")");
    n("\\#(" + G + ")");
    n(n("\\/\\/(" + n("(" + l + ")@") + "?(" + B + ")" + n("\\:(" + D + ")") + "?)") + "?(" + M + "|" + j + "|" + L + "|" + H + ")");
    n("\\?(" + V + ")");
    n("\\#(" + G + ")");
    n(n("\\/\\/(" + n("(" + l + ")@") + "?(" + B + ")" + n("\\:(" + D + ")") + "?)") + "?(" + M + "|" + j + "|" + U + "|" + H + ")");
    n("\\?(" + V + ")");
    n("\\#(" + G + ")");
    n("(" + l + ")@");
    n("\\:(" + D + ")");
    return {
      NOT_SCHEME: new RegExp(t("[^]", "[A-Za-z]", "[0-9]", "[\\+\\-\\.]"), "g"),
      NOT_USERINFO: new RegExp(t("[^\\%\\:]", c, o), "g"),
      NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", c, o), "g"),
      NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", c, o), "g"),
      NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", c, o), "g"),
      NOT_QUERY: new RegExp(t("[^\\%]", c, o, "[\\:\\@\\/\\?]", s), "g"),
      NOT_FRAGMENT: new RegExp(t("[^\\%]", c, o, "[\\:\\@\\/\\?]"), "g"),
      ESCAPE: new RegExp(t("[^]", c, o), "g"),
      UNRESERVED: new RegExp(c, "g"),
      OTHER_CHARS: new RegExp(t("[^\\%]", c, a), "g"),
      PCT_ENCODED: new RegExp(i, "g"),
      IPV4ADDRESS: new RegExp("^(" + d + ")$"),
      IPV6ADDRESS: new RegExp("^\\[?(" + x + ")" + n(n("\\%25|\\%(?!" + r + "{2})") + "(" + C + ")") + "?\\]?$")
    };
  }
  var a = o(false);
  var s = o(true);
  var c = function (e, t) {
    if (Array.isArray(e)) {
      return e;
    }
    if (Symbol.iterator in Object(e)) {
      return function (e, t) {
        var n = [];
        var r = true;
        var i = false;
        var o = undefined;
        try {
          for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
            ;
          }
        } catch (c) {
          i = true;
          o = c;
        } finally {
          try {
            if (!r && s.return) {
              s.return();
            }
          } finally {
            if (i) {
              throw o;
            }
          }
        }
        return n;
      }(e, t);
    }
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  var u = 2147483647;
  var l = /^xn--/;
  var f = /[^\0-\x7E]/;
  var d = /[\x2E\u3002\uFF0E\uFF61]/g;
  var h = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  var p = Math.floor;
  var _ = String.fromCharCode;
  function A(e) {
    throw new RangeError(h[e]);
  }
  function g(e, t) {
    var n = e.split("@");
    var r = "";
    if (n.length > 1) {
      r = n[0] + "@";
      e = n[1];
    }
    var i = function (e, t) {
      for (var n = [], r = e.length; r--;) {
        n[r] = t(e[r]);
      }
      return n;
    }((e = e.replace(d, ".")).split("."), t).join(".");
    return r + i;
  }
  function v(e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
      var i = e.charCodeAt(n++);
      if (i >= 55296 && i <= 56319 && n < r) {
        var o = e.charCodeAt(n++);
        if (56320 == (64512 & o)) {
          t.push(((1023 & i) << 10) + (1023 & o) + 65536);
        } else {
          t.push(i);
          n--;
        }
      } else {
        t.push(i);
      }
    }
    return t;
  }
  var m = function (e, t) {
    return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
  };
  var y = function (e, t, n) {
    var r = 0;
    for (e = n ? p(e / 700) : e >> 1, e += p(e / t); e > 455; r += 36) {
      e = p(e / 35);
    }
    return p(r + 36 * e / (e + 38));
  };
  var b = function (e) {
    var t;
    var n = [];
    var r = e.length;
    var i = 0;
    var o = 128;
    var a = 72;
    var s = e.lastIndexOf("-");
    if (s < 0) {
      s = 0;
    }
    for (var c = 0; c < s; ++c) {
      if (e.charCodeAt(c) >= 128) {
        A("not-basic");
      }
      n.push(e.charCodeAt(c));
    }
    for (var l = s > 0 ? s + 1 : 0; l < r;) {
      for (var f = i, d = 1, h = 36;; h += 36) {
        if (l >= r) {
          A("invalid-input");
        }
        var _ = (t = e.charCodeAt(l++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36;
        if (_ >= 36 || _ > p((u - i) / d)) {
          A("overflow");
        }
        i += _ * d;
        var g = h <= a ? 1 : h >= a + 26 ? 26 : h - a;
        if (_ < g) {
          break;
        }
        var v = 36 - g;
        if (d > p(u / v)) {
          A("overflow");
        }
        d *= v;
      }
      var m = n.length + 1;
      a = y(i - f, m, 0 == f);
      if (p(i / m) > u - o) {
        A("overflow");
      }
      o += p(i / m);
      i %= m;
      n.splice(i++, 0, o);
    }
    return String.fromCodePoint.apply(String, n);
  };
  var w = function (e) {
    var t = [];
    var n = (e = v(e)).length;
    var r = 128;
    var i = 0;
    var o = 72;
    var a = true;
    var s = false;
    var c = undefined;
    try {
      for (var l, f = e[Symbol.iterator](); !(a = (l = f.next()).done); a = true) {
        var d = l.value;
        if (d < 128) {
          t.push(_(d));
        }
      }
    } catch (U) {
      s = true;
      c = U;
    } finally {
      try {
        if (!a && f.return) {
          f.return();
        }
      } finally {
        if (s) {
          throw c;
        }
      }
    }
    var h = t.length;
    var g = h;
    for (h && t.push("-"); g < n;) {
      var b = u;
      var w = true;
      var E = false;
      var x = undefined;
      try {
        for (var C, O = e[Symbol.iterator](); !(w = (C = O.next()).done); w = true) {
          var k = C.value;
          if (k >= r && k < b) {
            b = k;
          }
        }
      } catch (U) {
        E = true;
        x = U;
      } finally {
        try {
          if (!w && O.return) {
            O.return();
          }
        } finally {
          if (E) {
            throw x;
          }
        }
      }
      var S = g + 1;
      if (b - r > p((u - i) / S)) {
        A("overflow");
      }
      i += (b - r) * S;
      r = b;
      var T = true;
      var B = false;
      var D = undefined;
      try {
        for (var I, F = e[Symbol.iterator](); !(T = (I = F.next()).done); T = true) {
          var R = I.value;
          if (R < r && ++i > u) {
            A("overflow");
          }
          if (R == r) {
            for (var P = i, N = 36;; N += 36) {
              var M = N <= o ? 1 : N >= o + 26 ? 26 : N - o;
              if (P < M) {
                break;
              }
              var j = P - M;
              var L = 36 - M;
              t.push(_(m(M + j % L, 0)));
              P = p(j / L);
            }
            t.push(_(m(P, 0)));
            o = y(i, S, g == h);
            i = 0;
            ++g;
          }
        }
      } catch (U) {
        B = true;
        D = U;
      } finally {
        try {
          if (!T && F.return) {
            F.return();
          }
        } finally {
          if (B) {
            throw D;
          }
        }
      }
      ++i;
      ++r;
    }
    return t.join("");
  };
  var E = function (e) {
    return g(e, function (e) {
      return f.test(e) ? "xn--" + w(e) : e;
    });
  };
  var x = function (e) {
    return g(e, function (e) {
      return l.test(e) ? b(e.slice(4).toLowerCase()) : e;
    });
  };
  var C = {};
  function O(e) {
    var t = e.charCodeAt(0);
    return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase();
  }
  function k(e) {
    for (var t = "", n = 0, r = e.length; n < r;) {
      var i = parseInt(e.substr(n + 1, 2), 16);
      if (i < 128) {
        t += String.fromCharCode(i);
        n += 3;
      } else if (i >= 194 && i < 224) {
        if (r - n >= 6) {
          var o = parseInt(e.substr(n + 4, 2), 16);
          t += String.fromCharCode((31 & i) << 6 | 63 & o);
        } else {
          t += e.substr(n, 6);
        }
        n += 6;
      } else if (i >= 224) {
        if (r - n >= 9) {
          var a = parseInt(e.substr(n + 4, 2), 16);
          var s = parseInt(e.substr(n + 7, 2), 16);
          t += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & s);
        } else {
          t += e.substr(n, 9);
        }
        n += 9;
      } else {
        t += e.substr(n, 3);
        n += 3;
      }
    }
    return t;
  }
  function S(e, t) {
    function n(e) {
      var n = k(e);
      return n.match(t.UNRESERVED) ? n : e;
    }
    if (e.scheme) {
      e.scheme = String(e.scheme).replace(t.PCT_ENCODED, n).toLowerCase().replace(t.NOT_SCHEME, "");
    }
    if (undefined !== e.userinfo) {
      e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, n).replace(t.NOT_USERINFO, O).replace(t.PCT_ENCODED, i);
    }
    if (undefined !== e.host) {
      e.host = String(e.host).replace(t.PCT_ENCODED, n).toLowerCase().replace(t.NOT_HOST, O).replace(t.PCT_ENCODED, i);
    }
    if (undefined !== e.path) {
      e.path = String(e.path).replace(t.PCT_ENCODED, n).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, O).replace(t.PCT_ENCODED, i);
    }
    if (undefined !== e.query) {
      e.query = String(e.query).replace(t.PCT_ENCODED, n).replace(t.NOT_QUERY, O).replace(t.PCT_ENCODED, i);
    }
    if (undefined !== e.fragment) {
      e.fragment = String(e.fragment).replace(t.PCT_ENCODED, n).replace(t.NOT_FRAGMENT, O).replace(t.PCT_ENCODED, i);
    }
    return e;
  }
  function T(e) {
    return e.replace(/^0*(.*)/, "$1") || "0";
  }
  function B(e, t) {
    var n = e.match(t.IPV4ADDRESS) || [];
    var r = c(n, 2)[1];
    return r ? r.split(".").map(T).join(".") : e;
  }
  function D(e, t) {
    var n = e.match(t.IPV6ADDRESS) || [];
    var r = c(n, 3);
    var i = r[1];
    var o = r[2];
    if (i) {
      for (var a = i.toLowerCase().split("::").reverse(), s = c(a, 2), u = s[0], l = s[1], f = l ? l.split(":").map(T) : [], d = u.split(":").map(T), h = t.IPV4ADDRESS.test(d[d.length - 1]), p = h ? 7 : 8, _ = d.length - p, A = Array(p), g = 0; g < p; ++g) {
        A[g] = f[g] || d[_ + g] || "";
      }
      if (h) {
        A[p - 1] = B(A[p - 1], t);
      }
      var v = A.reduce(function (e, t, n) {
        if (!t || "0" === t) {
          var r = e[e.length - 1];
          if (r && r.index + r.length === n) {
            r.length++;
          } else {
            e.push({
              index: n,
              length: 1
            });
          }
        }
        return e;
      }, []).sort(function (e, t) {
        return t.length - e.length;
      })[0];
      var m = undefined;
      if (v && v.length > 1) {
        var y = A.slice(0, v.index);
        var b = A.slice(v.index + v.length);
        m = y.join(":") + "::" + b.join(":");
      } else {
        m = A.join(":");
      }
      if (o) {
        m += "%" + o;
      }
      return m;
    }
    return e;
  }
  var I = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
  var F = undefined === "".match(/(){0}/)[1];
  function R(e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    var n = {};
    var r = false !== t.iri ? s : a;
    if ("suffix" === t.reference) {
      e = (t.scheme ? t.scheme + ":" : "") + "//" + e;
    }
    var i = e.match(I);
    if (i) {
      if (F) {
        n.scheme = i[1];
        n.userinfo = i[3];
        n.host = i[4];
        n.port = parseInt(i[5], 10);
        n.path = i[6] || "";
        n.query = i[7];
        n.fragment = i[8];
        if (isNaN(n.port)) {
          n.port = i[5];
        }
      } else {
        n.scheme = i[1] || undefined;
        n.userinfo = -1 !== e.indexOf("@") ? i[3] : undefined;
        n.host = -1 !== e.indexOf("//") ? i[4] : undefined;
        n.port = parseInt(i[5], 10);
        n.path = i[6] || "";
        n.query = -1 !== e.indexOf("?") ? i[7] : undefined;
        n.fragment = -1 !== e.indexOf("#") ? i[8] : undefined;
        if (isNaN(n.port)) {
          n.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? i[4] : undefined;
        }
      }
      if (n.host) {
        n.host = D(B(n.host, r), r);
      }
      if (undefined !== n.scheme || undefined !== n.userinfo || undefined !== n.host || undefined !== n.port || n.path || undefined !== n.query) {
        if (undefined === n.scheme) {
          n.reference = "relative";
        } else {
          if (undefined === n.fragment) {
            n.reference = "absolute";
          } else {
            n.reference = "uri";
          }
        }
      } else {
        n.reference = "same-document";
      }
      if (t.reference && "suffix" !== t.reference && t.reference !== n.reference) {
        n.error = n.error || "URI is not a " + t.reference + " reference.";
      }
      var o = C[(t.scheme || n.scheme || "").toLowerCase()];
      if (t.unicodeSupport || o && o.unicodeSupport) {
        S(n, r);
      } else {
        if (n.host && (t.domainHost || o && o.domainHost)) {
          try {
            n.host = E(n.host.replace(r.PCT_ENCODED, k).toLowerCase());
          } catch (c) {
            n.error = n.error || "Host's domain name can not be converted to ASCII via punycode: " + c;
          }
        }
        S(n, a);
      }
      if (o && o.parse) {
        o.parse(n, t);
      }
    } else {
      n.error = n.error || "URI can not be parsed.";
    }
    return n;
  }
  function P(e, t) {
    var n = false !== t.iri ? s : a;
    var r = [];
    if (undefined !== e.userinfo) {
      r.push(e.userinfo);
      r.push("@");
    }
    if (undefined !== e.host) {
      r.push(D(B(String(e.host), n), n).replace(n.IPV6ADDRESS, function (e, t, n) {
        return "[" + t + (n ? "%25" + n : "") + "]";
      }));
    }
    if (!("number" !== typeof e.port && "string" !== typeof e.port)) {
      r.push(":");
      r.push(String(e.port));
    }
    return r.length ? r.join("") : undefined;
  }
  var N = /^\.\.?\//;
  var M = /^\/\.(\/|$)/;
  var j = /^\/\.\.(\/|$)/;
  var L = /^\/?(?:.|\n)*?(?=\/|$)/;
  function U(e) {
    for (var t = []; e.length;) {
      if (e.match(N)) {
        e = e.replace(N, "");
      } else if (e.match(M)) {
        e = e.replace(M, "/");
      } else if (e.match(j)) {
        e = e.replace(j, "/");
        t.pop();
      } else if ("." === e || ".." === e) {
        e = "";
      } else {
        var n = e.match(L);
        if (!n) {
          throw new Error("Unexpected dot segment condition");
        }
        var r = n[0];
        e = e.slice(r.length);
        t.push(r);
      }
    }
    return t.join("");
  }
  function H(e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    var n = t.iri ? s : a;
    var r = [];
    var i = C[(t.scheme || e.scheme || "").toLowerCase()];
    if (i && i.serialize) {
      i.serialize(e, t);
    }
    if (e.host) {
      if (n.IPV6ADDRESS.test(e.host)) {
        ;
      } else if (t.domainHost || i && i.domainHost) {
        try {
          e.host = t.iri ? x(e.host) : E(e.host.replace(n.PCT_ENCODED, k).toLowerCase());
        } catch (u) {
          e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + u;
        }
      }
    }
    S(e, n);
    if ("suffix" !== t.reference && e.scheme) {
      r.push(e.scheme);
      r.push(":");
    }
    var o = P(e, t);
    if (undefined !== o) {
      if ("suffix" !== t.reference) {
        r.push("//");
      }
      r.push(o);
      if (e.path && "/" !== e.path.charAt(0)) {
        r.push("/");
      }
    }
    if (undefined !== e.path) {
      var c = e.path;
      if (!(t.absolutePath || i && i.absolutePath)) {
        c = U(c);
      }
      if (undefined === o) {
        c = c.replace(/^\/\//, "/%2F");
      }
      r.push(c);
    }
    if (undefined !== e.query) {
      r.push("?");
      r.push(e.query);
    }
    if (undefined !== e.fragment) {
      r.push("#");
      r.push(e.fragment);
    }
    return r.join("");
  }
  function V(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
    var r = arguments[3];
    var i = {};
    if (!r) {
      e = R(H(e, n), n);
      t = R(H(t, n), n);
    }
    if (!(n = n || {}).tolerant && t.scheme) {
      i.scheme = t.scheme;
      i.userinfo = t.userinfo;
      i.host = t.host;
      i.port = t.port;
      i.path = U(t.path || "");
      i.query = t.query;
    } else {
      if (undefined !== t.userinfo || undefined !== t.host || undefined !== t.port) {
        i.userinfo = t.userinfo;
        i.host = t.host;
        i.port = t.port;
        i.path = U(t.path || "");
        i.query = t.query;
      } else {
        if (t.path) {
          if ("/" === t.path.charAt(0)) {
            i.path = U(t.path);
          } else {
            if (undefined === e.userinfo && undefined === e.host && undefined === e.port || e.path) {
              if (e.path) {
                i.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path;
              } else {
                i.path = t.path;
              }
            } else {
              i.path = "/" + t.path;
            }
            i.path = U(i.path);
          }
          i.query = t.query;
        } else {
          i.path = e.path;
          if (undefined !== t.query) {
            i.query = t.query;
          } else {
            i.query = e.query;
          }
        }
        i.userinfo = e.userinfo;
        i.host = e.host;
        i.port = e.port;
      }
      i.scheme = e.scheme;
    }
    i.fragment = t.fragment;
    return i;
  }
  function G(e, t) {
    return e && e.toString().replace(t && t.iri ? s.PCT_ENCODED : a.PCT_ENCODED, k);
  }
  var z = {
    scheme: "http",
    domainHost: true,
    parse: function (e, t) {
      if (!e.host) {
        e.error = e.error || "HTTP URIs must have a host.";
      }
      return e;
    },
    serialize: function (e, t) {
      var n = "https" === String(e.scheme).toLowerCase();
      if (!(e.port !== (n ? 443 : 80) && "" !== e.port)) {
        e.port = undefined;
      }
      if (!e.path) {
        e.path = "/";
      }
      return e;
    }
  };
  var Q = {
    scheme: "https",
    domainHost: z.domainHost,
    parse: z.parse,
    serialize: z.serialize
  };
  function W(e) {
    return "boolean" === typeof e.secure ? e.secure : "wss" === String(e.scheme).toLowerCase();
  }
  var K = {
    scheme: "ws",
    domainHost: true,
    parse: function (e, t) {
      var n = e;
      n.secure = W(n);
      n.resourceName = (n.path || "/") + (n.query ? "?" + n.query : "");
      n.path = undefined;
      n.query = undefined;
      return n;
    },
    serialize: function (e, t) {
      if (!(e.port !== (W(e) ? 443 : 80) && "" !== e.port)) {
        e.port = undefined;
      }
      if ("boolean" === typeof e.secure) {
        e.scheme = e.secure ? "wss" : "ws";
        e.secure = undefined;
      }
      if (e.resourceName) {
        var n = e.resourceName.split("?");
        var r = c(n, 2);
        var i = r[0];
        var o = r[1];
        e.path = i && "/" !== i ? i : undefined;
        e.query = o;
        e.resourceName = undefined;
      }
      e.fragment = undefined;
      return e;
    }
  };
  var X = {
    scheme: "wss",
    domainHost: K.domainHost,
    parse: K.parse,
    serialize: K.serialize
  };
  var Y = {};
  var q = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]";
  var $ = "[0-9A-Fa-f]";
  var J = n(n("%[EFef]" + $ + "%" + $ + $ + "%" + $ + $) + "|" + n("%[89A-Fa-f]" + $ + "%" + $ + $) + "|" + n("%" + $ + $));
  var Z = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "[\\\"\\\\]");
  var ee = new RegExp(q, "g");
  var te = new RegExp(J, "g");
  var ne = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", "[\\\"]", Z), "g");
  var re = new RegExp(t("[^]", q, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g");
  var ie = re;
  function oe(e) {
    var t = k(e);
    return t.match(ee) ? t : e;
  }
  var ae = {
    scheme: "mailto",
    parse: function (e, t) {
      var n = e;
      var r = n.to = n.path ? n.path.split(",") : [];
      n.path = undefined;
      if (n.query) {
        for (var i = false, o = {}, a = n.query.split("&"), s = 0, c = a.length; s < c; ++s) {
          var u = a[s].split("=");
          switch (u[0]) {
            case "to":
              for (var l = u[1].split(","), f = 0, d = l.length; f < d; ++f) {
                r.push(l[f]);
              }
              break;
            case "subject":
              n.subject = G(u[1], t);
              break;
            case "body":
              n.body = G(u[1], t);
              break;
            default:
              i = true;
              o[G(u[0], t)] = G(u[1], t);
          }
        }
        if (i) {
          n.headers = o;
        }
      }
      n.query = undefined;
      for (var h = 0, p = r.length; h < p; ++h) {
        var _ = r[h].split("@");
        _[0] = G(_[0]);
        if (t.unicodeSupport) {
          _[1] = G(_[1], t).toLowerCase();
        } else {
          try {
            _[1] = E(G(_[1], t).toLowerCase());
          } catch (A) {
            n.error = n.error || "Email address's domain name can not be converted to ASCII via punycode: " + A;
          }
        }
        r[h] = _.join("@");
      }
      return n;
    },
    serialize: function (e, t) {
      var n;
      var r = e;
      var o = undefined !== (n = e.to) && null !== n ? n instanceof Array ? n : "number" !== typeof n.length || n.split || n.setInterval || n.call ? [n] : Array.prototype.slice.call(n) : [];
      if (o) {
        for (var a = 0, s = o.length; a < s; ++a) {
          var c = String(o[a]);
          var u = c.lastIndexOf("@");
          var l = c.slice(0, u).replace(te, oe).replace(te, i).replace(ne, O);
          var f = c.slice(u + 1);
          try {
            f = t.iri ? x(f) : E(G(f, t).toLowerCase());
          } catch (_) {
            r.error = r.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + _;
          }
          o[a] = l + "@" + f;
        }
        r.path = o.join(",");
      }
      var d = e.headers = e.headers || {};
      if (e.subject) {
        d.subject = e.subject;
      }
      if (e.body) {
        d.body = e.body;
      }
      var h = [];
      for (var p in d) if (d[p] !== Y[p]) {
        h.push(p.replace(te, oe).replace(te, i).replace(re, O) + "=" + d[p].replace(te, oe).replace(te, i).replace(ie, O));
      }
      if (h.length) {
        r.query = h.join("&");
      }
      return r;
    }
  };
  var se = /^([^\:]+)\:(.*)/;
  var ce = {
    scheme: "urn",
    parse: function (e, t) {
      var n = e.path && e.path.match(se);
      var r = e;
      if (n) {
        var i = t.scheme || r.scheme || "urn";
        var o = n[1].toLowerCase();
        var a = n[2];
        var s = i + ":" + (t.nid || o);
        var c = C[s];
        r.nid = o;
        r.nss = a;
        r.path = undefined;
        if (c) {
          r = c.parse(r, t);
        }
      } else {
        r.error = r.error || "URN can not be parsed.";
      }
      return r;
    },
    serialize: function (e, t) {
      var n = t.scheme || e.scheme || "urn";
      var r = e.nid;
      var i = n + ":" + (t.nid || r);
      var o = C[i];
      if (o) {
        e = o.serialize(e, t);
      }
      var a = e;
      var s = e.nss;
      a.path = (r || t.nid) + ":" + s;
      return a;
    }
  };
  var ue = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
  var le = {
    scheme: "urn:uuid",
    parse: function (e, t) {
      var n = e;
      n.uuid = n.nss;
      n.nss = undefined;
      if (!(t.tolerant || n.uuid && n.uuid.match(ue))) {
        n.error = n.error || "UUID is not valid.";
      }
      return n;
    },
    serialize: function (e, t) {
      var n = e;
      n.nss = (e.uuid || "").toLowerCase();
      return n;
    }
  };
  C[z.scheme] = z;
  C[Q.scheme] = Q;
  C[K.scheme] = K;
  C[X.scheme] = X;
  C[ae.scheme] = ae;
  C[ce.scheme] = ce;
  C[le.scheme] = le;
  e.SCHEMES = C;
  e.pctEncChar = O;
  e.pctDecChars = k;
  e.parse = R;
  e.removeDotSegments = U;
  e.serialize = H;
  e.resolveComponents = V;
  e.resolve = function (e, t, n) {
    var r = function (e, t) {
      var n = e;
      if (t) {
        for (var r in t) n[r] = t[r];
      }
      return n;
    }({
      scheme: "null"
    }, n);
    return H(V(R(e, r), R(t, r), r, true), r);
  };
  e.normalize = function (e, t) {
    if ("string" === typeof e) {
      e = H(R(e, t), t);
    } else {
      if ("object" === r(e)) {
        e = R(H(e, t), t);
      }
    }
    return e;
  };
  e.equal = function (e, t, n) {
    if ("string" === typeof e) {
      e = H(R(e, n), n);
    } else {
      if ("object" === r(e)) {
        e = H(e, n);
      }
    }
    if ("string" === typeof t) {
      t = H(R(t, n), n);
    } else {
      if ("object" === r(t)) {
        t = H(t, n);
      }
    }
    return e === t;
  };
  e.escapeComponent = function (e, t) {
    return e && e.toString().replace(t && t.iri ? s.ESCAPE : a.ESCAPE, O);
  };
  e.unescapeComponent = G;
  Object.defineProperty(e, "__esModule", {
    value: true
  });
}(exports);