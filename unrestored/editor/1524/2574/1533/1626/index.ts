var r = require("./86/index");
var o = require("./167");
var i = require("./231");
var a = Object.isFrozen;
r({
  target: "Object",
  stat: !0,
  forced: o(function () {
    a(1);
  })
}, {
  isFrozen: function (e) {
    return !i(e) || !!a && a(e);
  }
});