"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = e.node.sourceType;
  if ("module" !== t && "script" !== t) {
    throw e.buildCodeFrameError('Unknown sourceType "'.concat(t, '", cannot transform.'));
  }
  return "module" === e.node.sourceType;
};