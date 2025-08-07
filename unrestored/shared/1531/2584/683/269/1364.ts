"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./359");
var i = function () {
  function e() {}
  e.prototype.getConstructorMetadata = function (e) {
    return {
      compilerGeneratedMetadata: Reflect.getMetadata(r.PARAM_TYPES, e),
      userGeneratedMetadata: Reflect.getMetadata(r.TAGGED, e) || {}
    };
  };
  e.prototype.getPropertiesMetadata = function (e) {
    return Reflect.getMetadata(r.TAGGED_PROP, e) || [];
  };
  return e;
}();
exports.MetadataReader = i;