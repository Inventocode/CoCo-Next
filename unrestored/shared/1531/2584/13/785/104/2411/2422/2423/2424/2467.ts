var r = require("../2468/1405");
var i = require("../../../../2483/1142/1390/850/index");
module.exports = function (e) {
  for (var t = i(e), n = t.length; n--;) {
    var o = t[n];
    var a = e[o];
    t[n] = [o, a, r(a)];
  }
  return t;
};