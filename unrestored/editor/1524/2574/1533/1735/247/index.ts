import * as r from "../../1738/194";
import * as o from "../../1534/931";
import * as i from "../../1738/332";
import * as a from "../../1534/814";
import * as s from "../../1534/1053";
import * as c from "./1203";
var l = o("wks");
var u = r.Symbol;
var d = c ? u : u && u.withoutSetter || a;
module.exports = function (e) {
  if (!(i(l, e) && (s || "string" == typeof l[e]))) {
    if (s && i(u, e)) {
      l[e] = u[e];
    } else {
      l[e] = d("Symbol." + e);
    }
  }
  return l[e];
};