var r = require("../../../1444/1088/832");
var i = require("../../../1444/836/index");
var o = require("./1265");
var a = require("../../../1442/1779/638");
module.exports = function (e, t, n) {
  if (!a(n)) {
    return !1;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};