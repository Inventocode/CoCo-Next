"use strict";

var r = require("./260");
var i = require("../590");
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
    if (void 0 === e) {
      e = null;
    }
    if (void 0 === n) {
      n = 500;
    }
    var r = new i.a();
    r.setHints(e);
    return t.call(this, r, n) || this;
  }
  o(e, t);
  e.prototype.decodeBitmap = function (t) {
    return this.reader.decodeWithState(t);
  };
}(r.a);