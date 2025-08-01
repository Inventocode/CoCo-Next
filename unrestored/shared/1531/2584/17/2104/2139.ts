"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Registry = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = function () {
  function e() {
    this.field_map = {};
  }
  e.prototype.register = function (e, t) {
    if (!e) {
      throw new Error('Invalid field type "' + e + '"');
    }
    this.field_map[e] = t;
  };
  e.prototype.from_json = function (e) {
    var t = e.type;
    if (!t || !this.field_map[t]) {
      throw new Error('Custom field type "' + t + '" not found');
    }
    return new this.field_map[t](e);
  };
  return e;
}();
var a = function () {
  function e() {
    this.field = new o();
  }
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Registry = a;