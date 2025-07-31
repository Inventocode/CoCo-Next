"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.postConstruct = void 0;
var r = require("./838/443");
var i = require("./358");
var o = require("./2088/496");
exports.postConstruct = function () {
  return function (e, t, n) {
    var a = new o.Metadata(i.POST_CONSTRUCT, t);
    if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, e.constructor)) {
      throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS);
    }
    Reflect.defineMetadata(i.POST_CONSTRUCT, a, e.constructor);
  };
};