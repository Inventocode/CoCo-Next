"use strict";

export { o as f };
export { a as t };
export { s as c };
export { c as g };
export { u as d };
export { l as p };
export { f as r };
export { d as q };
export { h as u };
export { p as v };
export { _ as b };
export { A as i };
export { g as h };
export { v as j };
export { m as l };
export { y as m };
export { b as k };
export { w as o };
export { E as s };
export { x as e };
export { C as a };
export { O as w };
export { k as n };
import r = require("./34/index");
import i = require("../107");
function o(e) {
  return {
    width: Math.floor(.7 * e.width),
    height: Math.floor(.7 * e.height)
  };
}
function a(e) {
  return new r.o(Math.floor(.7 * e.x), Math.floor(.7 * e.y));
}
function s(e) {
  return new r.o(Math.floor(e.x / .7), Math.floor(e.y / .7));
}
function c(e, t) {
  var n = new r.l();
  n.tx = -Math.floor(.7 * (e.x + t.width / 2));
  n.ty = -Math.floor(.7 * (e.y + t.height / 2));
  n.a = n.d = .7;
  return n;
}
function u(e, t) {
  return l(new r.o(t.x - e.pivot.x * e.scale.x, t.y - e.pivot.y * e.scale.y), t, e.rotation);
}
function l(e, t, n) {
  var i = e.x - t.x;
  var o = e.y - t.y;
  var a = Math.cos(n);
  var s = Math.sin(n);
  var c = a * i - o * s + t.x;
  var u = a * o + i * s + t.y;
  return new r.o(c, u);
}
function f(e, t) {
  var n = l(u(t, t.position), t.position, -t.rotation);
  var i = l(e, t.position, -t.rotation);
  var o = t.scale.x > 0 ? i.x - n.x + t.width / 2 : i.x - n.x - t.width / 2;
  var a = t.scale.y > 0 ? i.y - n.y + t.height / 2 : i.y - n.y - t.height / 2;
  return new r.o(Math.round(o / t.scale.x), Math.round(a / t.scale.y));
}
function d(e, t) {
  var n = new r.o(t.position.x - t.pivot.x * t.scale.x, t.position.y - t.pivot.y * t.scale.y);
  var i = e.x * t.scale.x;
  var o = e.y * t.scale.y;
  var a = t.scale.x > 0 ? i + n.x - t.width / 2 : i + n.x + t.width / 2;
  var s = t.scale.y > 0 ? o + n.y - t.height / 2 : o + n.y + t.height / 2;
  var c = l(new r.o(a, s), t.position, t.rotation);
  return new r.o(c.x, c.y);
}
function h(e, t) {
  if (0 === e && 0 === t) {
    return 0;
  }
  var n = Math.pow(e * e + t * t, .5);
  var r = Math.asin(t / n);
  if (e < 0) {
    r = r > 0 ? Math.PI - r : -Math.PI - r;
  }
  return r < 0 ? r + 2 * Math.PI : r;
}
function p(e) {
  return 180 * e / Math.PI;
}
function _(e) {
  return e * Math.PI / 180;
}
function A(e) {
  var t = parseInt(e, 16);
  return [t >> 16 & 255, t >> 8 & 255, 255 & t];
}
function g(e) {
  var t = A(e);
  return function (e, t, n) {
    e /= 255;
    t /= 255;
    n /= 255;
    var r;
    var i;
    var o = Math.max(e, t, n);
    var a = Math.min(e, t, n);
    var s = (o + a) / 2;
    if (o === a) {
      r = i = 0;
    } else {
      var c = o - a;
      switch (i = s > .5 ? c / (2 - o - a) : c / (o + a), o) {
        case e:
          r = (t - n) / c + (t < n ? 6 : 0);
          break;
        case t:
          r = (n - e) / c + 2;
          break;
        case n:
          r = (e - t) / c + 4;
          break;
        default:
          r = 0;
      }
      r /= 6;
    }
    return [r *= 360, i, s];
  }(t[0], t[1], t[2]);
}
function v(e, t, n) {
  var r;
  var i;
  var o;
  var a = function (e, t, n) {
    var r;
    var i;
    var o;
    e /= 360;
    if (0 === t) {
      r = i = o = n;
    } else {
      var a = function (e, t, n) {
        if (n < 0) {
          n += 1;
        }
        if (n > 1) {
          n -= 1;
        }
        return n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
      };
      var s = n < .5 ? n * (1 + t) : n + t - n * t;
      var c = 2 * n - s;
      var u = e;
      var l = e - 1 / 3;
      r = a(c, s, e + 1 / 3);
      i = a(c, s, u);
      o = a(c, s, l);
    }
    return [Math.round(255 * r), Math.round(255 * i), Math.round(255 * o)];
  }(e, t, n);
  r = a[0];
  i = a[1];
  o = a[2];
  return ("00000" + (r << 16 | i << 8 | o).toString(16)).slice(-6);
}
function m(e) {
  return !(!e || !e.type) && e.type === i.d.Actor;
}
function y(e) {
  return !(!e || !e.type) && e.type === i.d.Scene;
}
function b(e) {
  return !(!e || !e.type) && e.type === i.c.ActorWrapper;
}
function w(e) {
  return e.type.startsWith("touch");
}
function E(e) {
  var t = 2 * Math.PI;
  var n = Math.abs(e);
  n = n > t ? n % t : n;
  return n = (n = (e < 0 ? -1 : 1) < 0 ? t - n : n) > Math.PI ? n - t : n;
}
function x(e, t) {
  if (0 !== e.width && 0 !== e.height) {
    var n = Math.min(t.width / e.width, t.height / e.height);
    return n > 1 ? 1 : n;
  }
}
var C = 16;
function O(e, t) {
  var n = Date.now();
  return function () {
    for (var r = [], i = 0; i < arguments.length; i++) {
      r[i] = arguments[i];
    }
    var o = Date.now();
    if (o - n >= t) {
      e.apply(undefined, r);
      n = o;
    }
  };
}
function k(e, t) {
  var n = t.width / 2;
  var r = t.height / 2;
  return !(e.x < -n || e.x > n || e.y < -r || e.y > r);
}
export default C;