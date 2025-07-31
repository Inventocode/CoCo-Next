var r = require("../1738/332");
var o = require("../1656/1058");
var i = require("../1534/386");
var a = require("../1534/300/index");
module.exports = function (e, t) {
  for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
    var u = n[l];
    if (!r(e, u)) {
      s(e, u, c(t, u));
    }
  }
};