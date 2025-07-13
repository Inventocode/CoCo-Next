"use strict";

export default (function (e, t, n) {
  if (t && n) {
    t[e] = Array.from(new Set([].concat(t[e], n[e]).filter(Boolean)));
  }
});