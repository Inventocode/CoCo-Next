var r = require("./1626/86/index");
var o = require("./1626/167");
var i = require("./1626/231");
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