var r = require("./954");
var i = require("./1272");
var o = require("../../../../1437/1087/831");
var a = require("../1283/index");
var s = require("./1877");
var c = require("./1878");
var u = r ? r.prototype : void 0;
var l = u ? u.valueOf : void 0;
module.exports = function (e, t, n, r, u, f, h) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
        return !1;
      }
      e = e.buffer;
      t = t.buffer;
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !f(new i(e), new i(t)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return o(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var d = s;
    case "[object Set]":
      var p = 1 & r;
      if (d || (d = c), e.size != t.size && !p) {
        return !1;
      }
      var _ = h.get(e);
      if (_) {
        return _ == t;
      }
      r |= 2;
      h.set(e, t);
      var A = a(d(e), d(t), r, u, f, h);
      h.delete(e);
      return A;
    case "[object Symbol]":
      if (l) {
        return l.call(e) == l.call(t);
      }
  }
  return !1;
};