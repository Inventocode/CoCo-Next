"use strict";

import * as r from "./1707/258/index";
var o = require("./1707/399").every;
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("every", function (e) {
  return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
});