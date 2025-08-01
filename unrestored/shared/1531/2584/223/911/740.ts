"use strict";

export { a };
var r = require("./266");
var i = require("../../2627/285/912");
var o = require("../../2627/285/210");
function a(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  };
  var n = 1;
  var a = null;
  var s = null;
  var c = null;
  var u = !1;
  var d = !1;
  if ("string" === typeof e) {
    e = function (e) {
      if (0 === (e = e.trim().toLowerCase()).length) {
        return !1;
      }
      var t = !1;
      if (i.a[e]) {
        e = i.a[e];
        t = !0;
      } else if ("transparent" === e) {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
      }
      var n = l.rgb.exec(e);
      if (n) {
        return {
          r: n[1],
          g: n[2],
          b: n[3]
        };
      }
      if (n = l.rgba.exec(e)) {
        return {
          r: n[1],
          g: n[2],
          b: n[3],
          a: n[4]
        };
      }
      if (n = l.hsl.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          l: n[3]
        };
      }
      if (n = l.hsla.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          l: n[3],
          a: n[4]
        };
      }
      if (n = l.hsv.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          v: n[3]
        };
      }
      if (n = l.hsva.exec(e)) {
        return {
          h: n[1],
          s: n[2],
          v: n[3],
          a: n[4]
        };
      }
      if (n = l.hex8.exec(e)) {
        return {
          r: Object(r.e)(n[1]),
          g: Object(r.e)(n[2]),
          b: Object(r.e)(n[3]),
          a: Object(r.a)(n[4]),
          format: t ? "name" : "hex8"
        };
      }
      if (n = l.hex6.exec(e)) {
        return {
          r: Object(r.e)(n[1]),
          g: Object(r.e)(n[2]),
          b: Object(r.e)(n[3]),
          format: t ? "name" : "hex"
        };
      }
      if (n = l.hex4.exec(e)) {
        return {
          r: Object(r.e)(n[1] + n[1]),
          g: Object(r.e)(n[2] + n[2]),
          b: Object(r.e)(n[3] + n[3]),
          a: Object(r.a)(n[4] + n[4]),
          format: t ? "name" : "hex8"
        };
      }
      if (n = l.hex3.exec(e)) {
        return {
          r: Object(r.e)(n[1] + n[1]),
          g: Object(r.e)(n[2] + n[2]),
          b: Object(r.e)(n[3] + n[3]),
          format: t ? "name" : "hex"
        };
      }
      return !1;
    }(e);
  }
  if ("object" === typeof e) {
    if (f(e.r) && f(e.g) && f(e.b)) {
      t = Object(r.i)(e.r, e.g, e.b);
      u = !0;
      d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb";
    } else {
      if (f(e.h) && f(e.s) && f(e.v)) {
        a = Object(o.d)(e.s);
        s = Object(o.d)(e.v);
        t = Object(r.c)(e.h, a, s);
        u = !0;
        d = "hsv";
      } else {
        if (f(e.h) && f(e.s) && f(e.l)) {
          a = Object(o.d)(e.s);
          c = Object(o.d)(e.l);
          t = Object(r.b)(e.h, a, c);
          u = !0;
          d = "hsl";
        }
      }
    }
    if (Object.prototype.hasOwnProperty.call(e, "a")) {
      n = e.a;
    }
  }
  n = Object(o.b)(n);
  return {
    ok: u,
    format: e.format || d,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var s = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
var c = "[\\s|\\(]+(" + s + ")[,|\\s]+(" + s + ")[,|\\s]+(" + s + ")\\s*\\)?";
var u = "[\\s|\\(]+(" + s + ")[,|\\s]+(" + s + ")[,|\\s]+(" + s + ")[,|\\s]+(" + s + ")\\s*\\)?";
var l = {
  CSS_UNIT: new RegExp(s),
  rgb: new RegExp("rgb" + c),
  rgba: new RegExp("rgba" + u),
  hsl: new RegExp("hsl" + c),
  hsla: new RegExp("hsla" + u),
  hsv: new RegExp("hsv" + c),
  hsva: new RegExp("hsva" + u),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function f(e) {
  return Boolean(l.CSS_UNIT.exec(String(e)));
}
export default a;