"use strict";

var r = require("../1626/86/index");
var o = require("../1738/272");
var i = require("./941");
var a = require("../1623/309");
var s = require("../1727/439");
var c = require("../1534/300/index");
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