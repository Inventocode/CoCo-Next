import * as r from "../1626/86/index";
import * as o from "../1659/241";
import * as i from "../1626/231";
import * as a from "./1238";
import * as s from "../1626/167";
import * as c from "../1534/300/index";
import * as l from "../1534/386";
import * as u from "../1623/495";
import * as d from "../1250/627";
r({
  target: "Reflect",
  stat: !0,
  forced: s(function () {
    var e = function () {};
    var t = c.f(new e(), "a", {
      configurable: !0
    });
    return !1 !== Reflect.set(e.prototype, "a", 1, t);
  })
}, {
  set: function e(t, n, r) {
    var s;
    var p;
    var f;
    var h = arguments.length < 4 ? t : arguments[3];
    var m = l.f(o(t), n);
    if (!m) {
      if (i(p = u(t))) {
        return e(p, n, r, h);
      }
      m = d(0);
    }
    if (a(m)) {
      if (!1 === m.writable || !i(h)) {
        return !1;
      }
      if (s = l.f(h, n)) {
        if (s.get || s.set || !1 === s.writable) {
          return !1;
        }
        s.value = r;
        c.f(h, n, s);
      } else {
        c.f(h, n, d(0, r));
      }
    } else {
      if (void 0 === (f = m.set)) {
        return !1;
      }
      f.call(h, r);
    }
    return !0;
  }
});