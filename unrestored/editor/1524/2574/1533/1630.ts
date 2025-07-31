"use strict";

var r = require("./1626/86/index");
var o = require("./1738/272");
var i = require("./1615/941");
var a = require("./1623/309");
var s = require("./1534/628");
var c = require("./1623/495");
var l = require("./1534/386").f;
if (o) {
  r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __lookupSetter__: function (e) {
      var t;
      var n = a(this);
      var r = s(e);
      do {
        if (t = l(n, r)) {
          return t.set;
        }
      } while (n = c(n));
    }
  });
}