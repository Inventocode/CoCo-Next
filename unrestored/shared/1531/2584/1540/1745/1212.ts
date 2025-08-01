var r = require("./272");
var o = require("../1541/300");
var i = require("../1666/241");
var a = require("../1541/820/index");
module.exports = r ? Object.defineProperties : function (e, t) {
  i(e);
  for (var n, r = a(t), s = r.length, c = 0; s > c;) {
    o.f(e, n = r[c++], t[n]);
  }
  return e;
};