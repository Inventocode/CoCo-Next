import * as r from "../1659/241";
import * as o from "./823";
module.exports = function (e, t) {
  var n = arguments.length < 2 ? o(e) : t;
  if ("function" != typeof n) {
    throw TypeError(String(e) + " is not iterable");
  }
  return r(n.call(e));
};