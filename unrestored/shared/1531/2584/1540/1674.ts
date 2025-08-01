"use strict";

var r = require("./1633/86/index");
var o = require("./1684/1075");
var i = require("./1684/421");
var a = require("./1745/310");
r({
  target: "String",
  proto: !0,
  forced: !require("./1684/1076")("includes")
}, {
  includes: function (e) {
    return !!~a(i(this)).indexOf(a(o(e)), arguments.length > 1 ? arguments[1] : void 0);
  }
});