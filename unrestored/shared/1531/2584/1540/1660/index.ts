var r = require("../1623/86");
var o = require("../1659/241");
var i = require("./495");
r({
  target: "Reflect",
  stat: !0,
  sham: !require("./1067")
}, {
  getPrototypeOf: function (e) {
    return i(o(e));
  }
});