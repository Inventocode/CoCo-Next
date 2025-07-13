import * as r from "./1804";
import * as i from "../../../../1441/1869/639";
var o = Object.prototype;
var a = o.hasOwnProperty;
var s = o.propertyIsEnumerable;
var c = r(function () {
  return arguments;
}()) ? r : function (e) {
  return i(e) && a.call(e, "callee") && !s.call(e, "callee");
};
module.exports = c;