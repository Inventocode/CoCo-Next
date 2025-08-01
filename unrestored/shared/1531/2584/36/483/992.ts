module.exports = function () {
  "use strict";

  return function (e, t) {
    t.prototype.isoWeeksInYear = function () {
      var e = this.isLeapYear();
      var t = this.endOf("y").day();
      return 4 === t || e && 5 === t ? 53 : 52;
    };
  };
}();