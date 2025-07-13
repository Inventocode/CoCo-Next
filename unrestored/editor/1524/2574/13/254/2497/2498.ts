"use strict";

exports.calculateChange = function (e, t, n, r, i) {
  var o = i.clientWidth;
  var a = i.clientHeight;
  var s = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX;
  var c = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY;
  var u = s - (i.getBoundingClientRect().left + window.pageXOffset);
  var l = c - (i.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === n) {
    var f = void 0;
    if (f = l < 0 ? 0 : l > a ? 1 : Math.round(100 * l / a) / 100, t.a !== f) {
      return {
        h: t.h,
        s: t.s,
        l: t.l,
        a: f,
        source: "rgb"
      };
    }
  } else {
    var h = void 0;
    if (r !== (h = u < 0 ? 0 : u > o ? 1 : Math.round(100 * u / o) / 100)) {
      return {
        h: t.h,
        s: t.s,
        l: t.l,
        a: h,
        source: "rgb"
      };
    }
  }
  return null;
};