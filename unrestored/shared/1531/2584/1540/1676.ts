"use strict";

var r = require("./1633/86/index");
var o = require("./1677/1246").end;
r({
  target: "String",
  proto: !0,
  forced: require("./1677/1247")
}, {
  padEnd: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});