var r = require("./1623/86");
var o = Math.log;
var i = Math.LN2;
r({
  target: "Math",
  stat: !0
}, {
  log2: function (e) {
    return o(e) / i;
  }
});