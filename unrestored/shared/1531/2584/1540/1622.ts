"use strict";

var r = require("./1623/86");
var o = require("./1623/272");
var i = require("./1623/942");
var a = require("./1623/309");
var s = require("./1623/439");
var c = require("./1623/300");
if (o) {
  r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __defineGetter__: function (e, t) {
      c.f(a(this), e, {
        get: s(t),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}