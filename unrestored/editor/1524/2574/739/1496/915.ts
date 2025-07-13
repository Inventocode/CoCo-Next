"use strict";

export { o as a };
import * as r from "../../75/index";
import * as i from "../../75/index";
function o(e, t, n, r) {
  var o = i.a.unstable_batchedUpdates ? function (e) {
    i.a.unstable_batchedUpdates(n, e);
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
}