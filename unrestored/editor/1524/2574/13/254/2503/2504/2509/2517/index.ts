import * as r from "./850";
import * as i from "../../../../../784/104/2401/2412/2471/762/index";
import * as o from "./1141";
import * as a from "../../../../2518/2519/475";
module.exports = function (e, t, n) {
  if (!a(n)) {
    return !1;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};