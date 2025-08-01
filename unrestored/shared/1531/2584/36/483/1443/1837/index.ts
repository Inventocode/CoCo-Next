var r = require("../../1442/1779/1084/index");
var i = require("./1278");
var o = require("./1838/index");
var a = require("./1840/index");
var s = require("../../1442/1779/638");
var c = require("../../1442/1779/837/index");
var u = require("./1279");
module.exports = function e(t, n, l, f, d) {
  if (t !== n) {
    o(n, function (o, c) {
      if (d || (d = new r()), s(o)) {
        a(t, n, c, l, e, f, d);
      } else {
        var h = f ? f(u(t, c), o, c + "", t, n, d) : void 0;
        if (void 0 === h) {
          h = o;
        }
        i(t, c, h);
      }
    }, c);
  }
};