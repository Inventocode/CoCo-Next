var r = require("./1623/86");
var o = Math.hypot;
var i = Math.abs;
var a = Math.sqrt;
r({
  target: "Math",
  stat: !0,
  forced: !!o && o(1 / 0, NaN) !== 1 / 0
}, {
  hypot: function (e, t) {
    for (var n, r, o = 0, s = 0, c = arguments.length, l = 0; s < c;) {
      if (l < (n = i(arguments[s++]))) {
        o = o * (r = l / n) * r + 1;
        l = n;
      } else {
        o += n > 0 ? (r = n / l) * r : n;
      }
    }
    return l === 1 / 0 ? 1 / 0 : l * a(o);
  }
});