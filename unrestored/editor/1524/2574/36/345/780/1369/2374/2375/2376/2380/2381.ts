"use strict";

import * as r from "../2377/968/index";
import * as i from "./1380";
var o = i("%Function.prototype.apply%");
var a = i("%Function.prototype.call%");
var s = i("%Reflect.apply%", !0) || r.call(a, o);
var c = i("%Object.defineProperty%", !0);
if (c) {
  try {
    c({}, "a", {
      value: 1
    });
  } catch (l) {
    c = null;
  }
}
module.exports = function () {
  return s(r, a, arguments);
};
var u = function () {
  return s(r, o, arguments);
};
if (c) {
  c(e.exports, "apply", {
    value: u
  });
} else {
  e.exports.apply = u;
}