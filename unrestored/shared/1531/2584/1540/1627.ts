var r = require("./1633/86/index");
var o = require("./1633/167");
var i = require("./936/437");
var a = require("./1541/386/index").f;
var s = require("./1745/272");
var c = o(function () {
  a(1);
});
r({
  target: "Object",
  stat: !0,
  forced: !s || c,
  sham: !s
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a(i(e), t);
  }
});