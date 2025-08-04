"use strict";

var r = require("./1623/86");
var o = require("./1721/817").includes;
var i = require("./936/633");
r({
  target: "Array",
  proto: !0
}, {
  includes: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
i("includes");