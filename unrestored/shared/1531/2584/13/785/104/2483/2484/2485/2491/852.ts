var r = require("../1411");
var i = require("../../../../../../254/2513/2514/2515/1418/1156/index");
module.exports = function (e, t, n, o) {
  var a = !n;
  if (!n) {
    n = {};
  }
  for (var s = -1, c = t.length; ++s < c;) {
    var u = t[s];
    var l = o ? o(n[u], e[u], u, n, e) : undefined;
    if (undefined === l) {
      l = e[u];
    }
    if (a) {
      i(n, u, l);
    } else {
      r(n, u, l);
    }
  }
  return n;
};