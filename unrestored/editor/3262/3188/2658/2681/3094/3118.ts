"use strict";

function r() {
  var e = require("../../2691/2657");
  r = function () {
    return e;
  };
  return e;
}
export { s as makeConfigAPI };
exports.makePluginAPI = function (e) {
  return Object.assign({}, o(e), {
    assumption: function (t) {
      return e.using(function (e) {
        return e.assumptions[t];
      });
    }
  });
};
export { o as makePresetAPI };
import * as i from "../../index";
import * as a from "./2684";
import "./2802";
function s(e) {
  return {
    version: i.version,
    cache: e.simple(),
    env: function (t) {
      return e.using(function (e) {
        return "undefined" === typeof t ? e.envName : "function" === typeof t ? (0, a.assertSimpleType)(t(e.envName)) : (Array.isArray(t) || (t = [t]), t.some(function (t) {
          if ("string" !== typeof t) {
            throw new Error("Unexpected non-string value");
          }
          return t === e.envName;
        }));
      });
    },
    async: function () {
      return !1;
    },
    caller: function (t) {
      return e.using(function (e) {
        return (0, a.assertSimpleType)(t(e.caller));
      });
    },
    assertVersion: l
  };
}
function o(e) {
  return Object.assign({}, s(e), {
    targets: function () {
      return JSON.parse(e.using(function (e) {
        return JSON.stringify(e.targets);
      }));
    }
  });
}
function l(e) {
  if ("number" === typeof e) {
    if (!Number.isInteger(e)) {
      throw new Error("Expected string or integer value.");
    }
    e = "^".concat(e, ".0.0-0");
  }
  if ("string" !== typeof e) {
    throw new Error("Expected string or integer value.");
  }
  if (!r().satisfies(i.version, e)) {
    var t = Error.stackTraceLimit;
    if ("number" === typeof t && t < 25) {
      Error.stackTraceLimit = 25;
    }
    var n = new Error('Requires Babel "'.concat(e, '", but was loaded with "').concat(i.version, '". ') + 'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');
    throw "number" === typeof t && (Error.stackTraceLimit = t), Object.assign(n, {
      code: "BABEL_VERSION_UNSUPPORTED",
      version: i.version,
      range: e
    });
  }
}