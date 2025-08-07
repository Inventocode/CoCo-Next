var r = require("./1623/86");
var o = require("./1725/1222");
r({
  target: "Array",
  proto: true,
  forced: o !== [].lastIndexOf
}, {
  lastIndexOf: o
});