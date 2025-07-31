var r = require("../../1738/194");
var o = require("../../1534/931");
var i = require("../../1738/332");
var a = require("../../1534/814");
var s = require("../../1534/1053");
var c = require("./1203");
var l = o("wks");
var u = r.Symbol;
var d = c ? u : u && u.withoutSetter || a;
module.exports = function (e) {
  if (!(i(l, e) && (s || "string" == typeof l[e]))) {
    if (s && i(u, e)) {
      l[e] = u[e];
    } else {
      l[e] = d("Symbol." + e);
    }
  }
  return l[e];
};