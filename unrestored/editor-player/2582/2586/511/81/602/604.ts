"use strict";

var n = require("../73/index");
var o = function () {
  function t(t, e, r, o, i) {
    this.value = t;
    this.startEnd = e;
    this.value = t;
    this.startEnd = e;
    this.resultPoints = new Array();
    this.resultPoints.push(new n.a(r, i));
    this.resultPoints.push(new n.a(o, i));
  }
  t.prototype.getValue = function () {
    return this.value;
  };
  t.prototype.getStartEnd = function () {
    return this.startEnd;
  };
  t.prototype.getResultPoints = function () {
    return this.resultPoints;
  };
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return !1;
    }
    var r = e;
    return this.value === r.value;
  };
  t.prototype.hashCode = function () {
    return this.value;
  };
  return t;
}();
exports.a = o;