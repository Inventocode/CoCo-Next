"use strict";

var r = require("./1633/86/index");
var o = require("./1745/272");
var i = require("./1622/942");
var a = require("./1731/309");
var s = require("./1541/628");
var c = require("./1585/495");
var l = require("./1541/386/index").f;
if (o) {
  r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __lookupGetter__: function (e) {
      var t;
      var n = a(this);
      var r = s(e);
      do {
        if (t = l(n, r)) {
          return t.get;
        }
      } while (n = c(n));
    }
  });
}