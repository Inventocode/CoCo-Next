var r = require("../1623/86");
var o = require("./1069");
var i = Math.abs;
var a = Math.pow;
r({
  target: "Math",
  stat: true
}, {
  cbrt: function (e) {
    return o(e = +e) * a(i(e), 1 / 3);
  }
});