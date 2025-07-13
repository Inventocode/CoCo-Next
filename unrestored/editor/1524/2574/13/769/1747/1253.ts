"use strict";

import * as r from "../568";
export default (function (e, t, n, r) {
  var o = i.default.unstable_batchedUpdates ? function (e) {
    i.default.unstable_batchedUpdates(n, e);
  } : n;
  if (e.addEventListener) {
    e.addEventListener(t, o, r);
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o);
      }
    }
  };
});
var i = r(require("../../../75/index"));