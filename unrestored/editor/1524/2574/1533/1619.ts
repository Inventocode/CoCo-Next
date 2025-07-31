var r = require("./1626/86/index");
var o = require("./1639/826/index");
var i = require("./1550/707");
r({
  target: "Object",
  stat: !0
}, {
  fromEntries: function (e) {
    var t = {};
    o(e, function (e, n) {
      i(t, e, n);
    }, {
      AS_ENTRIES: !0
    });
    return t;
  }
});