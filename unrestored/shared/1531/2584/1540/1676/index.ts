"use strict";

var r = require("../1623/86");
var o = require("./1246").end;
r({
  target: "String",
  proto: !0,
  forced: require("./1247")
}, {
  padEnd: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});