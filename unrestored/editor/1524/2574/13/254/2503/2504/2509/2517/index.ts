var r = require("./850");
var i = require("../../../../../784/104/2401/2412/2471/762/index");
var o = require("./1141");
var a = require("../../../../2518/2519/475");
module.exports = function (e, t, n) {
  if (!a(n)) {
    return !1;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};