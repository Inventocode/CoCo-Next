var r = require("../1623/439");
var o = require("../1623/309");
var i = require("../1569/814");
var a = require("../1735/257");
var s = function (e) {
  return function (t, n, s, c) {
    r(n);
    var l = o(t);
    var u = i(l);
    var d = a(l.length);
    var p = e ? d - 1 : 0;
    var f = e ? -1 : 1;
    if (s < 2) {
      for (;;) {
        if (p in u) {
          c = u[p];
          p += f;
          break;
        }
        p += f;
        if (e ? p < 0 : d <= p) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; e ? p >= 0 : d > p; p += f) {
      if (p in u) {
        c = n(c, u[p], p, l);
      }
    }
    return c;
  };
};
module.exports = {
  left: s(!1),
  right: s(!0)
};