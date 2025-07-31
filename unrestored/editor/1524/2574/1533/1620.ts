var r = require("./1626/86/index");
var o = require("./1626/167");
var i = require("./935/437");
var a = require("./1534/386").f;
var s = require("./1738/272");
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