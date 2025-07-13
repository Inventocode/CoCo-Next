"use strict";

import * as r from "./2628";
import * as a from "./2632/index";
var i = function (e, t) {
  if ((0, r.isStatement)(e)) {
    return e;
  }
  var n;
  var i = !1;
  if ((0, r.isClass)(e)) {
    i = !0;
    n = "ClassDeclaration";
  } else if ((0, r.isFunction)(e)) {
    i = !0;
    n = "FunctionDeclaration";
  } else if ((0, r.isAssignmentExpression)(e)) {
    return (0, a.expressionStatement)(e);
  }
  if (i && !e.id) {
    n = !1;
  }
  if (!n) {
    if (t) {
      return !1;
    }
    throw new Error("cannot turn ".concat(e.type, " to a statement"));
  }
  e.type = n;
  return e;
};
export default i;