var r = require("./1633/86/index");
var o = require("./1253/472");
var i = require("./1734/439");
var a = require("./1666/241");
var s = require("./1633/167");
var c = o("Reflect", "apply");
var l = Function.apply;
r({
  target: "Reflect",
  stat: !0,
  forced: !s(function () {
    c(function () {});
  })
}, {
  apply: function (e, t, n) {
    i(e);
    a(n);
    return c ? c(e, t, n) : l.call(e, t, n);
  }
});