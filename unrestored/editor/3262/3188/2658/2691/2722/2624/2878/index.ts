"use strict";

export default (function (e) {
  for (var t = [], n = 0; n < e.children.length; n++) {
    var a = e.children[n];
    if ((0, r.isJSXText)(a)) {
      (0, i.default)(a, t);
    } else {
      if ((0, r.isJSXExpressionContainer)(a)) {
        a = a.expression;
      }
      if (!(0, r.isJSXEmptyExpression)(a)) {
        t.push(a);
      }
    }
  }
  return t;
});
import * as r from "../2625";
import * as i from "./2879";