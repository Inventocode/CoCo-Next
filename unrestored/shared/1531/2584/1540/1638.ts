var r = require("./1623/86");
var o = require("./1738/231");
var i = require("./1738/709").onFreeze;
var a = require("./1664/826");
var s = require("./1736/167");
var c = Object.preventExtensions;
r({
  target: "Object",
  stat: !0,
  forced: s(function () {
    c(1);
  }),
  sham: !a
}, {
  preventExtensions: function (e) {
    return c && o(e) ? c(i(e)) : e;
  }
});