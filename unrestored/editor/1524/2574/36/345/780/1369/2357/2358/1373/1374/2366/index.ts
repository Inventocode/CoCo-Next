"use strict";

var r = require("./2367");
var i = require("./2368");
module.exports = function (e, t) {
  return e && !r(t) ? i(e, t) : t;
};