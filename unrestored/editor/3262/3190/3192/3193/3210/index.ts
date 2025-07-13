"use strict";

export default (function (e) {
  var t = e.map(function (e) {
    return e.typeAnnotation;
  });
  var n = (0, a.default)(t);
  return 1 === n.length ? n[0] : (0, r.tsUnionType)(n);
});
import * as r from "../2632/index";
import * as a from "./3211";