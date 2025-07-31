"use strict";

require("../1242");
var r;
var o = require("../1626/86/index");
var i = require("./272");
var a = require("./1249");
var s = require("./194");
var c = require("./1209");
var l = require("./398");
var u = require("./635");
var d = require("./332");
var p = require("./1230");
var f = require("./1214/index");
var h = require("./945").codeAt;
var m = require("./1739");
var g = require("./310");
var _ = require("./531");
var v = require("../1250/index");
var b = require("./423/index");
var y = s.URL;
var E = v.URLSearchParams;
var O = v.getState;
var w = b.set;
var C = b.getterFor("URL");
var T = Math.floor;
var S = Math.pow;
var I = /[A-Za-z]/;
var A = /[\d+-.A-Za-z]/;
var j = /\d/;
var N = /^0x/i;
var R = /^[0-7]+$/;
var k = /^\d+$/;
var x = /^[\dA-Fa-f]+$/;
var D = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var M = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var L = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var P = /[\t\n\r]/g;
var B = function (e, t) {
  var n;
  var r;
  var o;
  if ("[" == t.charAt(0)) {
    if ("]" != t.charAt(t.length - 1)) {
      return "Invalid host";
    }
    if (!(n = G(t.slice(1, -1)))) {
      return "Invalid host";
    }
    e.host = n;
  } else if (q(e)) {
    if (t = m(t), D.test(t)) {
      return "Invalid host";
    }
    if (null === (n = F(t))) {
      return "Invalid host";
    }
    e.host = n;
  } else {
    if (M.test(t)) {
      return "Invalid host";
    }
    for (n = "", r = f(t), o = 0; o < r.length; o++) {
      n += Y(r[o], W);
    }
    e.host = n;
  }
};
var F = function (e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c = e.split(".");
  if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) {
    return e;
  }
  for (n = [], r = 0; r < t; r++) {
    if ("" == (o = c[r])) {
      return e;
    }
    if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = N.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) {
      a = 0;
    } else {
      if (!(10 == i ? k : 8 == i ? R : x).test(o)) {
        return e;
      }
      a = parseInt(o, i);
    }
    n.push(a);
  }
  for (r = 0; r < t; r++) {
    if (a = n[r], r == t - 1) {
      if (a >= S(256, 5 - t)) {
        return null;
      }
    } else if (a > 255) {
      return null;
    }
  }
  for (s = n.pop(), r = 0; r < n.length; r++) {
    s += n[r] * S(256, 3 - r);
  }
  return s;
};
var G = function (e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c = [0, 0, 0, 0, 0, 0, 0, 0];
  var l = 0;
  var u = null;
  var d = 0;
  var p = function () {
    return e.charAt(d);
  };
  if (":" == p()) {
    if (":" != e.charAt(1)) {
      return;
    }
    d += 2;
    u = ++l;
  }
  for (; p();) {
    if (8 == l) {
      return;
    }
    if (":" != p()) {
      for (t = n = 0; n < 4 && x.test(p());) {
        t = 16 * t + parseInt(p(), 16);
        d++;
        n++;
      }
      if ("." == p()) {
        if (0 == n) {
          return;
        }
        if (d -= n, l > 6) {
          return;
        }
        for (r = 0; p();) {
          if (o = null, r > 0) {
            if (!("." == p() && r < 4)) {
              return;
            }
            d++;
          }
          if (!j.test(p())) {
            return;
          }
          for (; j.test(p());) {
            if (i = parseInt(p(), 10), null === o) {
              o = i;
            } else {
              if (0 == o) {
                return;
              }
              o = 10 * o + i;
            }
            if (o > 255) {
              return;
            }
            d++;
          }
          c[l] = 256 * c[l] + o;
          if (!(2 != ++r && 4 != r)) {
            l++;
          }
        }
        if (4 != r) {
          return;
        }
        break;
      }
      if (":" == p()) {
        if (d++, !p()) {
          return;
        }
      } else if (p()) {
        return;
      }
      c[l++] = t;
    } else {
      if (null !== u) {
        return;
      }
      d++;
      u = ++l;
    }
  }
  if (null !== u) {
    for (a = l - u, l = 7; 0 != l && a > 0;) {
      s = c[l];
      c[l--] = c[u + a - 1];
      c[u + --a] = s;
    }
  } else if (8 != l) {
    return;
  }
  return c;
};
var U = function (e) {
  var t;
  var n;
  var r;
  var o;
  if ("number" == typeof e) {
    for (t = [], n = 0; n < 4; n++) {
      t.unshift(e % 256);
      e = T(e / 256);
    }
    return t.join(".");
  }
  if ("object" == typeof e) {
    for (t = "", r = function (e) {
      for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) {
        if (0 !== e[i]) {
          if (o > n) {
            t = r;
            n = o;
          }
          r = null;
          o = 0;
        } else {
          if (null === r) {
            r = i;
          }
          ++o;
        }
      }
      if (o > n) {
        t = r;
        n = o;
      }
      return t;
    }(e), n = 0; n < 8; n++) {
      if (!(o && 0 === e[n])) {
        if (o) {
          o = !1;
        }
        if (r === n) {
          t += n ? ":" : "::";
          o = !0;
        } else {
          t += e[n].toString(16);
          if (n < 7) {
            t += ":";
          }
        }
      }
    }
    return "[" + t + "]";
  }
  return e;
};
var W = {};
var H = p({}, W, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1
});
var V = p({}, H, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1
});
var z = p({}, V, {
  "/": 1,
  ":": 1,
  ";": 1,
  "=": 1,
  "@": 1,
  "[": 1,
  "\\": 1,
  "]": 1,
  "^": 1,
  "|": 1
});
var Y = function (e, t) {
  var n = h(e, 0);
  return n > 32 && n < 127 && !d(t, e) ? e : encodeURIComponent(e);
};
var K = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
var q = function (e) {
  return d(K, e.scheme);
};
var X = function (e) {
  return "" != e.username || "" != e.password;
};
var Q = function (e) {
  return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
};
var Z = function (e, t) {
  var n;
  return 2 == e.length && I.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n);
};
var J = function (e) {
  var t;
  return e.length > 1 && Z(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
};
var $ = function (e) {
  var t = e.path;
  var n = t.length;
  if (!(!n || "file" == e.scheme && 1 == n && Z(t[0], !0))) {
    t.pop();
  }
};
var ee = function (e) {
  return "." === e || "%2e" === e.toLowerCase();
};
var te = {};
var ne = {};
var re = {};
var oe = {};
var ie = {};
var ae = {};
var se = {};
var ce = {};
var le = {};
var ue = {};
var de = {};
var pe = {};
var fe = {};
var he = {};
var me = {};
var ge = {};
var _e = {};
var ve = {};
var be = {};
var ye = {};
var Ee = {};
var Oe = function (e, t, n, o) {
  var i;
  var a;
  var s;
  var c;
  var l;
  var u = n || te;
  var p = 0;
  var h = "";
  var m = !1;
  var g = !1;
  var _ = !1;
  for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(L, "")), t = t.replace(P, ""), i = f(t); p <= i.length;) {
    switch (a = i[p], u) {
      case te:
        if (!a || !I.test(a)) {
          if (n) {
            return "Invalid scheme";
          }
          u = re;
          continue;
        }
        h += a.toLowerCase();
        u = ne;
        break;
      case ne:
        if (a && (A.test(a) || "+" == a || "-" == a || "." == a)) {
          h += a.toLowerCase();
        } else {
          if (":" != a) {
            if (n) {
              return "Invalid scheme";
            }
            h = "";
            u = re;
            p = 0;
            continue;
          }
          if (n && (q(e) != d(K, h) || "file" == h && (X(e) || null !== e.port) || "file" == e.scheme && !e.host)) {
            return;
          }
          if (e.scheme = h, n) {
            return void (q(e) && K[e.scheme] == e.port && (e.port = null));
          }
          h = "";
          if ("file" == e.scheme) {
            u = he;
          } else {
            if (q(e) && o && o.scheme == e.scheme) {
              u = oe;
            } else {
              if (q(e)) {
                u = ce;
              } else {
                if ("/" == i[p + 1]) {
                  u = ie;
                  p++;
                } else {
                  e.cannotBeABaseURL = !0;
                  e.path.push("");
                  u = be;
                }
              }
            }
          }
        }
        break;
      case re:
        if (!o || o.cannotBeABaseURL && "#" != a) {
          return "Invalid scheme";
        }
        if (o.cannotBeABaseURL && "#" == a) {
          e.scheme = o.scheme;
          e.path = o.path.slice();
          e.query = o.query;
          e.fragment = "";
          e.cannotBeABaseURL = !0;
          u = Ee;
          break;
        }
        u = "file" == o.scheme ? he : ae;
        continue;
      case oe:
        if ("/" != a || "/" != i[p + 1]) {
          u = ae;
          continue;
        }
        u = le;
        p++;
        break;
      case ie:
        if ("/" == a) {
          u = ue;
          break;
        }
        u = ve;
        continue;
      case ae:
        if (e.scheme = o.scheme, a == r) {
          e.username = o.username;
          e.password = o.password;
          e.host = o.host;
          e.port = o.port;
          e.path = o.path.slice();
          e.query = o.query;
        } else if ("/" == a || "\\" == a && q(e)) {
          u = se;
        } else if ("?" == a) {
          e.username = o.username;
          e.password = o.password;
          e.host = o.host;
          e.port = o.port;
          e.path = o.path.slice();
          e.query = "";
          u = ye;
        } else {
          if ("#" != a) {
            e.username = o.username;
            e.password = o.password;
            e.host = o.host;
            e.port = o.port;
            e.path = o.path.slice();
            e.path.pop();
            u = ve;
            continue;
          }
          e.username = o.username;
          e.password = o.password;
          e.host = o.host;
          e.port = o.port;
          e.path = o.path.slice();
          e.query = o.query;
          e.fragment = "";
          u = Ee;
        }
        break;
      case se:
        if (!q(e) || "/" != a && "\\" != a) {
          if ("/" != a) {
            e.username = o.username;
            e.password = o.password;
            e.host = o.host;
            e.port = o.port;
            u = ve;
            continue;
          }
          u = ue;
        } else {
          u = le;
        }
        break;
      case ce:
        if (u = le, "/" != a || "/" != h.charAt(p + 1)) {
          continue;
        }
        p++;
        break;
      case le:
        if ("/" != a && "\\" != a) {
          u = ue;
          continue;
        }
        break;
      case ue:
        if ("@" == a) {
          if (m) {
            h = "%40" + h;
          }
          m = !0;
          s = f(h);
          for (var v = 0; v < s.length; v++) {
            var b = s[v];
            if (":" != b || _) {
              var y = Y(b, z);
              if (_) {
                e.password += y;
              } else {
                e.username += y;
              }
            } else {
              _ = !0;
            }
          }
          h = "";
        } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && q(e)) {
          if (m && "" == h) {
            return "Invalid authority";
          }
          p -= f(h).length + 1;
          h = "";
          u = de;
        } else {
          h += a;
        }
        break;
      case de:
      case pe:
        if (n && "file" == e.scheme) {
          u = ge;
          continue;
        }
        if (":" != a || g) {
          if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && q(e)) {
            if (q(e) && "" == h) {
              return "Invalid host";
            }
            if (n && "" == h && (X(e) || null !== e.port)) {
              return;
            }
            if (c = B(e, h)) {
              return c;
            }
            if (h = "", u = _e, n) {
              return;
            }
            continue;
          }
          if ("[" == a) {
            g = !0;
          } else {
            if ("]" == a) {
              g = !1;
            }
          }
          h += a;
        } else {
          if ("" == h) {
            return "Invalid host";
          }
          if (c = B(e, h)) {
            return c;
          }
          if (h = "", u = fe, n == pe) {
            return;
          }
        }
        break;
      case fe:
        if (!j.test(a)) {
          if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && q(e) || n) {
            if ("" != h) {
              var E = parseInt(h, 10);
              if (E > 65535) {
                return "Invalid port";
              }
              e.port = q(e) && E === K[e.scheme] ? null : E;
              h = "";
            }
            if (n) {
              return;
            }
            u = _e;
            continue;
          }
          return "Invalid port";
        }
        h += a;
        break;
      case he:
        if (e.scheme = "file", "/" == a || "\\" == a) {
          u = me;
        } else {
          if (!o || "file" != o.scheme) {
            u = ve;
            continue;
          }
          if (a == r) {
            e.host = o.host;
            e.path = o.path.slice();
            e.query = o.query;
          } else if ("?" == a) {
            e.host = o.host;
            e.path = o.path.slice();
            e.query = "";
            u = ye;
          } else {
            if ("#" != a) {
              if (!J(i.slice(p).join(""))) {
                e.host = o.host;
                e.path = o.path.slice();
                $(e);
              }
              u = ve;
              continue;
            }
            e.host = o.host;
            e.path = o.path.slice();
            e.query = o.query;
            e.fragment = "";
            u = Ee;
          }
        }
        break;
      case me:
        if ("/" == a || "\\" == a) {
          u = ge;
          break;
        }
        if (o && "file" == o.scheme && !J(i.slice(p).join(""))) {
          if (Z(o.path[0], !0)) {
            e.path.push(o.path[0]);
          } else {
            e.host = o.host;
          }
        }
        u = ve;
        continue;
      case ge:
        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
          if (!n && Z(h)) {
            u = ve;
          } else if ("" == h) {
            if (e.host = "", n) {
              return;
            }
            u = _e;
          } else {
            if (c = B(e, h)) {
              return c;
            }
            if ("localhost" == e.host && (e.host = ""), n) {
              return;
            }
            h = "";
            u = _e;
          }
          continue;
        }
        h += a;
        break;
      case _e:
        if (q(e)) {
          if (u = ve, "/" != a && "\\" != a) {
            continue;
          }
        } else if (n || "?" != a) {
          if (n || "#" != a) {
            if (a != r && (u = ve, "/" != a)) {
              continue;
            }
          } else {
            e.fragment = "";
            u = Ee;
          }
        } else {
          e.query = "";
          u = ye;
        }
        break;
      case ve:
        if (a == r || "/" == a || "\\" == a && q(e) || !n && ("?" == a || "#" == a)) {
          if (".." === (l = (l = h).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? ($(e), "/" == a || "\\" == a && q(e) || e.path.push("")) : ee(h) ? "/" == a || "\\" == a && q(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Z(h) && (e.host && (e.host = ""), h = h.charAt(0) + ":"), e.path.push(h)), h = "", "file" == e.scheme && (a == r || "?" == a || "#" == a)) {
            for (; e.path.length > 1 && "" === e.path[0];) {
              e.path.shift();
            }
          }
          if ("?" == a) {
            e.query = "";
            u = ye;
          } else {
            if ("#" == a) {
              e.fragment = "";
              u = Ee;
            }
          }
        } else {
          h += Y(a, V);
        }
        break;
      case be:
        if ("?" == a) {
          e.query = "";
          u = ye;
        } else {
          if ("#" == a) {
            e.fragment = "";
            u = Ee;
          } else {
            if (a != r) {
              e.path[0] += Y(a, W);
            }
          }
        }
        break;
      case ye:
        if (n || "#" != a) {
          if (a != r) {
            if ("'" == a && q(e)) {
              e.query += "%27";
            } else {
              e.query += "#" == a ? "%23" : Y(a, W);
            }
          }
        } else {
          e.fragment = "";
          u = Ee;
        }
        break;
      case Ee:
        if (a != r) {
          e.fragment += Y(a, H);
        }
    }
    p++;
  }
};
var we = function (e) {
  var t;
  var n;
  var r = u(this, we, "URL");
  var o = arguments.length > 1 ? arguments[1] : void 0;
  var a = g(e);
  var s = w(r, {
    type: "URL"
  });
  if (void 0 !== o) {
    if (o instanceof we) {
      t = C(o);
    } else if (n = Oe(t = {}, g(o))) {
      throw TypeError(n);
    }
  }
  if (n = Oe(s, a, null, t)) {
    throw TypeError(n);
  }
  var c = s.searchParams = new E();
  var l = O(c);
  l.updateSearchParams(s.query);
  l.updateURL = function () {
    s.query = String(c) || null;
  };
  if (!i) {
    r.href = Te.call(r);
    r.origin = Se.call(r);
    r.protocol = Ie.call(r);
    r.username = Ae.call(r);
    r.password = je.call(r);
    r.host = Ne.call(r);
    r.hostname = Re.call(r);
    r.port = ke.call(r);
    r.pathname = xe.call(r);
    r.search = De.call(r);
    r.searchParams = Me.call(r);
    r.hash = Le.call(r);
  }
};
var Ce = we.prototype;
var Te = function () {
  var e = C(this);
  var t = e.scheme;
  var n = e.username;
  var r = e.password;
  var o = e.host;
  var i = e.port;
  var a = e.path;
  var s = e.query;
  var c = e.fragment;
  var l = t + ":";
  if (null !== o) {
    l += "//";
    if (X(e)) {
      l += n + (r ? ":" + r : "") + "@";
    }
    l += U(o);
    if (null !== i) {
      l += ":" + i;
    }
  } else {
    if ("file" == t) {
      l += "//";
    }
  }
  l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "";
  if (null !== s) {
    l += "?" + s;
  }
  if (null !== c) {
    l += "#" + c;
  }
  return l;
};
var Se = function () {
  var e = C(this);
  var t = e.scheme;
  var n = e.port;
  if ("blob" == t) {
    try {
      return new we(t.path[0]).origin;
    } catch (r) {
      return "null";
    }
  }
  return "file" != t && q(e) ? t + "://" + U(e.host) + (null !== n ? ":" + n : "") : "null";
};
var Ie = function () {
  return C(this).scheme + ":";
};
var Ae = function () {
  return C(this).username;
};
var je = function () {
  return C(this).password;
};
var Ne = function () {
  var e = C(this);
  var t = e.host;
  var n = e.port;
  return null === t ? "" : null === n ? U(t) : U(t) + ":" + n;
};
var Re = function () {
  var e = C(this).host;
  return null === e ? "" : U(e);
};
var ke = function () {
  var e = C(this).port;
  return null === e ? "" : String(e);
};
var xe = function () {
  var e = C(this);
  var t = e.path;
  return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
};
var De = function () {
  var e = C(this).query;
  return e ? "?" + e : "";
};
var Me = function () {
  return C(this).searchParams;
};
var Le = function () {
  var e = C(this).fragment;
  return e ? "#" + e : "";
};
var Pe = function (e, t) {
  return {
    get: e,
    set: t,
    configurable: !0,
    enumerable: !0
  };
};
if (i && c(Ce, {
  href: Pe(Te, function (e) {
    var t = C(this);
    var n = g(e);
    var r = Oe(t, n);
    if (r) {
      throw TypeError(r);
    }
    O(t.searchParams).updateSearchParams(t.query);
  }),
  origin: Pe(Se),
  protocol: Pe(Ie, function (e) {
    var t = C(this);
    Oe(t, g(e) + ":", te);
  }),
  username: Pe(Ae, function (e) {
    var t = C(this);
    var n = f(g(e));
    if (!Q(t)) {
      t.username = "";
      for (var r = 0; r < n.length; r++) {
        t.username += Y(n[r], z);
      }
    }
  }),
  password: Pe(je, function (e) {
    var t = C(this);
    var n = f(g(e));
    if (!Q(t)) {
      t.password = "";
      for (var r = 0; r < n.length; r++) {
        t.password += Y(n[r], z);
      }
    }
  }),
  host: Pe(Ne, function (e) {
    var t = C(this);
    if (!t.cannotBeABaseURL) {
      Oe(t, g(e), de);
    }
  }),
  hostname: Pe(Re, function (e) {
    var t = C(this);
    if (!t.cannotBeABaseURL) {
      Oe(t, g(e), pe);
    }
  }),
  port: Pe(ke, function (e) {
    var t = C(this);
    if (!Q(t)) {
      if ("" == (e = g(e))) {
        t.port = null;
      } else {
        Oe(t, e, fe);
      }
    }
  }),
  pathname: Pe(xe, function (e) {
    var t = C(this);
    if (!t.cannotBeABaseURL) {
      t.path = [];
      Oe(t, g(e), _e);
    }
  }),
  search: Pe(De, function (e) {
    var t = C(this);
    if ("" == (e = g(e))) {
      t.query = null;
    } else {
      if ("?" == e.charAt(0)) {
        e = e.slice(1);
      }
      t.query = "";
      Oe(t, e, ye);
    }
    O(t.searchParams).updateSearchParams(t.query);
  }),
  searchParams: Pe(Me),
  hash: Pe(Le, function (e) {
    var t = C(this);
    if ("" != (e = g(e))) {
      if ("#" == e.charAt(0)) {
        e = e.slice(1);
      }
      t.fragment = "";
      Oe(t, e, Ee);
    } else {
      t.fragment = null;
    }
  })
}), l(Ce, "toJSON", function () {
  return Te.call(this);
}, {
  enumerable: !0
}), l(Ce, "toString", function () {
  return Te.call(this);
}, {
  enumerable: !0
}), y) {
  var Be = y.createObjectURL;
  var Fe = y.revokeObjectURL;
  if (Be) {
    l(we, "createObjectURL", function (e) {
      return Be.apply(y, arguments);
    });
  }
  if (Fe) {
    l(we, "revokeObjectURL", function (e) {
      return Fe.apply(y, arguments);
    });
  }
}
_(we, "URL");
o({
  global: !0,
  forced: !a,
  sham: !i
}, {
  URL: we
});