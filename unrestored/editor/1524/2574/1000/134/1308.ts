"use strict";

import * as r from "./358";
import * as i from "./2088/496";
exports.traverseAncerstors = function e(t, n) {
  var r = t.parentRequest;
  return null !== r && (!!n(r) || e(r, n));
};
var o = function (e) {
  return function (t) {
    var n = function (n) {
      return null !== n && null !== n.target && n.target.matchesTag(e)(t);
    };
    n.metaData = new i.Metadata(e, t);
    return n;
  };
};
export { o as taggedConstraint };
var a = o(r.NAMED_TAG);
export { a as namedConstraint };
exports.typeConstraint = function (e) {
  return function (t) {
    var n = null;
    if (null !== t) {
      if (n = t.bindings[0], "string" === typeof e) {
        return n.serviceIdentifier === e;
      }
      var r = t.bindings[0].implementationType;
      return e === r;
    }
    return !1;
  };
};