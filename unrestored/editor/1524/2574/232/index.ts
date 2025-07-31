"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r;
var o = (r = require("./1505")) && r.__esModule ? r : {
  default: r
};
var i = function (e, t) {
  if ("throw" === t) {
    throw new Error(e);
  }
  if ("warn" === t) {
    console.warn(e);
  }
  return null;
};
exports.default = function (e, t, n) {
  var r = Object.keys(t);
  var a = n || {};
  var s = a.handleMissingStyleName;
  var c = void 0 === s ? o.default.handleMissingStyleName : s;
  var l = a.autoResolveMultipleImports;
  var u = void 0 === l ? o.default.autoResolveMultipleImports : l;
  return e ? e.split(" ").filter(function (e) {
    return e;
  }).map(function (e) {
    if (function (e) {
      return -1 !== e.indexOf(".");
    }(e)) {
      return function (e, t, n) {
        var r = e.split(".");
        var a = r[0];
        var s = r[1];
        var c = n || o.default.handleMissingStyleName;
        return s ? t[a] ? t[a][s] ? t[a][s] : i("CSS module does not exist: " + s, c) : i("CSS module import does not exist: " + a, c) : i("Invalid style name: " + e, c);
      }(e, t, c);
    }
    if (0 === r.length) {
      throw new Error("Cannot use styleName attribute for style name '" + e + "' without importing at least one stylesheet.");
    }
    if (r.length > 1) {
      if (!u) {
        throw new Error("Cannot use anonymous style name '" + e + "' with more than one stylesheet import without setting 'autoResolveMultipleImports' to true.");
      }
      return function (e, t, n) {
        var r = n || o.default.handleMissingStyleName;
        var a = Object.keys(t).map(function (n) {
          return t[n][e] && n;
        }).filter(function (e) {
          return e;
        });
        if (a.length > 1) {
          throw new Error('Cannot resolve styleName "' + e + '" because it is present in multiple imports:\n\n\t' + a.join("\n\t") + '\n\nYou can resolve this by using a named import, e.g:\n\n\timport foo from "' + a[0] + '";\n\t<div styleName="foo.' + e + '" />\n\n');
        }
        return 0 === a.length ? i("Could not resolve the styleName '" + e + "'.", r) : t[a[0]][e];
      }(e, t, c);
    }
    var n = t[r[0]];
    return n[e] ? n[e] : i("Could not resolve the styleName '" + e + "'.", c);
  }).filter(function (e) {
    return e;
  }).join(" ") : "";
};