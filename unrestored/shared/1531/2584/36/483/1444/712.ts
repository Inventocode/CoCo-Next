var r = require("./1088/index");
var i = require("./1088/1089/index");
module.exports = function (e, t, n, o) {
  var a = !n;
  if (!n) {
    n = {};
  }
  for (var s = -1, c = t.length; ++s < c;) {
    var u = t[s];
    var l = o ? o(n[u], e[u], u, n, e) : void 0;
    if (void 0 === l) {
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