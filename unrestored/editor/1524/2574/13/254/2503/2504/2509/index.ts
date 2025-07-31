var r = require("./2510/index");
var i = require("./2517/index");
module.exports = function (e) {
  return r(function (t, n) {
    var r = -1;
    var o = n.length;
    var a = o > 1 ? n[o - 1] : void 0;
    var s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0, s && i(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o;) {
      var c = n[r];
      if (c) {
        e(t, c, r, a);
      }
    }
    return t;
  });
};