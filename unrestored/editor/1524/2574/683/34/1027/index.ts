"use strict";

var r = require("./1979");
var i = require("./1980");
function o() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}
exports.parse = m;
exports.resolve = function (e, t) {
  return m(e, !1, !0).resolve(t);
};
exports.resolveObject = function (e, t) {
  return e ? m(e, !1, !0).resolveObject(t) : t;
};
exports.format = function (e) {
  if (i.isString(e)) {
    e = m(e);
  }
  return e instanceof o ? e.format() : o.prototype.format.call(e);
};
exports.Url = o;
var a = /^([a-z0-9.+-]+:)/i;
var s = /:[0-9]*$/;
var c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]);
var l = ["'"].concat(u);
var f = ["%", "/", "?", ";", "#"].concat(l);
var h = ["/", "?", "#"];
var d = /^[+a-z0-9A-Z_-]{0,63}$/;
var p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var _ = {
  javascript: !0,
  "javascript:": !0
};
var A = {
  javascript: !0,
  "javascript:": !0
};
var g = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
var v = require("./1981/index");
function m(e, t, n) {
  if (e && i.isObject(e) && e instanceof o) {
    return e;
  }
  var r = new o();
  r.parse(e, t, n);
  return r;
}
o.prototype.parse = function (e, t, n) {
  if (!i.isString(e)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  }
  var o = e.indexOf("?");
  var s = -1 !== o && o < e.indexOf("#") ? "?" : "#";
  var u = e.split(s);
  u[0] = u[0].replace(/\\/g, "/");
  var m = e = u.join(s);
  if (m = m.trim(), !n && 1 === e.split("#").length) {
    var y = c.exec(m);
    if (y) {
      this.path = m;
      this.href = m;
      this.pathname = y[1];
      if (y[2]) {
        this.search = y[2];
        this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1);
      } else {
        if (t) {
          this.search = "";
          this.query = {};
        }
      }
      return this;
    }
  }
  var b = a.exec(m);
  if (b) {
    var w = (b = b[0]).toLowerCase();
    this.protocol = w;
    m = m.substr(b.length);
  }
  if (n || b || m.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var E = "//" === m.substr(0, 2);
    if (!(!E || b && A[b])) {
      m = m.substr(2);
      this.slashes = !0;
    }
  }
  if (!A[b] && (E || b && !g[b])) {
    for (var x, C, O = -1, S = 0; S < h.length; S++) {
      if (-1 !== (k = m.indexOf(h[S])) && (-1 === O || k < O)) {
        O = k;
      }
    }
    if (-1 !== (C = -1 === O ? m.lastIndexOf("@") : m.lastIndexOf("@", O))) {
      x = m.slice(0, C);
      m = m.slice(C + 1);
      this.auth = decodeURIComponent(x);
    }
    O = -1;
    for (S = 0; S < f.length; S++) {
      var k;
      if (-1 !== (k = m.indexOf(f[S])) && (-1 === O || k < O)) {
        O = k;
      }
    }
    if (-1 === O) {
      O = m.length;
    }
    this.host = m.slice(0, O);
    m = m.slice(O);
    this.parseHost();
    this.hostname = this.hostname || "";
    var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!T) {
      for (S = 0, B = this.hostname.split(/\./), D = B.length, void 0; S < D; S++) {
        var B;
        var D;
        var I = B[S];
        if (I && !I.match(d)) {
          for (var F = "", R = 0, P = I.length; R < P; R++) {
            if (I.charCodeAt(R) > 127) {
              F += "x";
            } else {
              F += I[R];
            }
          }
          if (!F.match(d)) {
            var N = B.slice(0, S);
            var M = B.slice(S + 1);
            var j = I.match(p);
            if (j) {
              N.push(j[1]);
              M.unshift(j[2]);
            }
            if (M.length) {
              m = "/" + M.join(".") + m;
            }
            this.hostname = N.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > 255) {
      this.hostname = "";
    } else {
      this.hostname = this.hostname.toLowerCase();
    }
    if (!T) {
      this.hostname = r.toASCII(this.hostname);
    }
    var L = this.port ? ":" + this.port : "";
    var U = this.hostname || "";
    this.host = U + L;
    this.href += this.host;
    if (T) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if ("/" !== m[0]) {
        m = "/" + m;
      }
    }
  }
  if (!_[w]) {
    for (S = 0, D = l.length; S < D; S++) {
      var H = l[S];
      if (-1 !== m.indexOf(H)) {
        var V = encodeURIComponent(H);
        if (V === H) {
          V = escape(H);
        }
        m = m.split(H).join(V);
      }
    }
  }
  var G = m.indexOf("#");
  if (-1 !== G) {
    this.hash = m.substr(G);
    m = m.slice(0, G);
  }
  var z = m.indexOf("?");
  if (-1 !== z ? (this.search = m.substr(z), this.query = m.substr(z + 1), t && (this.query = v.parse(this.query)), m = m.slice(0, z)) : t && (this.search = "", this.query = {}), m && (this.pathname = m), g[w] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    L = this.pathname || "";
    var Q = this.search || "";
    this.path = L + Q;
  }
  this.href = this.format();
  return this;
};
o.prototype.format = function () {
  var e = this.auth || "";
  if (e) {
    e = (e = encodeURIComponent(e)).replace(/%3A/i, ":");
    e += "@";
  }
  var t = this.protocol || "";
  var n = this.pathname || "";
  var r = this.hash || "";
  var o = !1;
  var a = "";
  if (this.host) {
    o = e + this.host;
  } else {
    if (this.hostname) {
      o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]");
      if (this.port) {
        o += ":" + this.port;
      }
    }
  }
  if (this.query && i.isObject(this.query) && Object.keys(this.query).length) {
    a = v.stringify(this.query);
  }
  var s = this.search || a && "?" + a || "";
  if (t && ":" !== t.substr(-1)) {
    t += ":";
  }
  if (this.slashes || (!t || g[t]) && !1 !== o) {
    o = "//" + (o || "");
    if (n && "/" !== n.charAt(0)) {
      n = "/" + n;
    }
  } else {
    if (!o) {
      o = "";
    }
  }
  if (r && "#" !== r.charAt(0)) {
    r = "#" + r;
  }
  if (s && "?" !== s.charAt(0)) {
    s = "?" + s;
  }
  return t + o + (n = n.replace(/[?#]/g, function (e) {
    return encodeURIComponent(e);
  })) + (s = s.replace("#", "%23")) + r;
};
o.prototype.resolve = function (e) {
  return this.resolveObject(m(e, !1, !0)).format();
};
o.prototype.resolveObject = function (e) {
  if (i.isString(e)) {
    var t = new o();
    t.parse(e, !1, !0);
    e = t;
  }
  for (var n = new o(), r = Object.keys(this), a = 0; a < r.length; a++) {
    var s = r[a];
    n[s] = this[s];
  }
  if (n.hash = e.hash, "" === e.href) {
    n.href = n.format();
    return n;
  }
  if (e.slashes && !e.protocol) {
    for (var c = Object.keys(e), u = 0; u < c.length; u++) {
      var l = c[u];
      if ("protocol" !== l) {
        n[l] = e[l];
      }
    }
    if (g[n.protocol] && n.hostname && !n.pathname) {
      n.path = n.pathname = "/";
    }
    n.href = n.format();
    return n;
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!g[e.protocol]) {
      for (var f = Object.keys(e), h = 0; h < f.length; h++) {
        var d = f[h];
        n[d] = e[d];
      }
      n.href = n.format();
      return n;
    }
    if (n.protocol = e.protocol, e.host || A[e.protocol]) {
      n.pathname = e.pathname;
    } else {
      for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift());) {
        ;
      }
      if (!e.host) {
        e.host = "";
      }
      if (!e.hostname) {
        e.hostname = "";
      }
      if ("" !== p[0]) {
        p.unshift("");
      }
      if (p.length < 2) {
        p.unshift("");
      }
      n.pathname = p.join("/");
    }
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var _ = n.pathname || "";
      var v = n.search || "";
      n.path = _ + v;
    }
    n.slashes = n.slashes || e.slashes;
    n.href = n.format();
    return n;
  }
  var m = n.pathname && "/" === n.pathname.charAt(0);
  var y = e.host || e.pathname && "/" === e.pathname.charAt(0);
  var b = y || m || n.host && e.pathname;
  var w = b;
  var E = n.pathname && n.pathname.split("/") || [];
  p = e.pathname && e.pathname.split("/") || [];
  var x = n.protocol && !g[n.protocol];
  if (x && (n.hostname = "", n.port = null, n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), b = b && ("" === p[0] || "" === E[0])), y) {
    n.host = e.host || "" === e.host ? e.host : n.host;
    n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname;
    n.search = e.search;
    n.query = e.query;
    E = p;
  } else if (p.length) {
    if (!E) {
      E = [];
    }
    E.pop();
    E = E.concat(p);
    n.search = e.search;
    n.query = e.query;
  } else if (!i.isNullOrUndefined(e.search)) {
    if (x) {
      n.hostname = n.host = E.shift();
      if (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) {
        n.auth = T.shift();
        n.host = n.hostname = T.shift();
      }
    }
    n.search = e.search;
    n.query = e.query;
    if (!(i.isNull(n.pathname) && i.isNull(n.search))) {
      n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "");
    }
    n.href = n.format();
    return n;
  }
  if (!E.length) {
    n.pathname = null;
    if (n.search) {
      n.path = "/" + n.search;
    } else {
      n.path = null;
    }
    n.href = n.format();
    return n;
  }
  for (var C = E.slice(-1)[0], O = (n.host || e.host || E.length > 1) && ("." === C || ".." === C) || "" === C, S = 0, k = E.length; k >= 0; k--) {
    if ("." === (C = E[k])) {
      E.splice(k, 1);
    } else {
      if (".." === C) {
        E.splice(k, 1);
        S++;
      } else {
        if (S) {
          E.splice(k, 1);
          S--;
        }
      }
    }
  }
  if (!b && !w) {
    for (; S--; S) {
      E.unshift("..");
    }
  }
  if (!(!b || "" === E[0] || E[0] && "/" === E[0].charAt(0))) {
    E.unshift("");
  }
  if (O && "/" !== E.join("/").substr(-1)) {
    E.push("");
  }
  var T;
  var B = "" === E[0] || E[0] && "/" === E[0].charAt(0);
  if (x) {
    n.hostname = n.host = B ? "" : E.length ? E.shift() : "";
    if (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) {
      n.auth = T.shift();
      n.host = n.hostname = T.shift();
    }
  }
  if ((b = b || n.host && E.length) && !B) {
    E.unshift("");
  }
  if (E.length) {
    n.pathname = E.join("/");
  } else {
    n.pathname = null;
    n.path = null;
  }
  if (!(i.isNull(n.pathname) && i.isNull(n.search))) {
    n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "");
  }
  n.auth = e.auth || n.auth;
  n.slashes = n.slashes || e.slashes;
  n.href = n.format();
  return n;
};
o.prototype.parseHost = function () {
  var e = this.host;
  var t = s.exec(e);
  if (t) {
    if (":" !== (t = t[0])) {
      this.port = t.substr(1);
    }
    e = e.substr(0, e.length - t.length);
  }
  if (e) {
    this.hostname = e;
  }
};