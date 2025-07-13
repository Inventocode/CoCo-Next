"use strict";

export default (function (e) {
  for (var t = e.params, n = 0; n < t.length; n++) {
    var r = t[n];
    if (i(r) || a(r)) {
      return n;
    }
  }
  return t.length;
});
import * as r from "../../../../2624/index";
var i = r.isAssignmentPattern;
var a = r.isRestElement;