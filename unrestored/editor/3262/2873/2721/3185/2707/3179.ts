"use strict";

export default (function (e, t) {
  if ((0, r.isBlockStatement)(e) && ((0, r.isFunction)(t) || (0, r.isCatchClause)(t))) {
    return !1;
  }
  if ((0, r.isPattern)(e) && ((0, r.isFunction)(t) || (0, r.isCatchClause)(t))) {
    return !0;
  }
  return (0, r.isScopable)(e);
});
import * as r from "./2627";