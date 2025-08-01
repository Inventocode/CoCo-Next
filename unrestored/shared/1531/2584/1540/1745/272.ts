var r = require("../1633/167");
module.exports = !r(function () {
  return 7 != Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1];
});