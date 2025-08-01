"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.tagProperty = exports.tagParameter = exports.decorate = void 0;
var r = require("./1312/443");
var i = require("./358");
function o(e, t, n, i, o) {
  var a = {};
  var s = "number" === typeof o;
  var c = void 0 !== o && s ? o.toString() : n;
  if (s && void 0 !== n) {
    throw new Error(r.INVALID_DECORATOR_OPERATION);
  }
  if (Reflect.hasOwnMetadata(e, t)) {
    a = Reflect.getMetadata(e, t);
  }
  var u = a[c];
  if (Array.isArray(u)) {
    for (var l = 0, f = u; l < f.length; l++) {
      var d = f[l];
      if (d.key === i.key) {
        throw new Error(r.DUPLICATED_METADATA + " " + d.key.toString());
      }
    }
  } else {
    u = [];
  }
  u.push(i);
  a[c] = u;
  Reflect.defineMetadata(e, a, t);
}
function a(e, t) {
  Reflect.decorate(e, t);
}
function s(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
exports.tagParameter = function (e, t, n, r) {
  o(i.TAGGED, e, t, r, n);
};
exports.tagProperty = function (e, t, n) {
  o(i.TAGGED_PROP, e.constructor, t, n);
};
exports.decorate = function (e, t, n) {
  if ("number" === typeof n) {
    a([s(n, e)], t);
  } else {
    if ("string" === typeof n) {
      Reflect.decorate([e], t, n);
    } else {
      a([e], t);
    }
  }
};