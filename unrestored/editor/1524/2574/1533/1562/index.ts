"use strict";

import * as r from "../1626/86/index";
import * as o from "./813";
import * as i from "../935/437";
import * as a from "../1561/708";
var s = [].join;
var c = o != Object;
var l = a("join", ",");
r({
  target: "Array",
  proto: !0,
  forced: c || !l
}, {
  join: function (e) {
    return s.call(i(this), void 0 === e ? "," : e);
  }
});