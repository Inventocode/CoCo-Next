var r = require("./1626/86/index");
var o = require("./1659/241");
var i = require("./1623/495");
r({
  target: "Reflect",
  stat: !0,
  sham: !require("./1623/1066")
}, {
  getPrototypeOf: function (e) {
    return i(o(e));
  }
});