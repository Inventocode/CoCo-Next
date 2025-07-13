import * as r from "../1659/241";
import * as o from "../1626/231";
import * as i from "../1639/1237";
module.exports = function (e, t) {
  if (r(e), o(t) && t.constructor === e) {
    return t;
  }
  var n = i.f(e);
  (0, n.resolve)(t);
  return n.promise;
};