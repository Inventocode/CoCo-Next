"use strict";

export default (function (e) {
  return (0, r.isVariableDeclaration)(e) && ("var" !== e.kind || e[a.BLOCK_SCOPED_SYMBOL]);
});
import * as r from "./2628";
import * as a from "./2653";