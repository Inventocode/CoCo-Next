var r = require("./2520/index");
var i = require("./2527/index");
module.exports = function (e) {
  return r(function (t, n) {
    var r = -1;
    var o = n.length;
    var a = o > 1 ? n[o - 1] : undefined;
    var s = o > 2 ? n[2] : undefined;
    for (a = e.length > 3 && "function" == typeof a ? (o--, a) : undefined, s && i(n[0], n[1], s) && (a = o < 3 ? undefined : a, o = 1), t = Object(t); ++r < o;) {
      var c = n[r];
      if (c) {
        e(t, c, r, a);
      }
    }
    return t;
  });
};