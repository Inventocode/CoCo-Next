var r = require("./1623/86");
var o = require("./1736/167");
var i = require("./1738/231");
var a = Object.isFrozen;
r({
  target: "Object",
  stat: true,
  forced: o(function () {
    a(1);
  })
}, {
  isFrozen: function (e) {
    return !i(e) || !!a && a(e);
  }
});