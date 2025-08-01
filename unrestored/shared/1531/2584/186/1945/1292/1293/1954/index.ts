"use strict";

var r = require("./1955");
var i = require("./1956");
module.exports = function (e, t) {
  return e && !r(t) ? i(e, t) : t;
};