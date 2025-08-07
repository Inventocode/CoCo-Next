"use strict";

var r = require("./1745/398/index");
var o = require("./1659/241");
var i = require("./1745/310");
var a = require("./1736/167");
var s = require("./1668/944");
var c = RegExp.prototype;
var l = c.toString;
var u = a(function () {
  return "/a/b" != l.call({
    source: "a",
    flags: "b"
  });
});
var d = "toString" != l.name;
if (u || d) {
  r(RegExp.prototype, "toString", function () {
    var e = o(this);
    var t = i(e.source);
    var n = e.flags;
    return "/" + t + "/" + i(undefined === n && e instanceof RegExp && !("flags" in c) ? s.call(e) : n);
  }, {
    unsafe: true
  });
}