var r = require("./1626/86/index");
var o = require("./1631/825");
var i = require("./1626/167");
var a = require("./1626/231");
var s = require("./1731/709").onFreeze;
var c = Object.freeze;
r({
  target: "Object",
  stat: !0,
  forced: i(function () {
    c(1);
  }),
  sham: !o
}, {
  freeze: function (e) {
    return c && a(e) ? c(s(e)) : e;
  }
});