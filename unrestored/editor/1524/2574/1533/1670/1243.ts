import * as r from "../1728/257";
import * as o from "../1738/310";
import * as i from "../1672/1070";
import * as a from "../1676/421";
var s = Math.ceil;
var c = function (e) {
  return function (t, n, c) {
    var l;
    var u;
    var d = o(a(t));
    var p = d.length;
    var f = void 0 === c ? " " : o(c);
    var h = r(n);
    return h <= p || "" == f ? d : (l = h - p, (u = i.call(f, s(l / f.length))).length > l && (u = u.slice(0, l)), e ? d + u : u + d);
  };
};
module.exports = {
  start: c(!1),
  end: c(!0)
};