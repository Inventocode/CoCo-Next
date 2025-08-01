var r = require("./1633/86/index");
var o = require("./1638/826");
var i = require("./1633/167");
var a = require("./1633/231");
var s = require("./1738/709").onFreeze;
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