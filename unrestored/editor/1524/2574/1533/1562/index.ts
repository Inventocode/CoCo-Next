"use strict";

var r = require("../1626/86/index");
var o = require("./813");
var i = require("../935/437");
var a = require("../1561/708");
var s = [].join;
var c = o != Object;
var l = a("join", ",");
r({
  target: "Array",
  proto: !0,
  forced: c || !l
}, {
  join: function (e) {
    return s.call(i(this), void 0 === e ? "," : e);
  }
});