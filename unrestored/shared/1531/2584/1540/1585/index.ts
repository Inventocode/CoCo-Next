"use strict";

var r = require("../1633/231");
var o = require("../1541/300");
var i = require("./495");
var a = require("../1742/247/index")("hasInstance");
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