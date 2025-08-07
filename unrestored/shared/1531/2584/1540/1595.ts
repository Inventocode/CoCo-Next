var r = require("./1623/86");
var o = require("./1594/940");
r({
  target: "Math",
  stat: true,
  forced: o != Math.expm1
}, {
  expm1: o
});