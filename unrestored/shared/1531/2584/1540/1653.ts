var r = require("./1623/86");
var o = require("./1664/472");
var i = require("./1623/439");
var a = require("./1659/241");
var s = require("./1736/167");
var c = o("Reflect", "apply");
var l = Function.apply;
r({
  target: "Reflect",
  stat: true,
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