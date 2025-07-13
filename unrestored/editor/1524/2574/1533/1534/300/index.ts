import * as r from "../../1738/272";
import * as o from "./1205";
import * as i from "../../1659/241";
import * as a from "../628";
var s = Object.defineProperty;
exports.f = r ? s : function (e, t, n) {
  if (i(e), t = a(t), i(n), o) {
    try {
      return s(e, t, n);
    } catch (r) {}
  }
  if ("get" in n || "set" in n) {
    throw TypeError("Accessors not supported");
  }
  if ("value" in n) {
    e[t] = n.value;
  }
  return e;
};