var r = require("./1623/86");
var o = Math.asinh;
var i = Math.log;
var a = Math.sqrt;
r({
  target: "Math",
  stat: !0,
  forced: !(o && 1 / o(0) > 0)
}, {
  asinh: function e(t) {
    return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : i(t + a(t * t + 1)) : t;
  }
});