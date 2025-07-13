"use strict";

import * as r from "../358";
var i = function () {
  function e(e, t) {
    this.key = e;
    this.value = t;
  }
  e.prototype.toString = function () {
    return this.key === r.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
  };
  return e;
}();
export { i as Metadata };