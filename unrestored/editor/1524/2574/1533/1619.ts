import * as r from "./1626/86/index";
import * as o from "./1639/826/index";
import * as i from "./1550/707";
r({
  target: "Object",
  stat: !0
}, {
  fromEntries: function (e) {
    var t = {};
    o(e, function (e, n) {
      i(t, e, n);
    }, {
      AS_ENTRIES: !0
    });
    return t;
  }
});