var r = require("./1633/86/index");
var o = Math.floor;
var i = Math.log;
var a = Math.LOG2E;
r({
  target: "Math",
  stat: !0
}, {
  clz32: function (e) {
    return (e >>>= 0) ? 31 - o(i(e + .5) * a) : 32;
  }
});