"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.warning = i;
exports.note = o;
exports.resetWarned = function () {
  r = {};
};
exports.call = a;
exports.warningOnce = s;
exports.noteOnce = function (e, t) {
  a(o, e, t);
};
exports.default = void 0;
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
exports.default = c;