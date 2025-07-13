"use strict";

exports.calculateChange = function (e, t, n) {
  var r = n.getBoundingClientRect();
  var i = r.width;
  var o = r.height;
  var a = "number" === typeof e.pageX ? e.pageX : e.touches[0].pageX;
  var s = "number" === typeof e.pageY ? e.pageY : e.touches[0].pageY;
  var c = a - (n.getBoundingClientRect().left + window.pageXOffset);
  var u = s - (n.getBoundingClientRect().top + window.pageYOffset);
  if (c < 0) {
    c = 0;
  } else {
    if (c > i) {
      c = i;
    }
  }
  if (u < 0) {
    u = 0;
  } else {
    if (u > o) {
      u = o;
    }
  }
  var l = c / i;
  var f = 1 - u / o;
  return {
    h: t.h,
    s: l,
    v: f,
    a: t.a,
    source: "hsv"
  };
};