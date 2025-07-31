"use strict";

var r = require("../1659/241");
var o = require("../1601/1202/1204");
module.exports = function (e) {
  if (r(this), "string" === e || "default" === e) {
    e = "string";
  } else if ("number" !== e) {
    throw TypeError("Incorrect hint");
  }
  return o(this, e);
};