var r = require("../../../../../2513/2514/2519/2527/762/index");
module.exports = function (e, t) {
  return function (n, i) {
    if (null == n) {
      return n;
    }
    if (!r(n)) {
      return e(n, i);
    }
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && false !== i(s[a], a, s);) {
      ;
    }
    return n;
  };
};