var r = require("../1623/86");
var o = require("../1659/241");
var i = require("../1738/231");
var a = require("./1241");
var s = require("../1736/167");
var c = require("../1623/300");
var l = require("../1659/386/index");
var u = require("../1660/495");
var d = require("./627");
r({
  target: "Reflect",
  stat: true,
  forced: s(function () {
    var e = function () {};
    var t = c.f(new e(), "a", {
      configurable: true
    });
    return false !== Reflect.set(e.prototype, "a", 1, t);
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
      if (false === m.writable || !i(h)) {
        return false;
      }
      if (s = l.f(h, n)) {
        if (s.get || s.set || false === s.writable) {
          return false;
        }
        s.value = r;
        c.f(h, n, s);
      } else {
        c.f(h, n, d(0, r));
      }
    } else {
      if (undefined === (f = m.set)) {
        return false;
      }
      f.call(h, r);
    }
    return true;
  }
});