"use strict";

import * as r from "./1626/86/index";
import * as o from "./1626/167";
import * as i from "./1550/707";
r({
  target: "Array",
  stat: !0,
  forced: o(function () {
    function e() {}
    return !(Array.of.call(e) instanceof e);
  })
}, {
  of: function () {
    for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e;) {
      i(n, e, arguments[e++]);
    }
    n.length = t;
    return n;
  }
});