var r = require("../1684/421");
var o = require("../1745/310");
var i = "[" + require("./1078/941") + "]";
var a = RegExp("^" + i + i + "*");
var s = RegExp(i + i + "*$");
var c = function (e) {
  return function (t) {
    var n = o(r(t));
    if (1 & e) {
      n = n.replace(a, "");
    }
    if (2 & e) {
      n = n.replace(s, "");
    }
    return n;
  };
};
module.exports = {
  start: c(1),
  end: c(2),
  trim: c(3)
};