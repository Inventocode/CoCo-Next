"use strict";

import * as r from "../442";
module.exports = function (e, t) {
  r.forEach(e, function (n, r) {
    if (r !== t && r.toUpperCase() === t.toUpperCase()) {
      e[t] = n;
      delete e[r];
    }
  });
};