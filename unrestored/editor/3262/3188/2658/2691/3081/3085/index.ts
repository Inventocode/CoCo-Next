"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  (0, i.default)(e.node, Object.assign({}, l, {
    noScope: !0
  }));
};
var r = require("./3086/index");
var i = require("../../../2637/index");
var a = require("../../../2623/index");
var s = a.numericLiteral;
var o = a.unaryExpression;
var l = i.default.visitors.merge([r.environmentVisitor, {
  ThisExpression: function (e) {
    e.replaceWith(o("void", s(0), !0));
  }
}]);