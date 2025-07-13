"use strict";

export default (function (e) {
  var t = e.node.sourceType;
  if ("module" !== t && "script" !== t) {
    throw e.buildCodeFrameError('Unknown sourceType "'.concat(t, '", cannot transform.'));
  }
  return "module" === e.node.sourceType;
});