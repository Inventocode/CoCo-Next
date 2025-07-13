"use strict";

export default (function (e) {
  (0, i.default)(e.node, Object.assign({}, l, {
    noScope: !0
  }));
});
import * as r from "./3086/index";
import * as i from "../../../2637/index";
import * as a from "../../../2623/index";
var s = a.numericLiteral;
var o = a.unaryExpression;
var l = i.default.visitors.merge([r.environmentVisitor, {
  ThisExpression: function (e) {
    e.replaceWith(o("void", s(0), !0));
  }
}]);