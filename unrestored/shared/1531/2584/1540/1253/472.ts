var r = require("../1745/194");
var o = function (e) {
  return "function" == typeof e ? e : void 0;
};
module.exports = function (e, t) {
  return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t];
};