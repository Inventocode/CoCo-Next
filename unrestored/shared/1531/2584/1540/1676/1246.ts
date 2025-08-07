var r = require("../1735/257");
var o = require("../1745/310");
var i = require("../1679/1071");
var a = require("../1675/421");
var s = Math.ceil;
var c = function (e) {
  return function (t, n, c) {
    var l;
    var u;
    var d = o(a(t));
    var p = d.length;
    var f = undefined === c ? " " : o(c);
    var h = r(n);
    return h <= p || "" == f ? d : (l = h - p, (u = i.call(f, s(l / f.length))).length > l && (u = u.slice(0, l)), e ? d + u : u + d);
  };
};
module.exports = {
  start: c(false),
  end: c(true)
};