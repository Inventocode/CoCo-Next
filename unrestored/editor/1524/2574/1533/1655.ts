var r = require("./1626/86/index");
var o = require("./1659/241");
var i = Object.isExtensible;
r({
  target: "Reflect",
  stat: !0
}, {
  isExtensible: function (e) {
    o(e);
    return !i || i(e);
  }
});