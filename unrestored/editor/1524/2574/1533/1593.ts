import * as r from "./1626/86/index";
var o = Math.log;
var i = Math.LOG10E;
r({
  target: "Math",
  stat: !0
}, {
  log10: function (e) {
    return o(e) * i;
  }
});