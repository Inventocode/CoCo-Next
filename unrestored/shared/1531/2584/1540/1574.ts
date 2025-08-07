"use strict";

var r = require("./1623/86");
var o = require("./1729/937").right;
var i = require("./1568/708");
var a = require("./1734/629/index");
var s = require("./1744/750");
r({
  target: "Array",
  proto: true,
  forced: !i("reduceRight") || !s && a > 79 && a < 83
}, {
  reduceRight: function (e) {
    return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});