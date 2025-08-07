var r = require("./1623/86");
var o = require("./1645/1232");
r({
  target: "Number",
  stat: true,
  forced: Number.parseInt != o
}, {
  parseInt: o
});