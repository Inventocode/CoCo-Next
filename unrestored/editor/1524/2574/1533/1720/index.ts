"use strict";

import * as r from "../1707/258/index";
import * as o from "./1078";
var i = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)("of", function () {
  for (var e = 0, t = arguments.length, n = new (i(this))(t); t > e;) {
    n[e] = arguments[e++];
  }
  return n;
}, o);