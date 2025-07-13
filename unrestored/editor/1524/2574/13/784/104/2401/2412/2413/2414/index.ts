import * as r from "./2415";
import * as i from "./2457";
import * as o from "../2458/1399";
module.exports = function (e) {
  var t = i(e);
  return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function (n) {
    return n === e || r(n, e, t);
  };
};