"use strict";

var r = require("./393");
var i = Object(r.a)(function (e) {
  return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
exports.a = i;