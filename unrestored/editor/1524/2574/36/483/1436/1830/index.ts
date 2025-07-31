var r = require("./1083/index");
var i = require("./1275");
var o = require("./1831/index");
var a = require("./1833/index");
var s = require("./638");
var c = require("./836/index");
var u = require("./1276");
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