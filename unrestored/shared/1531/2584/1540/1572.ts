"use strict";

var r = require("./1633/86/index");
var o = require("./1633/167");
var i = require("./1557/707");
r({
  target: "Array",
  stat: !0,
  forced: o(function () {
    function e() {}
    return !(Array.of.call(e) instanceof e);
  })
}, {
  of: function () {
    for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e;) {
      i(n, e, arguments[e++]);
    }
    n.length = t;
    return n;
  }
});