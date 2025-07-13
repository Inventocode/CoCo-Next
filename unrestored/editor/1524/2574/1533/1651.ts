import * as r from "./1626/86/index";
import * as o from "./1626/231";
import * as i from "./1659/241";
import * as a from "./1658/1238";
import * as s from "./1534/386";
import * as c from "./1623/495";
r({
  target: "Reflect",
  stat: !0
}, {
  get: function e(t, n) {
    var r;
    var l;
    var u = arguments.length < 3 ? t : arguments[2];
    return i(t) === u ? t[n] : (r = s.f(t, n)) ? a(r) ? r.value : void 0 === r.get ? void 0 : r.get.call(u) : o(l = c(t)) ? e(l, n, u) : void 0;
  }
});