var r = require("../1676/421");
var o = require("../1738/310");
var i = /"/g;
module.exports = function (e, t, n, a) {
  var s = o(r(e));
  var c = "<" + t;
  if ("" !== n) {
    c += " " + n + '="' + o(a).replace(i, "&quot;") + '"';
  }
  return c + ">" + s + "</" + t + ">";
};