var r = require("../../../../../../../../254/2513/2514/2515/973/index");
var i = require("./1399/index");
var o = require("./2458/index");
var a = require("./2461");
var s = require("../../../../../../2483/2484/2485/978/index");
var c = require("../../../../../2412/446");
var u = require("../../../../../../2483/2484/2485/971/index");
var l = require("../../../../../../../../254/2513/2514/2515/2516/1145/index");
var f = "[object Object]";
var d = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n, h, p, _) {
  var A = c(e);
  var g = c(t);
  var v = A ? "[object Array]" : s(e);
  var m = g ? "[object Array]" : s(t);
  var y = (v = "[object Arguments]" == v ? f : v) == f;
  var b = (m = "[object Arguments]" == m ? f : m) == f;
  var w = v == m;
  if (w && u(e)) {
    if (!u(t)) {
      return !1;
    }
    A = !0;
    y = !1;
  }
  if (w && !y) {
    if (!_) {
      _ = new r();
    }
    return A || l(e) ? i(e, t, n, h, p, _) : o(e, t, v, n, h, p, _);
  }
  if (!(1 & n)) {
    var E = y && d.call(e, "__wrapped__");
    var x = b && d.call(t, "__wrapped__");
    if (E || x) {
      var C = E ? e.value() : e;
      var O = x ? t.value() : t;
      if (!_) {
        _ = new r();
      }
      return p(C, O, n, h, _);
    }
  }
  return !!w && (_ || (_ = new r()), a(e, t, n, h, p, _));
};