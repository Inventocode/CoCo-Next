/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2221
 */

"use strict";

var r = module.exports = function (e, t, n) {
  if ("function" == typeof t) {
    n = t;
    t = {};
  }
  (function e(t, n, i, o, a, s, c, u, l, f) {
    if (o && "object" == typeof o && !Array.isArray(o)) {
      for (var d in n(o, a, s, c, u, l, f), o) {
        var h = o[d];
        if (Array.isArray(h)) {
          if (d in r.arrayKeywords) {
            for (var p = 0; p < h.length; p++) {
              e(t, n, i, h[p], a + "/" + d + "/" + p, s, a, d, o, p);
            }
          }
        } else if (d in r.propsKeywords) {
          if (h && "object" == typeof h) {
            for (var _ in h) e(t, n, i, h[_], a + "/" + d + "/" + _.replace(/~/g, "~0").replace(/\//g, "~1"), s, a, d, o, _);
          }
        } else if (d in r.keywords || t.allKeys && !(d in r.skipKeywords)) {
          e(t, n, i, h, a + "/" + d, s, a, d, o);
        }
      }
      i(o, a, s, c, u, l, f);
    }
  })(t, "function" == typeof (n = t.cb || n) ? n : n.pre || function () {}, n.post || function () {}, e, "", e);
};
r.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true
};
r.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};
r.propsKeywords = {
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true
};
r.skipKeywords = {
  default: true,
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};