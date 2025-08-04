var r = require("./1623/86");
var o = require("./1646/827/index");
var i = require("./1557/707");
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