"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t, n) {
  if (t && n) {
    t[e] = Array.from(new Set([].concat(t[e], n[e]).filter(Boolean)));
  }
};