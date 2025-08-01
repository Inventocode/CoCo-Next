var r = require("./2416");
var i = require("../../2516/1143/index");
var o = require("../../../../../../785/104/2411/2412/446");
var a = require("../../../../../../785/104/2483/2484/2485/971/index");
var s = require("../../../2519/2527/1144");
var c = require("../../2516/1145/index");
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