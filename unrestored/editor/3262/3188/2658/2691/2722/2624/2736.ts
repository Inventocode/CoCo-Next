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
      e = (0, r.isFunction)(t) ? (0, i.returnStatement)(e) : (0, i.expressionStatement)(e);
    }
    n = [e];
  }
  return (0, i.blockStatement)(n);
});
import * as r from "./2625";
import * as i from "./2629/index";