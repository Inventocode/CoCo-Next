var r = require("../../1623/272");
var o = require("../../1736/167");
var i = require("../../1743/1072/1057");
module.exports = !r && !o(function () {
  return 7 != Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a;
});