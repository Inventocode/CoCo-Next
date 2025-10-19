/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：751
 */

"use strict";

var r = require("../1664/472");
var o = require("../1623/300");
var i = require("../1742/247/index");
var a = require("../1623/272");
var s = i("species");
module.exports = function (e) {
  var t = r(e);
  var n = o.f;
  if (a && t && !t[s]) {
    n(t, s, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};