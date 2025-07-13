import * as r from "./1870/index";
import * as i from "./639";
module.exports = function e(t, n, o, a, s) {
  return t === n || (null == t || null == n || !i(t) && !i(n) ? t !== t && n !== n : r(t, n, o, a, e, s));
};