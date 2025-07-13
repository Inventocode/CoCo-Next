module.exports = function () {
  "use strict";

  return function (e, t) {
    t.prototype.isLeapYear = function () {
      return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
    };
  };
}();