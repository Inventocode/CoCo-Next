"use strict";

import * as r from "../../442";
module.exports = function (e, t, n) {
  r.forEach(n, function (n) {
    e = n(e, t);
  });
  return e;
};