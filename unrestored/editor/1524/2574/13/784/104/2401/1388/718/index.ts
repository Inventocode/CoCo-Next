import * as r from "./848";
import * as i from "./2403";
import * as o from "./2404";
var a = r ? r.toStringTag : void 0;
module.exports = function (e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};