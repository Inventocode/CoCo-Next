"use strict";

var r = require("./1738/945").charAt;
import * as o from "./1738/310";
import * as i from "./1738/423/index";
import * as a from "./935/1065/index";
var s = i.set;
var c = i.getterFor("String Iterator");
a(String, "String", function (e) {
  s(this, {
    type: "String Iterator",
    string: o(e),
    index: 0
  });
}, function () {
  var e;
  var t = c(this);
  var n = t.string;
  var o = t.index;
  return o >= n.length ? {
    value: void 0,
    done: !0
  } : (e = r(n, o), t.index += e.length, {
    value: e,
    done: !1
  });
});