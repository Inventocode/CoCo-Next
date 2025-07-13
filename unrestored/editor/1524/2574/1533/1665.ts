"use strict";

import * as r from "./1626/86/index";
var o = require("./1534/386").f;
import * as i from "./1728/257";
import * as a from "./1738/310";
import * as s from "./1677/1074";
import * as c from "./1676/421";
import * as l from "./1677/1075";
import * as u from "./1534/530";
var d = "".endsWith;
var p = Math.min;
var f = l("endsWith");
r({
  target: "String",
  proto: !0,
  forced: !(!u && !f && !!function () {
    var e = o(String.prototype, "endsWith");
    return e && !e.writable;
  }()) && !f
}, {
  endsWith: function (e) {
    var t = a(c(this));
    s(e);
    var n = arguments.length > 1 ? arguments[1] : void 0;
    var r = i(t.length);
    var o = void 0 === n ? r : p(i(n), r);
    var l = a(e);
    return d ? d.call(t, l, o) : t.slice(o - l.length, o) === l;
  }
});