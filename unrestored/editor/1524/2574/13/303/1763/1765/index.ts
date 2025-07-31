"use strict";

var r;
var i;
var o = require("./1766/index");
require("../951/index");
module.exports = function (e) {
  var t = "";
  var n = Math.floor(.001 * (Date.now() - 1567752802062));
  if (n === i) {
    r++;
  } else {
    r = 0;
    i = n;
  }
  t += o(7);
  t += o(e);
  if (r > 0) {
    t += o(r);
  }
  return t += o(n);
};