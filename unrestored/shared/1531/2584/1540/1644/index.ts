var r = require("../1623/86");
var o = require("./1231");
r({
  global: true,
  forced: parseFloat != o
}, {
  parseFloat: o
});