var r = require("./1633/86/index");
var o = require("./1666/241");
var i = require("./1633/231");
var a = require("./1658/1241");
var s = require("./1633/167");
var c = require("./1541/300");
var l = require("./1541/386/index");
var u = require("./1585/495");
var d = require("./1253/627");
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