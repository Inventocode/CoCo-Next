"use strict";

exports.deinterlace = function (e, t) {
  for (var n = new Array(e.length), r = e.length / t, o = function (r, o) {
      var i = e.slice(o * t, (o + 1) * t);
      n.splice.apply(n, [r * t, t].concat(i));
    }, i = [0, 4, 2, 1], a = [8, 8, 4, 2], s = 0, c = 0; c < 4; c++) {
    for (var l = i[c]; l < r; l += a[c]) {
      o(l, s);
      s++;
    }
  }
  return n;
};