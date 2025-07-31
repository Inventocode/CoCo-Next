"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.AsyncContainerModule = exports.ContainerModule = void 0;
var r = require("./713");
var i = function (e) {
  this.id = r.id();
  this.registry = e;
};
exports.ContainerModule = i;
var o = function (e) {
  this.id = r.id();
  this.registry = e;
};
exports.AsyncContainerModule = o;