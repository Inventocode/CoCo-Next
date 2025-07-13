import * as r from "../1676/421";
import * as o from "../1738/310";
var i = /"/g;
module.exports = function (e, t, n, a) {
  var s = o(r(e));
  var c = "<" + t;
  if ("" !== n) {
    c += " " + n + '="' + o(a).replace(i, "&quot;") + '"';
  }
  return c + ">" + s + "</" + t + ">";
};