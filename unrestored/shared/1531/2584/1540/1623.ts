"use strict";

var r = require("./1633/86/index");
var o = require("./1745/272");
var i = require("./1622/942");
var a = require("./1731/309");
var s = require("./1734/439");
var c = require("./1541/300");
if (o) {
  r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __defineSetter__: function (e, t) {
      c.f(a(this), e, {
        set: s(t),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}