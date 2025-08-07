"use strict";

var r = require("./1623/86");
var o = require("./1659/386/index").f;
var i = require("./1735/257");
var a = require("./1745/310");
var s = require("./1684/1075");
var c = require("./1675/421");
var l = require("./1684/1076");
var u = require("./1684/530");
var d = "".endsWith;
var p = Math.min;
var f = l("endsWith");
r({
  target: "String",
  proto: true,
  forced: !(!u && !f && !!function () {
    var e = o(String.prototype, "endsWith");
    return e && !e.writable;
  }()) && !f
}, {
  endsWith: function (e) {
    var t = a(c(this));
    s(e);
    var n = arguments.length > 1 ? arguments[1] : undefined;
    var r = i(t.length);
    var o = undefined === n ? r : p(i(n), r);
    var l = a(e);
    return d ? d.call(t, l, o) : t.slice(o - l.length, o) === l;
  }
});