import * as r from "./1626/86/index";
import * as o from "./1626/167";
import * as i from "./1587/939";
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