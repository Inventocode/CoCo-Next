var r = require("../../1738/272");
var o = require("../../1626/167");
var i = require("../../1736/1071/1056");
module.exports = !r && !o(function () {
  return 7 != Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a;
});