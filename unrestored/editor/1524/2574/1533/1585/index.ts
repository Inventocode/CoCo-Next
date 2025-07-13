import * as r from "../1626/86/index";
import * as o from "./1068";
var i = Math.abs;
var a = Math.pow;
r({
  target: "Math",
  stat: !0
}, {
  cbrt: function (e) {
    return o(e = +e) * a(i(e), 1 / 3);
  }
});