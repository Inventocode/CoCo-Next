"use strict";

exports.merge = function (e, t) {
  var n = t.placeholderWhitelist;
  var r = void 0 === n ? e.placeholderWhitelist : n;
  var i = t.placeholderPattern;
  var a = void 0 === i ? e.placeholderPattern : i;
  var s = t.preserveComments;
  var o = void 0 === s ? e.preserveComments : s;
  var l = t.syntacticPlaceholders;
  var u = void 0 === l ? e.syntacticPlaceholders : l;
  return {
    parser: Object.assign({}, e.parser, t.parser),
    placeholderWhitelist: r,
    placeholderPattern: a,
    preserveComments: o,
    syntacticPlaceholders: u
  };
};
exports.normalizeReplacements = function (e) {
  if (Array.isArray(e)) {
    return e.reduce(function (e, t, n) {
      e["$" + n] = t;
      return e;
    }, {});
  }
  if ("object" === typeof e || null == e) {
    return e || void 0;
  }
  throw new Error("Template replacements must be an array, object, null, or undefined");
};
exports.validate = function (e) {
  if (null != e && "object" !== typeof e) {
    throw new Error("Unknown template options.");
  }
  var t = e || {};
  var n = t.placeholderWhitelist;
  var i = t.placeholderPattern;
  var a = t.preserveComments;
  var s = t.syntacticPlaceholders;
  var o = function (e, t) {
    if (null == e) {
      return {};
    }
    var n;
    var r;
    var i = {};
    var a = Object.keys(e);
    for (r = 0; r < a.length; r++) {
      n = a[r];
      if (!(t.indexOf(n) >= 0)) {
        i[n] = e[n];
      }
    }
    return i;
  }(t, r);
  if (null != n && !(n instanceof Set)) {
    throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
  }
  if (null != i && !(i instanceof RegExp) && !1 !== i) {
    throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
  }
  if (null != a && "boolean" !== typeof a) {
    throw new Error("'.preserveComments' must be a boolean, null, or undefined");
  }
  if (null != s && "boolean" !== typeof s) {
    throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
  }
  if (!0 === s && (null != n || null != i)) {
    throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
  }
  return {
    parser: o,
    placeholderWhitelist: n || void 0,
    placeholderPattern: null == i ? void 0 : i,
    preserveComments: null == a ? void 0 : a,
    syntacticPlaceholders: null == s ? void 0 : s
  };
};
var r = ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"];