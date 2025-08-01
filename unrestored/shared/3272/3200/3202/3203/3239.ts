"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  e.object = (0, r.memberExpression)(e.object, e.property, e.computed);
  e.property = t;
  e.computed = !!n;
  return e;
};
var r = require("./2642/index");