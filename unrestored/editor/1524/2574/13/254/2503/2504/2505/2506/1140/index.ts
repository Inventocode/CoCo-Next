import * as r from "./2407";
import * as i from "../../../../../../784/104/2401/1388/535";
var o = Object.prototype;
var a = o.hasOwnProperty;
var s = o.propertyIsEnumerable;
var c = r(function () {
  return arguments;
}()) ? r : function (e) {
  return i(e) && a.call(e, "callee") && !s.call(e, "callee");
};
module.exports = c;