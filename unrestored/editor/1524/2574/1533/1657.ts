import * as r from "./1626/86/index";
import * as o from "./1250/472";
import * as i from "./1659/241";
r({
  target: "Reflect",
  stat: !0,
  sham: !require("./1631/825")
}, {
  preventExtensions: function (e) {
    i(e);
    try {
      var t = o("Object", "preventExtensions");
      if (t) {
        t(e);
      }
      return !0;
    } catch (n) {
      return !1;
    }
  }
});