"use strict";

var r = require("../73/index");
var i = function () {
  function t(t, e, n, i, o) {
    this.value = t;
    this.startEnd = e;
    this.value = t;
    this.startEnd = e;
    this.resultPoints = new Array();
    this.resultPoints.push(new r.a(n, o));
    this.resultPoints.push(new r.a(i, o));
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
      return false;
    }
    var n = e;
    return this.value === n.value;
  };
  t.prototype.hashCode = function () {
    return this.value;
  };
  return t;
}();
exports.a = i;