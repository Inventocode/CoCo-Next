"use strict";

var r = require("./1633/86/index");
var o = require("./1714/399").find;
var i = require("./936/633");
var a = !0;
if ("find" in []) {
  Array(1).find(function () {
    a = !1;
  });
}
r({
  target: "Array",
  proto: !0,
  forced: a
}, {
  find: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
i("find");