var r = require("./972/index");
var i = require("./1411/index");
var o = require("./1384/index");
var a = require("./2506/index");
var s = require("../../../2518/2519/475");
var c = require("./852/index");
var u = require("./1412");
module.exports = function e(t, n, l, f, h) {
  if (t !== n) {
    o(n, function (o, c) {
      if (h || (h = new r()), s(o)) {
        a(t, n, c, l, e, f, h);
      } else {
        var d = f ? f(u(t, c), o, c + "", t, n, h) : void 0;
        if (void 0 === d) {
          d = o;
        }
        i(t, c, d);
      }
    }, c);
  }
};