var r = require("../1626/86/index");
var o = require("../1626/231");
var i = require("../1731/709").onFreeze;
var a = require("./825");
var s = require("../1626/167");
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