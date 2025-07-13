"use strict";

exports.is_block_json = function (e) {
  return "input" !== e.type && "next" !== e.type && void 0 !== e.type;
};
exports.is_comment_json = function (e) {
  return void 0 !== e.color_theme;
};
exports.is_connection_json = function (e) {
  return "input" === e.type || "next" === e.type;
};