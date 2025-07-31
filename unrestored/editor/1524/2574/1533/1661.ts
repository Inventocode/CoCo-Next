var r = require("./1738/272");
var o = require("./1534/300/index");
var i = require("./1660/943");
var a = require("./1626/167");
if (r && a(function () {
  return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
    dotAll: !0,
    sticky: !0
  });
})) {
  o.f(RegExp.prototype, "flags", {
    configurable: !0,
    get: i
  });
}