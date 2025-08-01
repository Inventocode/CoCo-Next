"use strict";

var r = require("../../442");
module.exports = function (e, t, n) {
  r.forEach(n, function (n) {
    e = n(e, t);
  });
  return e;
};