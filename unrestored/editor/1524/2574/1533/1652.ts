var r = require("./1626/86/index");
var o = require("./1738/272");
var i = require("./1659/241");
var a = require("./1534/386");
r({
  target: "Reflect",
  stat: !0,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t);
  }
});