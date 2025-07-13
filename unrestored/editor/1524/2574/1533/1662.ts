"use strict";

import * as r from "./1738/398";
import * as o from "./1659/241";
import * as i from "./1738/310";
import * as a from "./1626/167";
import * as s from "./1660/943";
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