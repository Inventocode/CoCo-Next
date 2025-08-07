"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is_connection_json = exports.is_comment_json = exports.is_block_json = undefined;
exports.is_block_json = function (e) {
  return "input" !== e.type && "next" !== e.type && undefined !== e.type;
};
exports.is_comment_json = function (e) {
  return undefined !== e.color_theme;
};
exports.is_connection_json = function (e) {
  return "input" === e.type || "next" === e.type;
};