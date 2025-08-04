"use strict";

var r = require("../1623/86");
var o = require("./814");
var i = require("../1678/437");
var a = require("../1568/708");
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