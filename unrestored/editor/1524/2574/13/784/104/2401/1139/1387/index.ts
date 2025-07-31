var r = require("./971");
module.exports = function (e) {
  return "function" == typeof e ? e : r;
};