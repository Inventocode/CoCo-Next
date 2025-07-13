"use strict";

exports.declare = function (e) {
  return function (t, n, i) {
    for (var o, s, u = 0, l = Object.keys(r); u < l.length; u++) {
      var p;
      var f = l[u];
      if (!t[f]) {
        (s = null != (p = s) ? p : a(t))[f] = r[f](s);
      }
    }
    return e(null != (o = s) ? o : t, n || {}, i);
  };
};
var r = {
  assertVersion: function (e) {
    return function (t) {
      !function (e, t) {
        if ("number" === typeof e) {
          if (!Number.isInteger(e)) {
            throw new Error("Expected string or integer value.");
          }
          e = "^".concat(e, ".0.0-0");
        }
        if ("string" !== typeof e) {
          throw new Error("Expected string or integer value.");
        }
        var n;
        var r = Error.stackTraceLimit;
        if ("number" === typeof r && r < 25) {
          Error.stackTraceLimit = 25;
        }
        n = "7." === t.slice(0, 2) ? new Error('Requires Babel "^7.0.0-beta.41", but was loaded with "'.concat(t, '". ') + "You'll need to update your @babel/core version.") : new Error('Requires Babel "'.concat(e, '", but was loaded with "').concat(t, '". ') + 'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');
        if ("number" === typeof r) {
          Error.stackTraceLimit = r;
        }
        throw Object.assign(n, {
          code: "BABEL_VERSION_UNSUPPORTED",
          version: t,
          range: e
        });
      }(t, e.version);
    };
  },
  targets: function () {
    return function () {
      return {};
    };
  },
  assumption: function () {
    return function () {};
  }
};
function a(e) {
  var t = null;
  if ("string" === typeof e.version && /^7\./.test(e.version)) {
    if (!(!(t = Object.getPrototypeOf(e)) || i(t, "version") && i(t, "transform") && i(t, "template") && i(t, "types"))) {
      t = null;
    }
  }
  return Object.assign({}, t, e);
}
function i(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}