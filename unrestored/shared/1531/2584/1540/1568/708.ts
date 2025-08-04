"use strict";

var r = require("../1736/167");
module.exports = function (e, t) {
  var n = [][e];
  return !!n && r(function () {
    n.call(null, t || function () {
      throw 1;
    }, 1);
  });
};