"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./1366/444");
var i = require("./359");
var o = require("./1366/498");
exports.postConstruct = function () {
  return function (e, t, n) {
    var a = new o.Metadata(i.POST_CONSTRUCT, t);
    if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, e.constructor)) {
      throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS);
    }
    Reflect.defineMetadata(i.POST_CONSTRUCT, a, e.constructor);
  };
};