"use strict";

import * as r from "./229";
exports.a = function (e, t) {
  var n;
  if (void 0 === t) {
    t = !0;
  }
  var i = new Promise(function (r) {
    n = setTimeout(r, e, t);
  });
  i[r.a] = function () {
    clearTimeout(n);
  };
  return i;
};