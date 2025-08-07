var r = require("../1623/86");
var o = require("./1234").entries;
r({
  target: "Object",
  stat: true
}, {
  entries: function (e) {
    return o(e);
  }
});