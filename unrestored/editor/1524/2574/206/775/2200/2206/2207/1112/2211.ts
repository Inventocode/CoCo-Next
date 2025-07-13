"use strict";

var r = module.exports = function (e, t, n) {
  if ("function" == typeof t) {
    n = t;
    t = {};
  }
  (function e(t, n, i, o, a, s, c, u, l, f) {
    if (o && "object" == typeof o && !Array.isArray(o)) {
      for (var h in n(o, a, s, c, u, l, f), o) {
        var d = o[h];
        if (Array.isArray(d)) {
          if (h in r.arrayKeywords) {
            for (var p = 0; p < d.length; p++) {
              e(t, n, i, d[p], a + "/" + h + "/" + p, s, a, h, o, p);
            }
          }
        } else if (h in r.propsKeywords) {
          if (d && "object" == typeof d) {
            for (var _ in d) e(t, n, i, d[_], a + "/" + h + "/" + _.replace(/~/g, "~0").replace(/\//g, "~1"), s, a, h, o, _);
          }
        } else if (h in r.keywords || t.allKeys && !(h in r.skipKeywords)) {
          e(t, n, i, d, a + "/" + h, s, a, h, o);
        }
      }
      i(o, a, s, c, u, l, f);
    }
  })(t, "function" == typeof (n = t.cb || n) ? n : n.pre || function () {}, n.post || function () {}, e, "", e);
};
r.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0
};
r.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
r.propsKeywords = {
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
r.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};