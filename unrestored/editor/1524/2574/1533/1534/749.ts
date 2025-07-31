var r = require("../1250/472");
var o = require("../1735/247/1203");
module.exports = o ? function (e) {
  return "symbol" == typeof e;
} : function (e) {
  var t = r("Symbol");
  return "function" == typeof t && Object(e) instanceof t;
};