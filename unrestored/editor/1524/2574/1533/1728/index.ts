"use strict";

import * as r from "../1707/258/index";
import * as o from "./257";
import * as i from "./706";
import * as a from "./948";
var s = r.aTypedArray;
(0, r.exportTypedArrayMethod)("subarray", function (e, t) {
  var n = s(this);
  var r = n.length;
  var c = i(e, r);
  return new (a(n))(n.buffer, n.byteOffset + c * n.BYTES_PER_ELEMENT, o((void 0 === t ? r : i(t, r)) - c));
});