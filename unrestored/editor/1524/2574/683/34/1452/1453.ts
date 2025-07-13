"use strict";

exports.a = function (e) {
  var t = this.constructor;
  return this.then(function (n) {
    return t.resolve(e()).then(function () {
      return n;
    });
  }, function (n) {
    return t.resolve(e()).then(function () {
      return t.reject(n);
    });
  });
};