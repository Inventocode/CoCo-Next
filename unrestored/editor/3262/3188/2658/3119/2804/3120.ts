"use strict";

var r = require("../../220");
var i = require("../../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var a = function () {
  function e(t, n, i) {
    r(this, e);
    this._map = new Map();
    this.key = void 0;
    this.file = void 0;
    this.opts = void 0;
    this.cwd = void 0;
    this.filename = void 0;
    this.key = n;
    this.file = t;
    this.opts = i || {};
    this.cwd = t.opts.cwd;
    this.filename = t.opts.filename;
  }
  i(e, [{
    key: "set",
    value: function (e, t) {
      this._map.set(e, t);
    }
  }, {
    key: "get",
    value: function (e) {
      return this._map.get(e);
    }
  }, {
    key: "availableHelper",
    value: function (e, t) {
      return this.file.availableHelper(e, t);
    }
  }, {
    key: "addHelper",
    value: function (e) {
      return this.file.addHelper(e);
    }
  }, {
    key: "addImport",
    value: function () {
      return this.file.addImport();
    }
  }, {
    key: "buildCodeFrameError",
    value: function (e, t, n) {
      return this.file.buildCodeFrameError(e, t, n);
    }
  }]);
  return e;
}();
exports.default = a;
a.prototype.getModuleName = function () {
  return this.file.getModuleName();
};