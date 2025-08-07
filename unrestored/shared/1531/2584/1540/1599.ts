var r = require("./1623/86");
var o = require("./1736/167");
var i = Math.imul;
r({
  target: "Math",
  stat: true,
  forced: o(function () {
    return -5 != i(4294967295, 5) || 2 != i.length;
  })
}, {
  imul: function (e, t) {
    var n = +e;
    var r = +t;
    var o = 65535 & n;
    var i = 65535 & r;
    return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0);
  }
});