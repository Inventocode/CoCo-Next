var r = require("../../../1442/1779/1084/index");
var i = require("./1286/index");
var o = require("./1883/index");
var a = require("./1886");
var s = require("../../../1442/1779/960/index");
var c = require("../../../1442/1779/835");
var u = require("../../../1442/1779/958/index");
var l = require("../../../1443/1837/1840/1090/index");
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