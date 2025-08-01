"use strict";

var r = require("../81/index");
var i = require("./261");
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
  function e(e, n) {
    return t.call(this, new r.AztecCodeReader(), e, n) || this;
  }
  o(e, t);
}(i.a);