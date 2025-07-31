var r = require("./1839");
var i = Math.max;
module.exports = function (e, t, n) {
  t = i(void 0 === t ? e.length - 1 : t, 0);
  return function () {
    for (var o = arguments, a = -1, s = i(o.length - t, 0), c = Array(s); ++a < s;) {
      c[a] = o[t + a];
    }
    a = -1;
    for (var u = Array(t + 1); ++a < t;) {
      u[a] = o[a];
    }
    u[t] = n(c);
    return r(e, this, u);
  };
};