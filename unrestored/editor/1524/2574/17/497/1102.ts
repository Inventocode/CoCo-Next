"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.no_event = exports.is_target_input = exports.is_right_button = void 0;
exports.is_right_button = function (e) {
  return 2 == e.button;
};
exports.is_target_input = function (e) {
  return e.target instanceof HTMLInputElement && ("textarea" == e.target.type || "text" == e.target.type || "number" == e.target.type || "email" == e.target.type || "password" == e.target.type || "search" == e.target.type || "tel" == e.target.type || "url" == e.target.type || e.target.isContentEditable);
};
exports.no_event = function (e) {
  e.preventDefault();
  e.stopPropagation();
};