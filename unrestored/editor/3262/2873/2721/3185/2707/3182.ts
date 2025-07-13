"use strict";

export default (function (e) {
  return (0, r.isVariableDeclaration)(e, {
    kind: "var"
  }) && !e[a.BLOCK_SCOPED_SYMBOL];
});
import * as r from "./2627";
import * as a from "./2651";