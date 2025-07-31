"use strict";

var r = require("../1626/86/index");
var o = require("../1534/386").f;
var i = require("../1728/257");
var a = require("../1738/310");
var s = require("./1074");
var c = require("../1676/421");
var l = require("./1075");
var u = require("../1534/530");
var d = "".startsWith;
var p = Math.min;
var f = l("startsWith");
r({
  target: "String",
  proto: !0,
  forced: !(!u && !f && !!function () {
    var e = o(String.prototype, "startsWith");
    return e && !e.writable;
  }()) && !f
}, {
  startsWith: function (e) {
    var t = a(c(this));
    s(e);
    var n = i(p(arguments.length > 1 ? arguments[1] : void 0, t.length));
    var r = a(e);
    return d ? d.call(t, r, n) : t.slice(n, n + r.length) === r;
  }
});