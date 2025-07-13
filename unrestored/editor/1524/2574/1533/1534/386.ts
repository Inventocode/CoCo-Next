import * as r from "../1738/272";
import * as o from "./930";
import * as i from "../1250/627";
import * as a from "../935/437";
import * as s from "./628";
import * as c from "../1738/332";
import * as l from "./300/1205";
var u = Object.getOwnPropertyDescriptor;
exports.f = r ? u : function (e, t) {
  if (e = a(e), t = s(t), l) {
    try {
      return u(e, t);
    } catch (n) {}
  }
  if (c(e, t)) {
    return i(!o.f.call(e, t), e[t]);
  }
};