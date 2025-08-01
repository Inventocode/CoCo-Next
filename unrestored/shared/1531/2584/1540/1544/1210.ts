var r = require("../1745/332");
var o = require("../1663/1059");
var i = require("../1541/386/index");
var a = require("../1541/300");
module.exports = function (e, t) {
  for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
    var u = n[l];
    if (!r(e, u)) {
      s(e, u, c(t, u));
    }
  }
};