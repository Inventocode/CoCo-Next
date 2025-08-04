var r = require("./1623/86");
var o = require("./1736/167");
var i = require("./1623/309");
var a = require("./1660/495");
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