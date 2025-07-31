"use strict";

var r = require("./1626/86/index");
var o = require("./1556/1213");
var i = require("./1623/309");
var a = require("./1728/257");
var s = require("./1727/439");
var c = require("./1550/820/index");
r({
  target: "Array",
  proto: !0
}, {
  flatMap: function (e) {
    var t;
    var n = i(this);
    var r = a(n.length);
    s(e);
    (t = c(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0);
    return t;
  }
});