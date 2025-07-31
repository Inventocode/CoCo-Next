"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.calculateChange = function (e, t, n, r) {
  var i = r.clientWidth;
  var o = r.clientHeight;
  var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX;
  var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY;
  var c = a - (r.getBoundingClientRect().left + window.pageXOffset);
  var u = s - (r.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === t) {
    var l = void 0;
    if (u < 0) {
      l = 359;
    } else if (u > o) {
      l = 0;
    } else {
      l = 360 * (-100 * u / o + 100) / 100;
    }
    if (n.h !== l) {
      return {
        h: l,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      };
    }
  } else {
    var f = void 0;
    if (c < 0) {
      f = 0;
    } else if (c > i) {
      f = 359;
    } else {
      f = 360 * (100 * c / i) / 100;
    }
    if (n.h !== f) {
      return {
        h: f,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "hsl"
      };
    }
  }
  return null;
};