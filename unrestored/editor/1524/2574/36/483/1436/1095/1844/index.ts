var r = require("../../../1437/1087/831");
var i = require("../../../1437/835/index");
var o = require("./1262");
var a = require("../../1830/638");
module.exports = function (e, t, n) {
  if (!a(n)) {
    return !1;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};