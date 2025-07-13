"use strict";

import * as r from "../1534/628";
import * as o from "../1534/300/index";
import * as i from "../1250/627";
module.exports = function (e, t, n) {
  var a = r(t);
  if (a in e) {
    o.f(e, a, i(0, n));
  } else {
    e[a] = n;
  }
};