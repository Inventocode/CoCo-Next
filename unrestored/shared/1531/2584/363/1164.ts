"use strict";

var r = {};
function i(e, t) {
  0;
}
function o(e, t, n) {
  if (!(t || r[n])) {
    e(false, n);
    r[n] = true;
  }
}
exports.a = function (e, t) {
  o(i, e, t);
};