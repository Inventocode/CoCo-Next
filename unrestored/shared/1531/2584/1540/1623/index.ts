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