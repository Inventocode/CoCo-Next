var r = require("../1623/86");
var o = require("./472");
var i = require("../1659/241");
r({
  target: "Reflect",
  stat: true,
  sham: !require("./826")
}, {
  preventExtensions: function (e) {
    i(e);
    try {
      var t = o("Object", "preventExtensions");
      if (t) {
        t(e);
      }
      return true;
    } catch (n) {
      return false;
    }
  }
});