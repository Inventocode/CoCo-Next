import * as r from "./1816";
import * as i from "../../../989/1086/1789/1084";
import * as o from "./1817";
import * as a from "./1818";
import * as s from "./1819";
import * as c from "../../../1437/835/1085/832/index";
import * as u from "./1258";
var l = u(r);
var f = u(i);
var h = u(o);
var d = u(a);
var p = u(s);
var _ = c;
if (r && "[object DataView]" != _(new r(new ArrayBuffer(1))) || i && "[object Map]" != _(new i()) || o && "[object Promise]" != _(o.resolve()) || a && "[object Set]" != _(new a()) || s && "[object WeakMap]" != _(new s())) {
  _ = function (e) {
    var t = c(e);
    var n = "[object Object]" == t ? e.constructor : void 0;
    var r = n ? u(n) : "";
    if (r) {
      switch (r) {
        case l:
          return "[object DataView]";
        case f:
          return "[object Map]";
        case h:
          return "[object Promise]";
        case d:
          return "[object Set]";
        case p:
          return "[object WeakMap]";
      }
    }
    return t;
  };
}
module.exports = _;