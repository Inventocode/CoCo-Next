var r = require("../1633/86/index");
var o = require("../1745/194");
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