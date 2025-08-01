"use strict";

var r = require("./2377");
var i = require("./2378");
module.exports = function (e, t) {
  return e && !r(t) ? i(e, t) : t;
};