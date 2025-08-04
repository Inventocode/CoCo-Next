var r = require("./1623/86");
var o = Math.log;
var i = Math.LOG10E;
r({
  target: "Math",
  stat: !0
}, {
  log10: function (e) {
    return o(e) * i;
  }
});