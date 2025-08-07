"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceDB = undefined;
var r = require("tslib");
var i = require("inversify");
var o = function () {
  function e() {
    this.db = new Map();
  }
  e.prototype.add = function (e) {
    this.db.set(e.id, e);
  };
  e.prototype.remove = function (e) {
    return this.db.delete(e.id);
  };
  e.prototype.get = function (e) {
    return this.db.get(e);
  };
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.WorkspaceDB = o;