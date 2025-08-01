var r = require("../1666/241");
var o = require("./824");
module.exports = function (e, t) {
  var n = arguments.length < 2 ? o(e) : t;
  if ("function" != typeof n) {
    throw TypeError(String(e) + " is not iterable");
  }
  return r(n.call(e));
};