import * as r from "./1626/86/index";
import * as o from "./1659/241";
var i = require("./1534/386").f;
r({
  target: "Reflect",
  stat: !0
}, {
  deleteProperty: function (e, t) {
    var n = i(o(e), t);
    return !(n && !n.configurable) && delete e[t];
  }
});