var r = require("../../1745/272");
var o = require("../../1633/167");
var i = require("../../1743/1072/1057");
module.exports = !r && !o(function () {
  return 7 != Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a;
});