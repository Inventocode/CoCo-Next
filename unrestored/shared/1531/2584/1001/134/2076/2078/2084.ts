"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Request = void 0;
var r = require("../../713");
var i = function () {
  function e(e, t, n, i, o) {
    this.id = r.id();
    this.serviceIdentifier = e;
    this.parentContext = t;
    this.parentRequest = n;
    this.target = o;
    this.childRequests = [];
    this.bindings = Array.isArray(i) ? i : [i];
    this.requestScope = null === n ? new Map() : null;
  }
  e.prototype.addChildRequest = function (t, n, r) {
    var i = new e(t, this.parentContext, this, n, r);
    this.childRequests.push(i);
    return i;
  };
  return e;
}();
exports.Request = i;