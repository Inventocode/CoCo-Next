var r = require("../1623/86");
var o = require("./1230");
var i = Math.acosh;
var a = Math.log;
var s = Math.sqrt;
var c = Math.LN2;
r({
  target: "Math",
  stat: !0,
  forced: !i || 710 != Math.floor(i(Number.MAX_VALUE)) || i(1 / 0) != 1 / 0
}, {
  acosh: function (e) {
    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? a(e) + c : o(e - 1 + s(e - 1) * s(e + 1));
  }
});