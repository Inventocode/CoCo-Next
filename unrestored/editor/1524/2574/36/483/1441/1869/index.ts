var r = require("./1870/index");
var i = require("./639");
module.exports = function e(t, n, o, a, s) {
  return t === n || (null == t || null == n || !i(t) && !i(n) ? t !== t && n !== n : r(t, n, o, a, e, s));
};