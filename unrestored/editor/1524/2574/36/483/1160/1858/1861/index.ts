var r = require("./1862/index");
var i = require("./1865");
module.exports = function (e) {
  return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e);
};