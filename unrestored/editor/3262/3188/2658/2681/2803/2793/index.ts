"use strict";

function r() {
  var e = require("./2794/index");
  r = function () {
    return e;
  };
  return e;
}
exports.resolveBrowserslistConfigFile = function (e, t) {
  return;
};
exports.resolveTargets = function (e, t) {
  var n = e.targets;
  if ("string" === typeof n || Array.isArray(n)) {
    n = {
      browsers: n
    };
  }
  if (n && n.esmodules) {
    n = Object.assign({}, n, {
      esmodules: "intersect"
    });
  }
  return (0, r().default)(n, {
    ignoreBrowserslistConfig: !0,
    browserslistEnv: e.browserslistEnv
  });
};