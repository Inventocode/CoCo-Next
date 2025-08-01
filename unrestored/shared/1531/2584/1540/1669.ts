"use strict";

var r = require("./1745/398");
var o = require("./1666/241");
var i = require("./1745/310");
var a = require("./1633/167");
var s = require("./1667/944");
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
    return "/" + t + "/" + i(void 0 === n && e instanceof RegExp && !("flags" in c) ? s.call(e) : n);
  }, {
    unsafe: !0
  });
}