/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2245
 */

"use strict";

var r = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
module.exports = function (e, t) {
  for (var n = 0; n < t.length; n++) {
    e = JSON.parse(JSON.stringify(e));
    var i;
    var o = t[n].split("/");
    var a = e;
    for (i = 1; i < o.length; i++) {
      a = a[o[i]];
    }
    for (i = 0; i < r.length; i++) {
      var s = r[i];
      var c = a[s];
      if (c) {
        a[s] = {
          anyOf: [c, {
            $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
          }]
        };
      }
    }
  }
  return e;
};