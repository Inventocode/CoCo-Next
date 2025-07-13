import * as r from "../1601/1202/index";
import * as o from "./749";
module.exports = function (e) {
  var t = r(e, "string");
  return o(t) ? t : String(t);
};