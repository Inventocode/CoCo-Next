/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1585
 */

"use strict";

var r = require("./1738/231");
var o = require("./1623/300");
var i = require("./1660/495");
var a = require("./1742/247/index")("hasInstance");
var s = Function.prototype;
if (!(a in s)) {
  o.f(s, a, {
    value: function (e) {
      if ("function" != typeof this || !r(e)) {
        return false;
      }
      if (!r(this.prototype)) {
        return e instanceof this;
      }
      for (; e = i(e);) {
        if (this.prototype === e) {
          return true;
        }
      }
      return false;
    }
  });
}