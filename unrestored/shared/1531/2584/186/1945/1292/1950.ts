"use strict";

var r = require("../442");
module.exports = function (e, t) {
  r.forEach(e, function (n, r) {
    if (r !== t && r.toUpperCase() === t.toUpperCase()) {
      e[t] = n;
      delete e[r];
    }
  });
};