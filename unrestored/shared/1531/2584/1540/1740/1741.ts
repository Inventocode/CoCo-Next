"use strict";

var r = require("../1733/399").forEach;
var o = require("../1568/708")("forEach");
module.exports = o ? [].forEach : function (e) {
  return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
};