import * as r from "./1626/86/index";
import * as o from "./1605/1069";
var i = Math.abs;
r({
  target: "Number",
  stat: !0
}, {
  isSafeInteger: function (e) {
    return o(e) && i(e) <= 9007199254740991;
  }
});