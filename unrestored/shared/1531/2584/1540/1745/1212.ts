var r = require("../1623/272");
var o = require("../1623/300");
var i = require("../1659/241");
var a = require("../1541/820");
module.exports = r ? Object.defineProperties : function (e, t) {
  i(e);
  for (var n, r = a(t), s = r.length, c = 0; s > c;) {
    o.f(e, n = r[c++], t[n]);
  }
  return e;
};