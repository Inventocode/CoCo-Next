var r = require("./272");
var o = require("../1659/386/1208");
var i = require("../1659/241");
var a = require("../1656/628");
var s = Object.defineProperty;
exports.f = r ? s : function (e, t, n) {
  i(e);
  t = a(t);
  i(n);
  if (o) {
    try {
      return s(e, t, n);
    } catch (r) {}
  }
  if ("get" in n || "set" in n) {
    throw TypeError("Accessors not supported");
  }
  if ("value" in n) {
    e[t] = n.value;
  }
  return e;
};