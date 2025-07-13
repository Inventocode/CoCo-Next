import * as r from "./2453";
import * as i from "../../../../../../254/2503/2504/2505/972/2425/1149";
import * as o from "./2454";
import * as a from "./2455";
import * as s from "./2456/index";
import * as c from "../../../../2401/1388/718/index";
import * as u from "./1390";
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