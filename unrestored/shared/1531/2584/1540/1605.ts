var r = require("./1623/86");
var o = require("./1594/940");
var i = Math.exp;
r({
  target: "Math",
  stat: true
}, {
  tanh: function (e) {
    var t = o(e = +e);
    var n = o(-e);
    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e));
  }
});