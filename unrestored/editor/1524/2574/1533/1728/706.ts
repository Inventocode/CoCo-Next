var r = require("../1556/473");
var o = Math.max;
var i = Math.min;
module.exports = function (e, t) {
  var n = r(e);
  return n < 0 ? o(n + t, 0) : i(n, t);
};