/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1623
 */

"use strict";

var r = require("./86");
var o = require("./272");
var i = require("./942");
var a = require("./309");
var s = require("./439");
var c = require("./300");
if (o) {
  r({
    target: "Object",
    proto: true,
    forced: i
  }, {
    __defineSetter__: function (e, t) {
      c.f(a(this), e, {
        set: s(t),
        enumerable: true,
        configurable: true
      });
    }
  });
}