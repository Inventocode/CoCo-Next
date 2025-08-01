"use strict";

var r = require("./2386/index");
var i = require("../2393/1388");
var o = require("../1141");
var a = Object.prototype.hasOwnProperty;
var s = {
  brackets: function (e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function (e, t) {
    return e + "[" + t + "]";
  },
  repeat: function (e) {
    return e;
  }
};
var c = Array.isArray;
var u = String.prototype.split;
var l = Array.prototype.push;
var f = function (e, t) {
  l.apply(e, c(t) ? t : [t]);
};
var d = Date.prototype.toISOString;
var h = o.default;
var p = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: i.encode,
  encodeValuesOnly: !1,
  format: h,
  formatter: o.formatters[h],
  indices: !1,
  serializeDate: function (e) {
    return d.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
};
var _ = {};
var A = function e(t, n, o, a, s, l, d, h, A, g, v, m, y, b, w) {
  for (var E, x = t, C = w, O = 0, k = !1; void 0 !== (C = C.get(_)) && !k;) {
    var S = C.get(t);
    if (O += 1, "undefined" !== typeof S) {
      if (S === O) {
        throw new RangeError("Cyclic object value");
      }
      k = !0;
    }
    if ("undefined" === typeof C.get(_)) {
      O = 0;
    }
  }
  if ("function" === typeof d ? x = d(n, x) : x instanceof Date ? x = g(x) : "comma" === o && c(x) && (x = i.maybeMap(x, function (e) {
    return e instanceof Date ? g(e) : e;
  })), null === x) {
    if (a) {
      return l && !y ? l(n, p.encoder, b, "key", v) : n;
    }
    x = "";
  }
  if ("string" === typeof (E = x) || "number" === typeof E || "boolean" === typeof E || "symbol" === typeof E || "bigint" === typeof E || i.isBuffer(x)) {
    if (l) {
      var T = y ? n : l(n, p.encoder, b, "key", v);
      if ("comma" === o && y) {
        for (var B = u.call(String(x), ","), D = "", I = 0; I < B.length; ++I) {
          D += (0 === I ? "" : ",") + m(l(B[I], p.encoder, b, "value", v));
        }
        return [m(T) + "=" + D];
      }
      return [m(T) + "=" + m(l(x, p.encoder, b, "value", v))];
    }
    return [m(n) + "=" + m(String(x))];
  }
  var F;
  var R = [];
  if ("undefined" === typeof x) {
    return R;
  }
  if ("comma" === o && c(x)) {
    F = [{
      value: x.length > 0 ? x.join(",") || null : void 0
    }];
  } else if (c(d)) {
    F = d;
  } else {
    var P = Object.keys(x);
    F = h ? P.sort(h) : P;
  }
  for (var N = 0; N < F.length; ++N) {
    var M = F[N];
    var j = "object" === typeof M && void 0 !== M.value ? M.value : x[M];
    if (!s || null !== j) {
      var L = c(x) ? "function" === typeof o ? o(n, M) : n : n + (A ? "." + M : "[" + M + "]");
      w.set(t, O);
      var U = r();
      U.set(_, w);
      f(R, e(j, L, o, a, s, l, d, h, A, g, v, m, y, b, U));
    }
  }
  return R;
};
module.exports = function (e, t) {
  var n;
  var i = e;
  var u = function (e) {
    if (!e) {
      return p;
    }
    if (null !== e.encoder && void 0 !== e.encoder && "function" !== typeof e.encoder) {
      throw new TypeError("Encoder has to be a function.");
    }
    var t = e.charset || p.charset;
    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var n = o.default;
    if ("undefined" !== typeof e.format) {
      if (!a.call(o.formatters, e.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      n = e.format;
    }
    var r = o.formatters[n];
    var i = p.filter;
    if ("function" === typeof e.filter || c(e.filter)) {
      i = e.filter;
    }
    return {
      addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
      allowDots: "undefined" === typeof e.allowDots ? p.allowDots : !!e.allowDots,
      charset: t,
      charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
      delimiter: "undefined" === typeof e.delimiter ? p.delimiter : e.delimiter,
      encode: "boolean" === typeof e.encode ? e.encode : p.encode,
      encoder: "function" === typeof e.encoder ? e.encoder : p.encoder,
      encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
      filter: i,
      format: n,
      formatter: r,
      serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : p.serializeDate,
      skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : p.skipNulls,
      sort: "function" === typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
    };
  }(t);
  if ("function" === typeof u.filter) {
    i = (0, u.filter)("", i);
  } else {
    if (c(u.filter)) {
      n = u.filter;
    }
  }
  var l;
  var d = [];
  if ("object" !== typeof i || null === i) {
    return "";
  }
  l = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var h = s[l];
  if (!n) {
    n = Object.keys(i);
  }
  if (u.sort) {
    n.sort(u.sort);
  }
  for (var _ = r(), g = 0; g < n.length; ++g) {
    var v = n[g];
    if (!(u.skipNulls && null === i[v])) {
      f(d, A(i[v], v, h, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, _));
    }
  }
  var m = d.join(u.delimiter);
  var y = !0 === u.addQueryPrefix ? "?" : "";
  if (u.charsetSentinel) {
    if ("iso-8859-1" === u.charset) {
      y += "utf8=%26%2310003%3B&";
    } else {
      y += "utf8=%E2%9C%93&";
    }
  }
  return m.length > 0 ? y + m : "";
};