import * as r from "../../../../1441/1869/1870/1876/954";
import * as i from "./1784";
import * as o from "./1785";
var a = r ? r.toStringTag : void 0;
module.exports = function (e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};