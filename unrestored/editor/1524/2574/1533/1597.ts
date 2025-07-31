var r = require("./1626/86/index");
var o = require("./1626/167");
var i = require("./1587/939");
var a = Math.abs;
var s = Math.exp;
var c = Math.E;
r({
  target: "Math",
  stat: !0,
  forced: o(function () {
    return -2e-17 != Math.sinh(-2e-17);
  })
}, {
  sinh: function (e) {
    return a(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (s(e - 1) - s(-e - 1)) * (c / 2);
  }
});