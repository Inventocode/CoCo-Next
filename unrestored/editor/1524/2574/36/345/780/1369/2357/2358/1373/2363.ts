"use strict";

var r = require("../445");
module.exports = function (e, t) {
  r.forEach(e, function (n, r) {
    if (r !== t && r.toUpperCase() === t.toUpperCase()) {
      e[t] = n;
      delete e[r];
    }
  });
};