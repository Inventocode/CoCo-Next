"use strict";

var r = require("./1626/86/index");
var o = require("./1670/1243").end;
r({
  target: "String",
  proto: !0,
  forced: require("./1670/1244")
}, {
  padEnd: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});