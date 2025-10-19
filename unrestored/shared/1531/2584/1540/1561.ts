/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1561
 */

"use strict";

var r = require("./1623/86");
var o = require("./1733/399").find;
var i = require("./936/633");
var a = true;
if ("find" in []) {
  Array(1).find(function () {
    a = false;
  });
}
r({
  target: "Array",
  proto: true,
  forced: a
}, {
  find: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : undefined);
  }
});
i("find");