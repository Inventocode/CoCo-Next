var r = require("../1585/1068");
var o = Math.abs;
var i = Math.pow;
var a = i(2, -52);
var s = i(2, -23);
var c = i(2, 127) * (2 - s);
var l = i(2, -126);
module.exports = Math.fround || function (e) {
  var t;
  var n;
  var i = o(e);
  var u = r(e);
  return i < l ? u * (i / l / s + 1 / a - 1 / a) * l * s : (n = (t = (1 + s / a) * i) - (t - i)) > c || n != n ? u * (1 / 0) : u * n;
};