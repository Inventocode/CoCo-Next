var r = require("../1736/167");
module.exports = !r(function () {
  return 7 != Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1];
});