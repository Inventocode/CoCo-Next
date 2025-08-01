var r = require("./1633/86/index");
var o = require("./1253/472");
var i = require("./1666/241");
r({
  target: "Reflect",
  stat: !0,
  sham: !require("./1638/826")
}, {
  preventExtensions: function (e) {
    i(e);
    try {
      var t = o("Object", "preventExtensions");
      if (t) {
        t(e);
      }
      return !0;
    } catch (n) {
      return !1;
    }
  }
});