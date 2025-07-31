"use strict";

var r = require("../1626/86/index");
var o = require("./1213");
var i = require("../1623/309");
var a = require("../1728/257");
var s = require("./473");
var c = require("../1550/820/index");
r({
  target: "Array",
  proto: !0
}, {
  flat: function () {
    var e = arguments.length ? arguments[0] : void 0;
    var t = i(this);
    var n = a(t.length);
    var r = c(t, 0);
    r.length = o(r, t, t, n, 0, void 0 === e ? 1 : s(e));
    return r;
  }
});