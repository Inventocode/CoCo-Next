"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.inject = exports.LazyServiceIdentifer = void 0;
var r = require("./838/443");
var i = require("./358");
var o = require("./2088/496");
var a = require("./641");
var s = function () {
  function e(e) {
    this._cb = e;
  }
  e.prototype.unwrap = function () {
    return this._cb();
  };
  return e;
}();
exports.LazyServiceIdentifer = s;
exports.inject = function (e) {
  return function (t, n, s) {
    if (void 0 === e) {
      throw new Error(r.UNDEFINED_INJECT_ANNOTATION(t.name));
    }
    var c = new o.Metadata(i.INJECT_TAG, e);
    if ("number" === typeof s) {
      a.tagParameter(t, n, s, c);
    } else {
      a.tagProperty(t, n, c);
    }
  };
};