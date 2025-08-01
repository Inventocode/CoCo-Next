var r = require("../1633/86/index");
var o = require("../1253/472");
var i = require("../1734/439");
var a = require("../1666/241");
var s = require("../1633/231");
var c = require("../1253/575");
var l = require("./1655");
var u = require("../1633/167");
var d = o("Reflect", "construct");
var p = u(function () {
  function e() {}
  return !(d(function () {}, [], e) instanceof e);
});
var f = !u(function () {
  d(function () {});
});
var h = p || f;
r({
  target: "Reflect",
  stat: !0,
  forced: h,
  sham: h
}, {
  construct: function (e, t) {
    i(e);
    a(t);
    var n = arguments.length < 3 ? e : i(arguments[2]);
    if (f && !p) {
      return d(e, t, n);
    }
    if (e == n) {
      switch (t.length) {
        case 0:
          return new e();
        case 1:
          return new e(t[0]);
        case 2:
          return new e(t[0], t[1]);
        case 3:
          return new e(t[0], t[1], t[2]);
        case 4:
          return new e(t[0], t[1], t[2], t[3]);
      }
      var r = [null];
      r.push.apply(r, t);
      return new (l.apply(e, r))();
    }
    var o = n.prototype;
    var u = c(s(o) ? o : Object.prototype);
    var h = Function.apply.call(e, u, t);
    return s(h) ? h : u;
  }
});