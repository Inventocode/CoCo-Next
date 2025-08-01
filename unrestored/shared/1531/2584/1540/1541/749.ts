var r = require("../1253/472");
var o = require("../1742/247/1206");
module.exports = o ? function (e) {
  return "symbol" == typeof e;
} : function (e) {
  var t = r("Symbol");
  return "function" == typeof t && Object(e) instanceof t;
};