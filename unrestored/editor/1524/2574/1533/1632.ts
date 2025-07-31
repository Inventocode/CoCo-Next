var r = require("./1626/86/index");
var o = require("./1626/231");
var i = require("./1731/709").onFreeze;
var a = require("./1631/825");
var s = require("./1626/167");
var c = Object.seal;
r({
  target: "Object",
  stat: !0,
  forced: s(function () {
    c(1);
  }),
  sham: !a
}, {
  seal: function (e) {
    return c && o(e) ? c(i(e)) : e;
  }
});