var r = require("./1633/86/index");
var o = require("./1633/167");
var i = require("./1633/231");
var a = Object.isSealed;
r({
  target: "Object",
  stat: !0,
  forced: o(function () {
    a(1);
  })
}, {
  isSealed: function (e) {
    return !i(e) || !!a && a(e);
  }
});