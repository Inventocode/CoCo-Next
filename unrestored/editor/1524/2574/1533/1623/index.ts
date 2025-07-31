var r = require("../1626/86/index");
var o = require("../1626/167");
var i = require("./309");
var a = require("./495");
var s = require("./1066");
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