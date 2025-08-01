"use strict";

(function (t) {
  var r = require("../../../../../../3200/494");
  var i = require("./2968");
  var a = require("./2969");
  var s = require("./2970").stdout;
  var o = require("./2971");
  var l = "win32" === t.platform && !(Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).TERM || "").toLowerCase().startsWith("xterm");
  var u = ["ansi", "ansi", "ansi256", "ansi16m"];
  var c = new Set(["gray"]);
  var p = Object.create(null);
  function f(e, t) {
    t = t || {};
    var n = s ? s.level : 0;
    e.level = void 0 === t.level ? n : t.level;
    e.enabled = "enabled" in t ? t.enabled : e.level > 0;
  }
  function d(e) {
    if (!this || !(this instanceof d) || this.template) {
      var t = {};
      f(t, e);
      t.template = function () {
        var e = [].slice.call(arguments);
        return k.apply(null, [t.template].concat(e));
      };
      Object.setPrototypeOf(t, d.prototype);
      Object.setPrototypeOf(t.template, t);
      t.template.constructor = d;
      return t.template;
    }
    f(this, e);
  }
  if (l) {
    a.blue.open = "\x1b[94m";
  }
  for (var h = function () {
      var e = m[y];
      a[e].closeRe = new RegExp(i(a[e].close), "g");
      p[e] = {
        get: function () {
          var t = a[e];
          return P.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
        }
      };
    }, y = 0, m = Object.keys(a); y < m.length; y++) {
    h();
  }
  p.visible = {
    get: function () {
      return P.call(this, this._styles || [], !0, "visible");
    }
  };
  a.color.closeRe = new RegExp(i(a.color.close), "g");
  for (var v = function () {
      var e = T[g];
      if (c.has(e)) {
        return "continue";
      }
      p[e] = {
        get: function () {
          var t = this.level;
          return function () {
            var n = a.color[u[t]][e].apply(null, arguments);
            var r = {
              open: n,
              close: a.color.close,
              closeRe: a.color.closeRe
            };
            return P.call(this, this._styles ? this._styles.concat(r) : [r], this._empty, e);
          };
        }
      };
    }, g = 0, T = Object.keys(a.color.ansi); g < T.length; g++) {
    v();
  }
  a.bgColor.closeRe = new RegExp(i(a.bgColor.close), "g");
  for (var b = function () {
      var e = E[S];
      if (c.has(e)) {
        return "continue";
      }
      var t = "bg" + e[0].toUpperCase() + e.slice(1);
      p[t] = {
        get: function () {
          var t = this.level;
          return function () {
            var n = a.bgColor[u[t]][e].apply(null, arguments);
            var r = {
              open: n,
              close: a.bgColor.close,
              closeRe: a.bgColor.closeRe
            };
            return P.call(this, this._styles ? this._styles.concat(r) : [r], this._empty, e);
          };
        }
      };
    }, S = 0, E = Object.keys(a.bgColor.ansi); S < E.length; S++) {
    b();
  }
  var x = Object.defineProperties(function () {}, p);
  function P(e, t, n) {
    var r = function e() {
      return A.apply(e, arguments);
    };
    r._styles = e;
    r._empty = t;
    var i = this;
    Object.defineProperty(r, "level", {
      enumerable: !0,
      get: function () {
        return i.level;
      },
      set: function (e) {
        i.level = e;
      }
    });
    Object.defineProperty(r, "enabled", {
      enumerable: !0,
      get: function () {
        return i.enabled;
      },
      set: function (e) {
        i.enabled = e;
      }
    });
    r.hasGrey = this.hasGrey || "gray" === n || "grey" === n;
    r.__proto__ = x;
    return r;
  }
  function A() {
    var e = arguments;
    var t = e.length;
    var n = String(arguments[0]);
    if (0 === t) {
      return "";
    }
    if (t > 1) {
      for (var i = 1; i < t; i++) {
        n += " " + e[i];
      }
    }
    if (!this.enabled || this.level <= 0 || !n) {
      return this._empty ? "" : n;
    }
    var s = a.dim.open;
    if (l && this.hasGrey) {
      a.dim.open = "";
    }
    var o;
    var u = r(this._styles.slice().reverse());
    try {
      for (u.s(); !(o = u.n()).done;) {
        var c = o.value;
        n = (n = c.open + n.replace(c.closeRe, c.open) + c.close).replace(/\r?\n/g, "".concat(c.close, "$&").concat(c.open));
      }
    } catch (p) {
      u.e(p);
    } finally {
      u.f();
    }
    a.dim.open = s;
    return n;
  }
  function k(e, t) {
    if (!Array.isArray(t)) {
      return [].slice.call(arguments, 1).join(" ");
    }
    for (var n = [].slice.call(arguments, 2), r = [t.raw[0]], i = 1; i < t.length; i++) {
      r.push(String(n[i - 1]).replace(/[{}\\]/g, "\\$&"));
      r.push(String(t.raw[i]));
    }
    return o(e, r.join(""));
  }
  Object.defineProperties(d.prototype, p);
  module.exports = d();
  module.exports.supportsColor = s;
  module.exports.default = module.exports;
}).call(this, require("../../../../../1187/368"));