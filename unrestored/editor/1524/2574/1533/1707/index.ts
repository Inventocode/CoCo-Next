"use strict";

import * as r from "./258/index";
var o = require("./399").filter;
import * as i from "./1708/index";
var a = r.aTypedArray;
(0, r.exportTypedArrayMethod)("filter", function (e) {
  var t = o(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
  return i(this, t);
});