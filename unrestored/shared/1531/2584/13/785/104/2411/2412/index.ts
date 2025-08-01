var r = require("./718/index");
var i = require("./446");
var o = require("./535");
module.exports = function (e) {
  return "string" == typeof e || !i(e) && o(e) && "[object String]" == r(e);
};