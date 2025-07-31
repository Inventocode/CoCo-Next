var r = require("../1626/86/index");
var o = require("../1738/194");
var i = require("./1071/index");
r({
  global: !0,
  bind: !0,
  enumerable: !0,
  forced: !o.setImmediate || !o.clearImmediate
}, {
  setImmediate: i.set,
  clearImmediate: i.clear
});