import * as r from "../1626/86/index";
import * as o from "./241";
import * as i from "./1218";
import * as a from "./634";
if (a) {
  r({
    target: "Reflect",
    stat: !0
  }, {
    setPrototypeOf: function (e, t) {
      o(e);
      i(t);
      try {
        a(e, t);
        return !0;
      } catch (n) {
        return !1;
      }
    }
  });
}