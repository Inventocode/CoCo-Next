"use strict";

import * as r from "../../713";
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
export { i as Context };