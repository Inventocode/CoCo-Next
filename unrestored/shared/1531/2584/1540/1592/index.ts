var r = require("../1633/86/index");
var o = require("./1069");
var i = Math.abs;
var a = Math.pow;
r({
  target: "Math",
  stat: !0
}, {
  cbrt: function (e) {
    return o(e = +e) * a(i(e), 1 / 3);
  }
});