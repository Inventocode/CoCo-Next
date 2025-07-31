"use strict";

var r = require("./1948");
var i = require("./1949");
module.exports = function (e, t) {
  return e && !r(t) ? i(e, t) : t;
};