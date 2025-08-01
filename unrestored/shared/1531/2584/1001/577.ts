"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.hsva_to_rgba = exports.rgba_to_hex = exports.hsv_to_rgb = exports.rgb_to_hsv = exports.darken = exports.Color = void 0;
var r = require("../125/294");
var i = function () {
  function e(e, t, n) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
    if (!this.set(e) && t) {
      console.warn(n || "Cannot init Color with " + e + ", using " + t + ". ");
      this.set(t);
    }
  }
  e.prototype.set = function (e) {
    return "undefined" !== typeof e && ("string" === typeof e ? this._set(e) : (this.copy(e), !0));
  };
  e.prototype._set = function (e) {
    var t = (e = String(e).toLowerCase().trim()).match(/^(?:rgb|rgba)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*(\d*\.?\d+)\s*)?\)$/);
    if (t) {
      var n = Math.round(Number(t[1]));
      var r = Math.round(Number(t[2]));
      var i = Math.round(Number(t[3]));
      var o = void 0 === t[5] ? 1 : Number(t[5]);
      return !(n < 0 || n > 255 || r < 0 || r > 255 || i < 0 || i > 255 || o < 0 || o > 1) && (this.r = n, this.g = r, this.b = i, this.a = o, !0);
    }
    var a = this.normalize_hexa(e);
    if (a) {
      n = parseInt(a.substr(1, 2), 16);
      r = parseInt(a.substr(3, 2), 16);
      i = parseInt(a.substr(5, 2), 16);
      o = parseInt(a.substr(7, 2), 16) / 255;
      return !(n < 0 || n > 255 || r < 0 || r > 255 || i < 0 || i > 255 || o < 0 || o > 1) && (this.r = n, this.g = r, this.b = i, this.a = o, !0);
    }
    return !1;
  };
  e.prototype.normalize_hexa = function (e) {
    if (e = "0x" == e.substring(0, 2) ? "#" + e.substring(2) : e, /^#(?:[0-9a-f]{3}){1,2}$/i.test(e) || /^#(?:[0-9a-f]{4}){1,2}$/i.test(e)) {
      if (5 === e.length) {
        e = e.replace(/#(.)(.)(.)(.)/, "#$1$1$2$2$3$3$4$4");
      }
      if (4 === e.length) {
        e = e.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3ff");
      }
      if (7 === e.length) {
        e += "ff";
      }
      return e.toLowerCase();
    }
  };
  e.prototype.toString = function () {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
  };
  e.prototype.clone = function () {
    var t = new e();
    t.r = this.r;
    t.g = this.g;
    t.b = this.b;
    t.a = this.a;
    return t;
  };
  e.prototype.copy = function (e) {
    this.r = e.r;
    this.g = e.g;
    this.b = e.b;
    this.a = e.a;
    return this;
  };
  e.prototype.blend = function (e) {
    var t = 1 - (1 - this.a) * (1 - e.a);
    this.r = Math.round(e.r * e.a / t + this.r * this.a * (1 - e.a) / t);
    this.g = Math.round(e.g * e.a / t + this.g * this.a * (1 - e.a) / t);
    this.b = Math.round(e.b * e.a / t + this.b * this.a * (1 - e.a) / t);
    this.a = t;
    return this;
  };
  e.prototype.equals = function (t) {
    if (!(t && "string" !== typeof t)) {
      t = new e(t);
    }
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  };
  return e;
}();
exports.Color = i;
var o = new i("#000");
exports.darken = function (e, t, n) {
  o.a = (0, r.clamp)(t, 0, 1);
  return ((null === n || void 0 === n ? void 0 : n.copy(e)) || e.clone()).blend(o);
};
exports.rgb_to_hsv = function (e, t, n) {
  var r = e / 255;
  var i = t / 255;
  var o = n / 255;
  var a = Math.max(r, i, o);
  var s = Math.min(r, i, o);
  var c = a - s;
  var u = 0 === a ? 0 : c / a;
  var l = a;
  var f = a;
  if (a === s) {
    f = 0;
  } else {
    switch (a) {
      case r:
        f = (i - o) / c + (i < o ? 6 : 0);
        break;
      case i:
        f = (o - r) / c + 2;
        break;
      case o:
        f = (r - i) / c + 4;
    }
    f /= 6;
  }
  return {
    h: Math.round(360 * f),
    s: Math.round(1e3 * u / 10),
    v: Math.round(1e3 * l / 10)
  };
};
exports.hsv_to_rgb = function (e) {
  var t = e.h / 360;
  var n = e.s / 100;
  var r = e.v / 100;
  var i = 0;
  var o = 0;
  var a = 0;
  var s = Math.floor(6 * t);
  var c = 6 * t - s;
  var u = r * (1 - n);
  var l = r * (1 - c * n);
  var f = r * (1 - (1 - c) * n);
  switch (s % 6) {
    case 0:
      i = r;
      o = f;
      a = u;
      break;
    case 1:
      i = l;
      o = r;
      a = u;
      break;
    case 2:
      i = u;
      o = r;
      a = f;
      break;
    case 3:
      i = u;
      o = l;
      a = r;
      break;
    case 4:
      i = f;
      o = u;
      a = r;
      break;
    case 5:
      i = r;
      o = u;
      a = l;
  }
  return [Math.round(255 * i), Math.round(255 * o), Math.round(255 * a)];
};
exports.rgba_to_hex = function (e) {
  var t = (256 | e.r).toString(16).slice(1) + (256 | e.g).toString(16).slice(1) + (256 | e.b).toString(16).slice(1);
  return 1 === e.a ? "#" + t : "#" + (t += (255 * e.a | 256).toString(16).slice(1));
};
exports.hsva_to_rgba = function (e) {
  var t = e.h / 360;
  var n = e.s / 100;
  var r = e.v / 100;
  var i = 0;
  var o = 0;
  var a = 0;
  var s = Math.floor(6 * t);
  var c = 6 * t - s;
  var u = r * (1 - n);
  var l = r * (1 - c * n);
  var f = r * (1 - (1 - c) * n);
  switch (s % 6) {
    case 0:
      i = r;
      o = f;
      a = u;
      break;
    case 1:
      i = l;
      o = r;
      a = u;
      break;
    case 2:
      i = u;
      o = r;
      a = f;
      break;
    case 3:
      i = u;
      o = l;
      a = r;
      break;
    case 4:
      i = f;
      o = u;
      a = r;
      break;
    case 5:
      i = r;
      o = u;
      a = l;
  }
  return {
    r: Math.round(255 * i),
    g: Math.round(255 * o),
    b: Math.round(255 * a),
    a: e.a
  };
};