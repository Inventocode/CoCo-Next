"use strict";

var r = require("./260");
var i = require("../405");
var o = function () {
  var t = function (e, n) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    })(e, n);
  };
  return function (e, n) {
    function r() {
      this.constructor = e;
    }
    t(e, n);
    e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
!function (t) {
  function e(e) {
    if (void 0 === e) {
      e = 500;
    }
    return t.call(this, new i.a(), e) || this;
  }
  o(e, t);
}(r.a);