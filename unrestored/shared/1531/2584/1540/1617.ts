var r = require("./1623/86");
var o = require("./1644/1231");
r({
  target: "Number",
  stat: true,
  forced: Number.parseFloat != o
}, {
  parseFloat: o
});