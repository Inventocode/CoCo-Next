"use strict";

import * as r from "../1707/258/index";
import * as o from "./1212";
var i = r.aTypedArray;
(0, r.exportTypedArrayMethod)("copyWithin", function (e, t) {
  return o.call(i(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
});