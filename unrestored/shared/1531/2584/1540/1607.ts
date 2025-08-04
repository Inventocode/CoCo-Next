var r = require("./1623/86");
var o = Math.ceil;
var i = Math.floor;
r({
  target: "Math",
  stat: !0
}, {
  trunc: function (e) {
    return (e > 0 ? i : o)(e);
  }
});