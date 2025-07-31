var r = require("../935/437");
var o = require("../1728/257");
var i = require("../1728/706");
var a = function (e) {
  return function (t, n, a) {
    var s;
    var c = r(t);
    var l = o(c.length);
    var u = i(a, l);
    if (e && n != n) {
      for (; l > u;) {
        if ((s = c[u++]) != s) {
          return !0;
        }
      }
    } else {
      for (; l > u; u++) {
        if ((e || u in c) && c[u] === n) {
          return e || u || 0;
        }
      }
    }
    return !e && -1;
  };
};
module.exports = {
  includes: a(!0),
  indexOf: a(!1)
};