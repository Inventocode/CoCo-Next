"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.injectable = void 0;
var r = require("./838/443");
var i = require("./358");
exports.injectable = function () {
  return function (e) {
    if (Reflect.hasOwnMetadata(i.PARAM_TYPES, e)) {
      throw new Error(r.DUPLICATED_INJECTABLE_DECORATOR);
    }
    var t = Reflect.getMetadata(i.DESIGN_PARAM_TYPES, e) || [];
    Reflect.defineMetadata(i.PARAM_TYPES, t, e);
    return e;
  };
};