"use strict";

exports.clear = function () {
  a();
  s();
};
export { a as clearPath };
export { s as clearScope };
var r = new WeakMap();
export { r as path };
var i = new WeakMap();
function a() {
  exports.path = r = new WeakMap();
}
function s() {
  exports.scope = i = new WeakMap();
}
export { i as scope };