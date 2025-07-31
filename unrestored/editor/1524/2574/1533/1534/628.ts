var r = require("../1601/1202/index");
var o = require("./749");
module.exports = function (e) {
  var t = r(e, "string");
  return o(t) ? t : String(t);
};