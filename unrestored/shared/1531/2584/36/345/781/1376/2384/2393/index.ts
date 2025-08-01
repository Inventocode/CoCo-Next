"use strict";

var r = require("./1388");
var i = Object.prototype.hasOwnProperty;
var o = Array.isArray;
var a = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: r.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
};
var s = function (e) {
  return e.replace(/&#(\d+);/g, function (e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
};
var c = function (e, t) {
  return e && "string" === typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
};
var u = function (e, t, n, r) {
  if (e) {
    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e;
    var a = /(\[[^[\]]*])/g;
    var s = n.depth > 0 && /(\[[^[\]]*])/.exec(o);
    var u = s ? o.slice(0, s.index) : o;
    var l = [];
    if (u) {
      if (!n.plainObjects && i.call(Object.prototype, u) && !n.allowPrototypes) {
        return;
      }
      l.push(u);
    }
    for (var f = 0; n.depth > 0 && null !== (s = a.exec(o)) && f < n.depth;) {
      if (f += 1, !n.plainObjects && i.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) {
        return;
      }
      l.push(s[1]);
    }
    if (s) {
      l.push("[" + o.slice(s.index) + "]");
    }
    return function (e, t, n, r) {
      for (var i = r ? t : c(t, n), o = e.length - 1; o >= 0; --o) {
        var a;
        var s = e[o];
        if ("[]" === s && n.parseArrays) {
          a = [].concat(i);
        } else {
          a = n.plainObjects ? Object.create(null) : {};
          var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s;
          var l = parseInt(u, 10);
          if (n.parseArrays || "" !== u) {
            if (!isNaN(l) && s !== u && String(l) === u && l >= 0 && n.parseArrays && l <= n.arrayLimit) {
              (a = [])[l] = i;
            } else {
              a[u] = i;
            }
          } else {
            a = {
              0: i
            };
          }
        }
        i = a;
      }
      return i;
    }(l, t, n, r);
  }
};
module.exports = function (e, t) {
  var n = function (e) {
    if (!e) {
      return a;
    }
    if (null !== e.decoder && void 0 !== e.decoder && "function" !== typeof e.decoder) {
      throw new TypeError("Decoder has to be a function.");
    }
    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var t = "undefined" === typeof e.charset ? a.charset : e.charset;
    return {
      allowDots: "undefined" === typeof e.allowDots ? a.allowDots : !!e.allowDots,
      allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
      allowSparse: "boolean" === typeof e.allowSparse ? e.allowSparse : a.allowSparse,
      arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
      comma: "boolean" === typeof e.comma ? e.comma : a.comma,
      decoder: "function" === typeof e.decoder ? e.decoder : a.decoder,
      delimiter: "string" === typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
      depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
      parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
      parseArrays: !1 !== e.parseArrays,
      plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : a.plainObjects,
      strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
    };
  }(t);
  if ("" === e || null === e || "undefined" === typeof e) {
    return n.plainObjects ? Object.create(null) : {};
  }
  for (var l = "string" === typeof e ? function (e, t) {
      var n;
      var u = {};
      var l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
      var f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit;
      var d = l.split(t.delimiter, f);
      var h = -1;
      var p = t.charset;
      if (t.charsetSentinel) {
        for (n = 0; n < d.length; ++n) {
          if (0 === d[n].indexOf("utf8=")) {
            if ("utf8=%E2%9C%93" === d[n]) {
              p = "utf-8";
            } else {
              if ("utf8=%26%2310003%3B" === d[n]) {
                p = "iso-8859-1";
              }
            }
            h = n;
            n = d.length;
          }
        }
      }
      for (n = 0; n < d.length; ++n) {
        if (n !== h) {
          var _;
          var A;
          var g = d[n];
          var v = g.indexOf("]=");
          var m = -1 === v ? g.indexOf("=") : v + 1;
          if (-1 === m) {
            _ = t.decoder(g, a.decoder, p, "key");
            A = t.strictNullHandling ? null : "";
          } else {
            _ = t.decoder(g.slice(0, m), a.decoder, p, "key");
            A = r.maybeMap(c(g.slice(m + 1), t), function (e) {
              return t.decoder(e, a.decoder, p, "value");
            });
          }
          if (A && t.interpretNumericEntities && "iso-8859-1" === p) {
            A = s(A);
          }
          if (g.indexOf("[]=") > -1) {
            A = o(A) ? [A] : A;
          }
          if (i.call(u, _)) {
            u[_] = r.combine(u[_], A);
          } else {
            u[_] = A;
          }
        }
      }
      return u;
    }(e, n) : e, f = n.plainObjects ? Object.create(null) : {}, d = Object.keys(l), h = 0; h < d.length; ++h) {
    var p = d[h];
    var _ = u(p, l[p], n, "string" === typeof e);
    f = r.merge(f, _, n);
  }
  return !0 === n.allowSparse ? f : r.compact(f);
};