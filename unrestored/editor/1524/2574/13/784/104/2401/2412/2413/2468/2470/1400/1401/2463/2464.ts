import * as r from "../../../../../../../1388/718/848";
import * as i from "../../../../../../1389";
import * as o from "../../../../../../446";
import * as a from "../../../../../../../../../../254/2523/1413/2521/978";
var s = r ? r.prototype : void 0;
var c = s ? s.toString : void 0;
module.exports = function e(t) {
  if ("string" == typeof t) {
    return t;
  }
  if (o(t)) {
    return i(t, e) + "";
  }
  if (a(t)) {
    return c ? c.call(t) : "";
  }
  var n = t + "";
  return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
};