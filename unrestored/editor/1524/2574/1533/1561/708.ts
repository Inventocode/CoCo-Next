"use strict";

import * as r from "../1626/167";
module.exports = function (e, t) {
  var n = [][e];
  return !!n && r(function () {
    n.call(null, t || function () {
      throw 1;
    }, 1);
  });
};