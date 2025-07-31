"use strict";

var r = require("./951/index");
var i = require("./1765/index");
var o = require("./1769");
var a = require("./1770") || 0;
function s() {
  return i(a);
}
module.exports = s;
module.exports.generate = s;
module.exports.seed = function (t) {
  r.seed(t);
  return module.exports;
};
module.exports.worker = function (t) {
  a = t;
  return module.exports;
};
module.exports.characters = function (e) {
  if (void 0 !== e) {
    r.characters(e);
  }
  return r.shuffled();
};
module.exports.isValid = o;