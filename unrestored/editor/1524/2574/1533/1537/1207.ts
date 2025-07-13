import * as r from "../1738/332";
import * as o from "../1656/1058";
import * as i from "../1534/386";
import * as a from "../1534/300/index";
module.exports = function (e, t) {
  for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
    var u = n[l];
    if (!r(e, u)) {
      s(e, u, c(t, u));
    }
  }
};