"use strict";

var r = require("./1626/231");
var o = require("./1534/300/index");
var i = require("./1623/495");
var a = require("./1735/247/index")("hasInstance");
var s = Function.prototype;
if (!(a in s)) {
  o.f(s, a, {
    value: function (e) {
      if ("function" != typeof this || !r(e)) {
        return !1;
      }
      if (!r(this.prototype)) {
        return e instanceof this;
      }
      for (; e = i(e);) {
        if (this.prototype === e) {
          return !0;
        }
      }
      return !1;
    }
  });
}