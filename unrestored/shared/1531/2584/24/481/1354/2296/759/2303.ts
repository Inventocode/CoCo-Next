var n;
var r;
var i;
var o = String.fromCharCode;
function a(e) {
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
function s(e, t) {
  if (e >= 55296 && e <= 57343) {
    if (t) {
      throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
    }
    return !1;
  }
  return !0;
}
function c(e, t) {
  return o(e >> t & 63 | 128);
}
function u(e, t) {
  if (0 == (4294967168 & e)) {
    return o(e);
  }
  var n = "";
  if (0 == (4294965248 & e)) {
    n = o(e >> 6 & 31 | 192);
  } else {
    if (0 == (4294901760 & e)) {
      if (!s(e, t)) {
        e = 65533;
      }
      n = o(e >> 12 & 15 | 224);
      n += c(e, 6);
    } else {
      if (0 == (4292870144 & e)) {
        n = o(e >> 18 & 7 | 240);
        n += c(e, 12);
        n += c(e, 6);
      }
    }
  }
  return n += o(63 & e | 128);
}
function l() {
  if (i >= r) {
    throw Error("Invalid byte index");
  }
  var e = 255 & n[i];
  if (i++, 128 == (192 & e)) {
    return 63 & e;
  }
  throw Error("Invalid continuation byte");
}
function f(e) {
  var t;
  var o;
  if (i > r) {
    throw Error("Invalid byte index");
  }
  if (i == r) {
    return !1;
  }
  if (t = 255 & n[i], i++, 0 == (128 & t)) {
    return t;
  }
  if (192 == (224 & t)) {
    if ((o = (31 & t) << 6 | l()) >= 128) {
      return o;
    }
    throw Error("Invalid continuation byte");
  }
  if (224 == (240 & t)) {
    if ((o = (15 & t) << 12 | l() << 6 | l()) >= 2048) {
      return s(o, e) ? o : 65533;
    }
    throw Error("Invalid continuation byte");
  }
  if (240 == (248 & t) && (o = (7 & t) << 18 | l() << 12 | l() << 6 | l()) >= 65536 && o <= 1114111) {
    return o;
  }
  throw Error("Invalid UTF-8 detected");
}
module.exports = {
  version: "2.1.2",
  encode: function (e, t) {
    for (var n = !1 !== (t = t || {}).strict, r = a(e), i = r.length, o = -1, s = ""; ++o < i;) {
      s += u(r[o], n);
    }
    return s;
  },
  decode: function (e, t) {
    var s = !1 !== (t = t || {}).strict;
    n = a(e);
    r = n.length;
    i = 0;
    for (var c, u = []; !1 !== (c = f(s));) {
      u.push(c);
    }
    return function (e) {
      for (var t, n = e.length, r = -1, i = ""; ++r < n;) {
        if ((t = e[r]) > 65535) {
          i += o((t -= 65536) >>> 10 & 1023 | 55296);
          t = 56320 | 1023 & t;
        }
        i += o(t);
      }
      return i;
    }(u);
  }
};