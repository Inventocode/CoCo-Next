var r = require("../1608/1205");
var o = require("./749");
module.exports = function (e) {
  var t = r(e, "string");
  return o(t) ? t : String(t);
};