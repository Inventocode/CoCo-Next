var r = require("./1633/86/index");
var o = require("./1633/167");
var i = require("./1731/309");
var a = require("./1585/495");
var s = require("./1660/1067");
r({
  target: "Object",
  stat: !0,
  forced: o(function () {
    a(1);
  }),
  sham: !s
}, {
  getPrototypeOf: function (e) {
    return a(i(e));
  }
});