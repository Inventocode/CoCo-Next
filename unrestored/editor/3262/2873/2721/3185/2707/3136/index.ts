"use strict";

export default (function (e) {
  for (var t = [], n = 0; n < e.children.length; n++) {
    var i = e.children[n];
    if ((0, r.isJSXText)(i)) {
      (0, a.default)(i, t);
    } else {
      if ((0, r.isJSXExpressionContainer)(i)) {
        i = i.expression;
      }
      if (!(0, r.isJSXEmptyExpression)(i)) {
        t.push(i);
      }
    }
  }
  return t;
});
import * as r from "../2627";
import * as a from "./3137";