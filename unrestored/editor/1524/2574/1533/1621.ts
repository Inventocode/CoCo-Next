import * as r from "./1626/86/index";
import * as o from "./1738/272";
import * as i from "./1656/1058";
import * as a from "./935/437";
import * as s from "./1534/386";
import * as c from "./1550/707";
r({
  target: "Object",
  stat: !0,
  sham: !o
}, {
  getOwnPropertyDescriptors: function (e) {
    for (var t, n, r = a(e), o = s.f, l = i(r), u = {}, d = 0; l.length > d;) {
      if (void 0 !== (n = o(r, t = l[d++]))) {
        c(u, t, n);
      }
    }
    return u;
  }
});