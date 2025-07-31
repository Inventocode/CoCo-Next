var r = require("../1626/86/index");
var o = require("./241");
var i = require("./1218");
var a = require("./634");
if (a) {
  r({
    target: "Reflect",
    stat: !0
  }, {
    setPrototypeOf: function (e, t) {
      o(e);
      i(t);
      try {
        a(e, t);
        return !0;
      } catch (n) {
        return !1;
      }
    }
  });
}