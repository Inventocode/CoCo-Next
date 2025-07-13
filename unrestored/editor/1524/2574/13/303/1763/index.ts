"use strict";

import * as r from "./951/index";
import * as i from "./1765/index";
import * as o from "./1769";
var a = require("./1770") || 0;
function s() {
  return i(a);
}
module.exports = s;
e.exports.generate = s;
e.exports.seed = function (t) {
  r.seed(t);
  return e.exports;
};
e.exports.worker = function (t) {
  a = t;
  return e.exports;
};
e.exports.characters = function (e) {
  if (void 0 !== e) {
    r.characters(e);
  }
  return r.shuffled();
};
e.exports.isValid = o;