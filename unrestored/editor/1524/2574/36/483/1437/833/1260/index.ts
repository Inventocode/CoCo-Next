var r = require("./1803");
var i = require("../../../1436/1830/1833/1261/index");
var o = require("../../../1435/1772/834");
var a = require("../../../1435/1772/957/index");
var s = require("../../../1436/1095/1844/1262");
var c = require("../../../1436/1830/1833/1089/index");
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