var r = require("./2406");
var i = require("../../2506/1140/index");
var o = require("../../../../../../784/104/2401/2412/446");
var a = require("../../../../../../784/104/2473/2474/2475/970/index");
var s = require("../../../2509/2517/1141");
var c = require("../../2506/1142/index");
var u = Object.prototype.hasOwnProperty;
module.exports = function (e, t) {
  var n = o(e);
  var l = !n && i(e);
  var f = !n && !l && a(e);
  var h = !n && !l && !f && c(e);
  var d = n || l || f || h;
  var p = d ? r(e.length, String) : [];
  var _ = p.length;
  for (var A in e) if (!(!t && !u.call(e, A) || d && ("length" == A || f && ("offset" == A || "parent" == A) || h && ("buffer" == A || "byteLength" == A || "byteOffset" == A) || s(A, _)))) {
    p.push(A);
  }
  return p;
};