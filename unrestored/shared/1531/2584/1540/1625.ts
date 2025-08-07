var r = require("./1623/86");
var o = require("./1664/826");
var i = require("./1736/167");
var a = require("./1738/231");
var s = require("./1738/709").onFreeze;
var c = Object.freeze;
r({
  target: "Object",
  stat: true,
  forced: i(function () {
    c(1);
  }),
  sham: !o
}, {
  freeze: function (e) {
    return c && a(e) ? c(s(e)) : e;
  }
});