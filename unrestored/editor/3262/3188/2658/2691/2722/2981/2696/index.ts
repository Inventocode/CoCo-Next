"use strict";

import * as r from "./2967";
import * as i from "./2968/index";
var a = (0, i.default)(r.smart);
export { a as smart };
var s = (0, i.default)(r.statement);
export { s as statement };
var o = (0, i.default)(r.statements);
export { o as statements };
var l = (0, i.default)(r.expression);
export { l as expression };
var u = (0, i.default)(r.program);
export { u as program };
var c = Object.assign(a.bind(void 0), {
  smart: a,
  statement: s,
  statements: o,
  expression: l,
  program: u,
  ast: a.ast
});
export default c;