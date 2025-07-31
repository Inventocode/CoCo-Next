"use strict";

var r = require("./1626/86/index");
var o = require("./1677/1074");
var i = require("./1676/421");
var a = require("./1738/310");
r({
  target: "String",
  proto: !0,
  forced: !require("./1677/1075")("includes")
}, {
  includes: function (e) {
    return !!~a(i(this)).indexOf(a(o(e)), arguments.length > 1 ? arguments[1] : void 0);
  }
});