import * as r from "./1626/86/index";
import * as o from "./1250/472";
import * as i from "./1727/439";
import * as a from "./1659/241";
import * as s from "./1626/167";
var c = o("Reflect", "apply");
var l = Function.apply;
r({
  target: "Reflect",
  stat: !0,
  forced: !s(function () {
    c(function () {});
  })
}, {
  apply: function (e, t, n) {
    i(e);
    a(n);
    return c ? c(e, t, n) : l.call(e, t, n);
  }
});