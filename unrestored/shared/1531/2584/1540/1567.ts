"use strict";

var r = require("./1633/86/index");
var o = require("./1722/817").includes;
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