"use strict";

import * as r from "./1380";
import * as i from "./2381";
var o = i(r("String.prototype.indexOf"));
module.exports = function (e, t) {
  var n = r(e, !!t);
  return "function" === typeof n && o(e, ".prototype.") > -1 ? i(n) : n;
};