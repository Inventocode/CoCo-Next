var r = require("./1633/86/index");
var o = require("./1745/272");
var i = require("./1666/241");
var a = require("./1541/386/index");
r({
  target: "Reflect",
  stat: !0,
  sham: !o
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a.f(i(e), t);
  }
});