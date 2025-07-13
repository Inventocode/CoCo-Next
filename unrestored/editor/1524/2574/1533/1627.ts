import * as r from "./1626/86/index";
import * as o from "./1626/167";
import * as i from "./1626/231";
var a = Object.isSealed;
r({
  target: "Object",
  stat: !0,
  forced: o(function () {
    a(1);
  })
}, {
  isSealed: function (e) {
    return !i(e) || !!a && a(e);
  }
});