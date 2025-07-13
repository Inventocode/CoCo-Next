import * as r from "../1738/272";
import * as o from "../1534/819/index";
import * as i from "../935/437";
var a = require("../1534/930").f;
var s = function (e) {
  return function (t) {
    for (var n, s = i(t), c = o(s), l = c.length, u = 0, d = []; l > u;) {
      n = c[u++];
      if (!(r && !a.call(s, n))) {
        d.push(e ? [n, s[n]] : s[n]);
      }
    }
    return d;
  };
};
module.exports = {
  entries: s(!0),
  values: s(!1)
};