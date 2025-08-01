"use strict";

var r = require("./595");
var i = require("./74");
var o = require("./63");
!function () {
  function t() {}
  t.prototype.encode = function (t, e, n, a, s) {
    var u;
    switch (e) {
      case i.a.QR_CODE:
        u = new r.a();
        break;
      default:
        throw new o.a("No encoder available for format " + e);
    }
    return u.encode(t, e, n, a, s);
  };
}();