var r = require("./1626/86/index");
var o = require("./1738/272");
var i = require("./1659/241");
var a = require("./1534/628");
var s = require("./1534/300/index");
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