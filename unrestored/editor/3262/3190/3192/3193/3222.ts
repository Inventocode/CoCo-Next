"use strict";

export default (function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key || e.property;
  if (!e.computed && (0, r.isIdentifier)(t)) {
    t = (0, a.stringLiteral)(t.name);
  }
  return t;
});
import * as r from "./2628";
import * as a from "./2632/index";