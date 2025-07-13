"use strict";

export { i as warning };
export { o as note };
exports.resetWarned = function () {
  r = {};
};
export { a as call };
export { s as warningOnce };
exports.noteOnce = function (e, t) {
  a(o, e, t);
};
var r = {};
function i(e, t) {
  0;
}
function o(e, t) {
  0;
}
function a(e, t, n) {
  if (!(t || r[n])) {
    e(!1, n);
    r[n] = !0;
  }
}
function s(e, t) {
  a(i, e, t);
}
var c = s;
export default c;