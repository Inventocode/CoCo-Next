"use strict";

var n = require("./595");
var o = require("./74");
var i = require("./63");
!function () {
  function t() {}
  t.prototype.encode = function (t, e, r, a, u) {
    var s;
    switch (e) {
      case o.a.QR_CODE:
        s = new n.a();
        break;
      default:
        throw new i.a("No encoder available for format " + e);
    }
    return s.encode(t, e, r, a, u);
  };
}();