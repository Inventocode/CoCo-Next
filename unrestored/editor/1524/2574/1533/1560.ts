"use strict";

var r = require("./1626/86/index");
var o = require("./1715/816").includes;
var i = require("./935/633");
r({
  target: "Array",
  proto: !0
}, {
  includes: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
i("includes");