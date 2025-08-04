var r = require("./1823");
var i = require("./1085");
var o = require("./1824");
var a = require("./1825/index");
var s = require("./1826");
var c = require("../../../1444/836/1086/833/index");
var u = require("./1261");
var l = u(r);
var f = u(i);
var d = u(o);
var h = u(a);
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
        case d:
          return "[object Promise]";
        case h:
          return "[object Set]";
        case p:
          return "[object WeakMap]";
      }
    }
    return t;
  };
}
module.exports = _;