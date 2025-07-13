import * as r from "./1626/86/index";
import * as o from "./1738/272";
import * as i from "./1659/241";
import * as a from "./1534/628";
import * as s from "./1534/300/index";
r({
  target: "Reflect",
  stat: !0,
  forced: require("./1626/167")(function () {
    Reflect.defineProperty(s.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }),
  sham: !o
}, {
  defineProperty: function (e, t, n) {
    i(e);
    var r = a(t);
    i(n);
    try {
      s.f(e, r, n);
      return !0;
    } catch (o) {
      return !1;
    }
  }
});