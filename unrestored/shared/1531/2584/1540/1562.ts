"use strict";

var r = require("./1623/86");
var o = require("./1733/399").findIndex;
var i = require("./936/633");
var a = !0;
if ("findIndex" in []) {
  Array(1).findIndex(function () {
    a = !1;
  });
}
r({
  target: "Array",
  proto: !0,
  forced: a
}, {
  findIndex: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
i("findIndex");