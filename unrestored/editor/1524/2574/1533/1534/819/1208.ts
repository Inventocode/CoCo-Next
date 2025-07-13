import * as r from "../../1738/332";
import * as o from "../../935/437";
var i = require("../../1715/816").indexOf;
import * as a from "../815";
module.exports = function (e, t) {
  var n;
  var s = o(e);
  var c = 0;
  var l = [];
  for (n in s) if (!r(a, n) && r(s, n)) {
    l.push(n);
  }
  for (; t.length > c;) {
    if (r(s, n = t[c++])) {
      if (!~i(l, n)) {
        l.push(n);
      }
    }
  }
  return l;
};