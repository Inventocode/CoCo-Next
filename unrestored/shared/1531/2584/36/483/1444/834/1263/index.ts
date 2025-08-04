var r = require("./1810");
var i = require("../../../1443/1837/1840/1264/index");
var o = require("../../../1442/1779/835");
var a = require("../../../1442/1779/958/index");
var s = require("../../../1443/1096/1851/1265");
var c = require("../../../1443/1837/1840/1090/index");
var u = Object.prototype.hasOwnProperty;
module.exports = function (e, t) {
  var n = o(e);
  var l = !n && i(e);
  var f = !n && !l && a(e);
  var d = !n && !l && !f && c(e);
  var h = n || l || f || d;
  var p = h ? r(e.length, String) : [];
  var _ = p.length;
  for (var A in e) if (!(!t && !u.call(e, A) || h && ("length" == A || f && ("offset" == A || "parent" == A) || d && ("buffer" == A || "byteLength" == A || "byteOffset" == A) || s(A, _)))) {
    p.push(A);
  }
  return p;
};