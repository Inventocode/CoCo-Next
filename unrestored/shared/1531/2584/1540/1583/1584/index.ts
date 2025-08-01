"use strict";

var r = require("../../1666/241");
var o = require("./1207");
module.exports = function (e) {
  r(this);
  if ("string" === e || "default" === e) {
    e = "string";
  } else if ("number" !== e) {
    throw TypeError("Incorrect hint");
  }
  return o(this, e);
};