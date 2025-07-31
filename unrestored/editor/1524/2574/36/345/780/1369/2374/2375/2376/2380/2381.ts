"use strict";

var r = require("../2377/968/index");
var i = require("./1380");
var o = i("%Function.prototype.apply%");
var a = i("%Function.prototype.call%");
var s = i("%Reflect.apply%", !0) || r.call(a, o);
var c = i("%Object.defineProperty%", !0);
if (c) {
  try {
    c({}, "a", {
      value: 1
    });
  } catch (l) {
    c = null;
  }
}
module.exports = function () {
  return s(r, a, arguments);
};
var u = function () {
  return s(r, o, arguments);
};
if (c) {
  c(module.exports, "apply", {
    value: u
  });
} else {
  module.exports.apply = u;
}