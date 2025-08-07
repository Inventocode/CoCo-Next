var r = require("../../../../../../../1395/718/849");
var i = require("../../../../../../1396");
var o = require("../../../../../../../2412/446");
var a = require("../../../../../../../../../../254/2533/1420/2531/979");
var s = r ? r.prototype : undefined;
var c = s ? s.toString : undefined;
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