"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("../../715");
var i = function () {
  function e(e) {
    this.id = r.id();
    this.container = e;
  }
  e.prototype.addPlan = function (e) {
    this.plan = e;
  };
  e.prototype.setCurrentRequest = function (e) {
    this.currentRequest = e;
  };
  return e;
}();
exports.Context = i;