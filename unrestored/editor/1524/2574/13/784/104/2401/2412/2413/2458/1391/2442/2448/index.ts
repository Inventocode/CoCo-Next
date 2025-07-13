import * as r from "../../../../../../1388/718/848";
import * as i from "../../../../../../../2473/2474/2475/2484/1154/1393";
import * as o from "../../../../../../../../../254/2503/2504/2509/2517/850";
import * as a from "../1392/index";
import * as s from "./2449";
import * as c from "./2450";
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