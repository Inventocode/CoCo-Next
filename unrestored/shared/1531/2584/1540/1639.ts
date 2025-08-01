var r = require("./1633/86/index");
var o = require("./1633/231");
var i = require("./1738/709").onFreeze;
var a = require("./1638/826");
var s = require("./1633/167");
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