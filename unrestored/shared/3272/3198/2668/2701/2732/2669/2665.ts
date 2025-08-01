"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.clear = function () {
  a();
  s();
};
exports.clearPath = a;
exports.clearScope = s;
exports.scope = exports.path = void 0;
var r = new WeakMap();
exports.path = r;
var i = new WeakMap();
function a() {
  exports.path = r = new WeakMap();
}
function s() {
  exports.scope = i = new WeakMap();
}
exports.scope = i;