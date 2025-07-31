"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r = require("./2629/index");
var i = function (e) {
  switch (e) {
    case "string":
      return (0, r.stringTypeAnnotation)();
    case "number":
      return (0, r.numberTypeAnnotation)();
    case "undefined":
      return (0, r.voidTypeAnnotation)();
    case "boolean":
      return (0, r.booleanTypeAnnotation)();
    case "function":
      return (0, r.genericTypeAnnotation)((0, r.identifier)("Function"));
    case "object":
      return (0, r.genericTypeAnnotation)((0, r.identifier)("Object"));
    case "symbol":
      return (0, r.genericTypeAnnotation)((0, r.identifier)("Symbol"));
    case "bigint":
      return (0, r.anyTypeAnnotation)();
  }
  throw new Error("Invalid typeof value: " + e);
};
exports.default = i;