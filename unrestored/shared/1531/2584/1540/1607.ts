var r = require("./1623/86");
var o = Math.ceil;
var i = Math.floor;
r({
  target: "Math",
  stat: true
}, {
  trunc: function (e) {
    return (e > 0 ? i : o)(e);
  }
});