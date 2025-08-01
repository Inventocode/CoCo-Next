var r = require("./1869/index");
var i = require("./1872");
module.exports = function (e) {
  return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e);
};