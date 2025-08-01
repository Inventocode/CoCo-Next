var r = require("../1633/86/index");
var o = require("../1633/231");
var i = require("../1738/709").onFreeze;
var a = require("./826");
var s = require("../1633/167");
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