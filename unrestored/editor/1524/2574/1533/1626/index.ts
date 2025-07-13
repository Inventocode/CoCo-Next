import * as r from "./86/index";
import * as o from "./167";
import * as i from "./231";
var a = Object.isFrozen;
r({
  target: "Object",
  stat: !0,
  forced: o(function () {
    a(1);
  })
}, {
  isFrozen: function (e) {
    return !i(e) || !!a && a(e);
  }
});