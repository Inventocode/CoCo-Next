var r = require("../1626/86/index");
var o = require("./1068");
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