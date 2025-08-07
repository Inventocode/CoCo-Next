"use strict";

var r = require("./952/index");
var i = require("./1772/index");
var o = require("./1776");
var a = require("./1777") || 0;
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
  if (undefined !== e) {
    r.characters(e);
  }
  return r.shuffled();
};
module.exports.isValid = o;