"use strict";

import * as r from "../../445";
module.exports = function (e, t, n) {
  r.forEach(n, function (n) {
    e = n(e, t);
  });
  return e;
};