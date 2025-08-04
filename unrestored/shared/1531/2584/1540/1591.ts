var r = require("./1623/86");
var o = Math.atanh;
var i = Math.log;
r({
  target: "Math",
  stat: !0,
  forced: !(o && 1 / o(-0) < 0)
}, {
  atanh: function (e) {
    return 0 == (e = +e) ? e : i((1 + e) / (1 - e)) / 2;
  }
});