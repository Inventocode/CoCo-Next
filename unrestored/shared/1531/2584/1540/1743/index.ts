var r = require("../1623/86");
var o = require("../1736/194");
var i = require("./1072/index");
r({
  global: !0,
  bind: !0,
  enumerable: !0,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
});