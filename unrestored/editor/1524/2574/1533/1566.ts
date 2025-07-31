"use strict";

var r = require("./1626/86/index");
var o = require("./1722/936").left;
var i = require("./1561/708");
var a = require("./1727/629");
var s = require("./1737/750");
r({
  target: "Array",
  proto: !0,
  forced: !i("reduce") || !s && a > 79 && a < 83
}, {
  reduce: function (e) {
    return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  }
});