"use strict";

var r = require("../../220");
var i = require("../../../../../1531/2584/1/index");
var a = i.mark(u);
function s() {
  var e = require("../../../1187/index");
  s = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.createConfigItem = u;
exports.createItemFromDescriptor = l;
exports.getItemDescriptor = function (e) {
  if (null != e && e[c]) {
    return e._descriptor;
  }
  return;
};
var o = require("./2802");
function l(e) {
  return new p(e);
}
function u(e) {
  var t;
  var n;
  var r;
  var u;
  var c;
  var p = arguments;
  return i.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = p.length > 1 && void 0 !== p[1] ? p[1] : {};
          n = t.dirname;
          r = void 0 === n ? "." : n;
          u = t.type;
          return i.delegateYield((0, o.createDescriptor)(e, s().resolve(r), {
            type: u,
            alias: "programmatic item"
          }), "t0", 2);
        case 2:
          c = i.t0;
          return i.abrupt("return", l(c));
        case 4:
        case "end":
          return i.stop();
      }
    }
  }, a);
}
var c = Symbol.for("@babel/core@7 - ConfigItem");
var p = function e(t) {
  r(this, e);
  this._descriptor = void 0;
  this[c] = !0;
  this.value = void 0;
  this.options = void 0;
  this.dirname = void 0;
  this.name = void 0;
  this.file = void 0;
  this._descriptor = t;
  Object.defineProperty(this, "_descriptor", {
    enumerable: !1
  });
  Object.defineProperty(this, c, {
    enumerable: !1
  });
  this.value = this._descriptor.value;
  this.options = this._descriptor.options;
  this.dirname = this._descriptor.dirname;
  this.name = this._descriptor.name;
  this.file = this._descriptor.file ? {
    request: this._descriptor.file.request,
    resolved: this._descriptor.file.resolved
  } : void 0;
  Object.freeze(this);
};
Object.freeze(p.prototype);