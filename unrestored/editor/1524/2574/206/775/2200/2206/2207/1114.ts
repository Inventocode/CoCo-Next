"use strict";

import * as r from "./1112/index";
function i(e, t, n) {
  this.message = n || i.message(e, t);
  this.missingRef = r.url(e, t);
  this.missingSchema = r.normalizeId(r.fullPath(this.missingRef));
}
function o(e) {
  e.prototype = Object.create(Error.prototype);
  e.prototype.constructor = e;
  return e;
}
module.exports = {
  Validation: o(function (e) {
    this.message = "validation failed";
    this.errors = e;
    this.ajv = this.validation = !0;
  }),
  MissingRef: o(i)
};
i.message = function (e, t) {
  return "can't resolve reference " + t + " from id " + e;
};