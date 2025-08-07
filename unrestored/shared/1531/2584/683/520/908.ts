"use strict";

var r = require("./393");
var i = r.a(function (e) {
  return null === e ? "Null" : undefined === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
exports.a = i;