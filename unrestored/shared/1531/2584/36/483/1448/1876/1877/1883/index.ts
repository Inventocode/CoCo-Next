var r = require("../../../../1442/1779/1828/1831/955");
var i = require("../../../../1442/1779/1828/1095/1275");
var o = require("../../../../1444/1088/832");
var a = require("../1286/index");
var s = require("./1884");
var c = require("./1885");
var u = r ? r.prototype : void 0;
var l = u ? u.valueOf : void 0;
module.exports = function (e, t, n, r, u, f, d) {
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
      var h = s;
    case "[object Set]":
      var p = 1 & r;
      if (h || (h = c), e.size != t.size && !p) {
        return !1;
      }
      var _ = d.get(e);
      if (_) {
        return _ == t;
      }
      r |= 2;
      d.set(e, t);
      var A = a(h(e), h(t), r, u, f, d);
      d.delete(e);
      return A;
    case "[object Symbol]":
      if (l) {
        return l.call(e) == l.call(t);
      }
  }
  return !1;
};