var r = require("../2458/1398");
var i = require("../../../1139/1383/849/index");
module.exports = function (e) {
  for (var t = i(e), n = t.length; n--;) {
    var o = t[n];
    var a = e[o];
    t[n] = [o, a, r(a)];
  }
  return t;
};