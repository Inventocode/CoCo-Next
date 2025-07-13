"use strict";

import * as r from "../../951/index";
import * as i from "./1767";
import * as o from "./1768";
module.exports = function (e) {
  for (var t, n = 0, a = ""; !t;) {
    a += o(i, r.get(), 1);
    t = e < Math.pow(16, n + 1);
    n++;
  }
  return a;
};