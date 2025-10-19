/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1636
 */

"use strict";

var r = require("./1623/86");
var o = require("./1623/272");
var i = require("./1623/942");
var a = require("./1623/309");
var s = require("./1656/628");
var c = require("./1660/495");
var l = require("./1659/386/index").f;
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __lookupGetter__: function (e) {
      var t;
      var n = a(this);
      var r = s(e);
      do {
        if (t = l(n, r)) {
          return t.get;
        }
      } while (n = c(n));
    }
  });
}