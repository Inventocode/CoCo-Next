import * as r from "../1250/472";
import * as o from "../1735/247/1203";
module.exports = o ? function (e) {
  return "symbol" == typeof e;
} : function (e) {
  var t = r("Symbol");
  return "function" == typeof t && Object(e) instanceof t;
};