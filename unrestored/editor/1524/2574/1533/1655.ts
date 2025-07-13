import * as r from "./1626/86/index";
import * as o from "./1659/241";
var i = Object.isExtensible;
r({
  target: "Reflect",
  stat: !0
}, {
  isExtensible: function (e) {
    o(e);
    return !i || i(e);
  }
});