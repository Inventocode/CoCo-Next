var r = require("./1816");
var i = require("../../../989/1086/1789/1084");
var o = require("./1817");
var a = require("./1818");
var s = require("./1819");
var c = require("../../../1437/835/1085/832/index");
var u = require("./1258");
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