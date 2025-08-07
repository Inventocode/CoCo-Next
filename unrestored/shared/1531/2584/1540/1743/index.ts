var r = require("../1623/86");
var o = require("../1736/194");
var i = require("./1072/index");
r({
  global: true,
  bind: true,
  enumerable: true,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
});