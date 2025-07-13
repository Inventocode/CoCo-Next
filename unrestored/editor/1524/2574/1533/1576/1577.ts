"use strict";

import * as r from "../1659/241";
import * as o from "../1601/1202/1204";
module.exports = function (e) {
  if (r(this), "string" === e || "default" === e) {
    e = "string";
  } else if ("number" !== e) {
    throw TypeError("Incorrect hint");
  }
  return o(this, e);
};