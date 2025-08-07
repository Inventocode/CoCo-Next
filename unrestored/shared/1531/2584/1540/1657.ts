var r = require("./1623/86");
var o = require("./1659/241");
var i = require("./1659/386/index").f;
r({
  target: "Reflect",
  stat: true
}, {
  deleteProperty: function (e, t) {
    var n = i(o(e), t);
    return !(n && !n.configurable) && delete e[t];
  }
});