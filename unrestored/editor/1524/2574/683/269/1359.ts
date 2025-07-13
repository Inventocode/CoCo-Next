"use strict";

import * as r from "./2325/444";
import * as i from "./359";
import * as o from "./2330/498";
import * as a from "./645";
var s = function () {
  function e(e) {
    this._cb = e;
  }
  e.prototype.unwrap = function () {
    return this._cb();
  };
  return e;
}();
export { s as LazyServiceIdentifer };
exports.inject = function (e) {
  return function (t, n, s) {
    if (void 0 === e) {
      throw new Error(r.UNDEFINED_INJECT_ANNOTATION(t.name));
    }
    var c = new o.Metadata(i.INJECT_TAG, e);
    if ("number" === typeof s) {
      a.tagParameter(t, n, s, c);
    } else {
      a.tagProperty(t, n, c);
    }
  };
};