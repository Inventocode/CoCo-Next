var r = require("../../../../../../../1388/718/848");
var i = require("../../../../../../1389");
var o = require("../../../../../../446");
var a = require("../../../../../../../../../../254/2523/1413/2521/978");
var s = r ? r.prototype : void 0;
var c = s ? s.toString : void 0;
module.exports = function e(t) {
  if ("string" == typeof t) {
    return t;
  }
  if (o(t)) {
    return i(t, e) + "";
  }
  if (a(t)) {
    return c ? c.call(t) : "";
  }
  var n = t + "";
  return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
};