var r = require("../2475/2477/1408/index");
var i = require("../980");
module.exports = function (e, t) {
  for (var n = 0, o = (t = r(t, e)).length; null != e && n < o;) {
    e = e[i(t[n++])];
  }
  return n && n == o ? e : void 0;
};