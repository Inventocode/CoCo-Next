"use strict";

import * as r from "../1138";
var i = Object.prototype.hasOwnProperty;
var o = Array.isArray;
var a = function () {
  for (var e = [], t = 0; t < 256; ++t) {
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  }
  return e;
}();
var s = function (e, t) {
  for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) {
    if ("undefined" !== typeof e[r]) {
      n[r] = e[r];
    }
  }
  return n;
};
module.exports = {
  arrayToObject: s,
  assign: function (e, t) {
    return Object.keys(t).reduce(function (e, n) {
      e[n] = t[n];
      return e;
    }, e);
  },
  combine: function (e, t) {
    return [].concat(e, t);
  },
  compact: function (e) {
    for (var t = [{
        obj: {
          o: e
        },
        prop: "o"
      }], n = [], r = 0; r < t.length; ++r) {
      for (var i = t[r], a = i.obj[i.prop], s = Object.keys(a), c = 0; c < s.length; ++c) {
        var u = s[c];
        var l = a[u];
        if ("object" === typeof l && null !== l && -1 === n.indexOf(l)) {
          t.push({
            obj: a,
            prop: u
          });
          n.push(l);
        }
      }
    }
    (function (e) {
      for (; e.length > 1;) {
        var t = e.pop();
        var n = t.obj[t.prop];
        if (o(n)) {
          for (var r = [], i = 0; i < n.length; ++i) {
            if ("undefined" !== typeof n[i]) {
              r.push(n[i]);
            }
          }
          t.obj[t.prop] = r;
        }
      }
    })(t);
    return e;
  },
  decode: function (e, t, n) {
    var r = e.replace(/\+/g, " ");
    if ("iso-8859-1" === n) {
      return r.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(r);
    } catch (i) {
      return r;
    }
  },
  encode: function (e, t, n, i, o) {
    if (0 === e.length) {
      return e;
    }
    var s = e;
    if ("symbol" === typeof e ? s = Symbol.prototype.toString.call(e) : "string" !== typeof e && (s = String(e)), "iso-8859-1" === n) {
      return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
        return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
      });
    }
    for (var c = "", u = 0; u < s.length; ++u) {
      var l = s.charCodeAt(u);
      if (45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || o === r.RFC1738 && (40 === l || 41 === l)) {
        c += s.charAt(u);
      } else {
        if (l < 128) {
          c += a[l];
        } else {
          if (l < 2048) {
            c += a[192 | l >> 6] + a[128 | 63 & l];
          } else {
            if (l < 55296 || l >= 57344) {
              c += a[224 | l >> 12] + a[128 | l >> 6 & 63] + a[128 | 63 & l];
            } else {
              u += 1;
              l = 65536 + ((1023 & l) << 10 | 1023 & s.charCodeAt(u));
              c += a[240 | l >> 18] + a[128 | l >> 12 & 63] + a[128 | l >> 6 & 63] + a[128 | 63 & l];
            }
          }
        }
      }
    }
    return c;
  },
  isBuffer: function (e) {
    return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  },
  isRegExp: function (e) {
    return "[object RegExp]" === Object.prototype.toString.call(e);
  },
  maybeMap: function (e, t) {
    if (o(e)) {
      for (var n = [], r = 0; r < e.length; r += 1) {
        n.push(t(e[r]));
      }
      return n;
    }
    return t(e);
  },
  merge: function e(t, n, r) {
    if (!n) {
      return t;
    }
    if ("object" !== typeof n) {
      if (o(t)) {
        t.push(n);
      } else {
        if (!t || "object" !== typeof t) {
          return [t, n];
        }
        if (r && (r.plainObjects || r.allowPrototypes) || !i.call(Object.prototype, n)) {
          t[n] = !0;
        }
      }
      return t;
    }
    if (!t || "object" !== typeof t) {
      return [t].concat(n);
    }
    var a = t;
    if (o(t) && !o(n)) {
      a = s(t, r);
    }
    return o(t) && o(n) ? (n.forEach(function (n, o) {
      if (i.call(t, o)) {
        var a = t[o];
        if (a && "object" === typeof a && n && "object" === typeof n) {
          t[o] = e(a, n, r);
        } else {
          t.push(n);
        }
      } else {
        t[o] = n;
      }
    }), t) : Object.keys(n).reduce(function (t, o) {
      var a = n[o];
      if (i.call(t, o)) {
        t[o] = e(t[o], a, r);
      } else {
        t[o] = a;
      }
      return t;
    }, a);
  }
};