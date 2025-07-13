"use strict";

export default (function (e, t) {
  if ((0, r.isBlockStatement)(e)) {
    return e;
  }
  var n = [];
  if ((0, r.isEmptyStatement)(e)) {
    n = [];
  } else {
    if (!(0, r.isStatement)(e)) {
      e = (0, r.isFunction)(t) ? (0, a.returnStatement)(e) : (0, a.expressionStatement)(e);
    }
    n = [e];
  }
  return (0, a.blockStatement)(n);
});
import * as r from "./2628";
import * as a from "./2632/index";