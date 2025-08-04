var r = require("./1623/86");
var o = require("./1736/167");
var i = require("./1738/231");
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