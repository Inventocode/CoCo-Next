"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./444");
var i = require("../359");
var o = require("./498");
var a = require("../645");
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
    if (undefined === e) {
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