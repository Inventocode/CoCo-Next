var r = require("../1623/272");
var o = require("../1623/300");
var i = require("./944");
var a = require("../1736/167");
if (r && a(function () {
  return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
    dotAll: true,
    sticky: true
  });
})) {
  o.f(RegExp.prototype, "flags", {
    configurable: true,
    get: i
  });
}