var r = require("./1745/272");
var o = require("./1541/300");
var i = require("./1667/944");
var a = require("./1633/167");
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