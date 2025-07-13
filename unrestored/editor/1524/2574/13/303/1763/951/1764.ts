"use strict";

var r = 1;
module.exports = {
  nextValue: function () {
    return (r = (9301 * r + 49297) % 233280) / 233280;
  },
  seed: function (e) {
    r = e;
  }
};