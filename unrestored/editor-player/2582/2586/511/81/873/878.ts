"use strict";

var n = require("./260");
var o = require("../404/index");
var i = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r];
      }
    })(e, r);
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r);
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
!function (t) {
  function e(e) {
    if (void 0 === e) {
      e = 500;
    }
    return t.call(this, new o.a(), e) || this;
  }
  i(e, t);
}(n.a);