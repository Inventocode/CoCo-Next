"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
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
};
var r = require("../2638");
var a = require("./3207");