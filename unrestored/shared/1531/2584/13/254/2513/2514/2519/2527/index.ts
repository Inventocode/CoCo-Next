var r = require("./851");
var i = require("../../../../../785/104/2411/2422/2481/762/index");
var o = require("./1144");
var a = require("../../../../2528/2529/475");
module.exports = function (e, t, n) {
  if (!a(n)) {
    return !1;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};