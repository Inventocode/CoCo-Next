"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./715");
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