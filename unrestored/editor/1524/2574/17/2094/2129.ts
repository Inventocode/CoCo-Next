"use strict";

import * as r from "../../1000/93";
import * as i from "../../1000/134/index";
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
export { a as Registry };