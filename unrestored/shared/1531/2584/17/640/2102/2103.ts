"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = Symbol.for("INJECTION");
function i(e, t, n, i) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    get: function () {
      if (i && !Reflect.hasMetadata(r, this, t)) {
        Reflect.defineMetadata(r, n(), this, t);
      }
      return Reflect.hasMetadata(r, this, t) ? Reflect.getMetadata(r, this, t) : n();
    },
    set: function (e) {
      Reflect.defineMetadata(r, e, this, t);
    }
  });
}
exports.makePropertyInjectDecorator = function (e, t) {
  return function (n) {
    return function (r, o) {
      i(r, o, function () {
        return e.get(n);
      }, t);
    };
  };
};
exports.makePropertyInjectNamedDecorator = function (e, t) {
  return function (n, r) {
    return function (o, a) {
      i(o, a, function () {
        return e.getNamed(n, r);
      }, t);
    };
  };
};
exports.makePropertyInjectTaggedDecorator = function (e, t) {
  return function (n, r, o) {
    return function (a, s) {
      i(a, s, function () {
        return e.getTagged(n, r, o);
      }, t);
    };
  };
};
exports.makePropertyMultiInjectDecorator = function (e, t) {
  return function (n) {
    return function (r, o) {
      i(r, o, function () {
        return e.getAll(n);
      }, t);
    };
  };
};