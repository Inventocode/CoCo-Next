"use strict";

var r = require("../936/1066/1220").IteratorPrototype;
var o = require("./575");
var i = require("./627");
var a = require("../1745/531");
var s = require("../936/823");
var c = function () {
  return this;
};
module.exports = function (e, t, n) {
  var l = t + " Iterator";
  e.prototype = o(r, {
    next: i(1, n)
  });
  a(e, l, !1, !0);
  s[l] = c;
  return e;
};