var r = require("./1633/86/index");
var o = require("./1666/241");
var i = require("./1541/386/index").f;
r({
  target: "Reflect",
  stat: !0
}, {
  deleteProperty: function (e, t) {
    var n = i(o(e), t);
    return !(n && !n.configurable) && delete e[t];
  }
});