"use strict";

var r = require("./2225/index");
var i = require("../757/index").toHash;
module.exports = function () {
  var e = [{
    type: "number",
    rules: [{
      maximum: ["exclusiveMaximum"]
    }, {
      minimum: ["exclusiveMinimum"]
    }, "multipleOf", "format"]
  }, {
    type: "string",
    rules: ["maxLength", "minLength", "pattern", "format"]
  }, {
    type: "array",
    rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
  }, {
    type: "object",
    rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
      properties: ["additionalProperties", "patternProperties"]
    }]
  }, {
    rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
  }];
  var t = ["type", "$comment"];
  e.all = i(t);
  e.types = i(["number", "integer", "string", "array", "object", "boolean", "null"]);
  e.forEach(function (n) {
    n.rules = n.rules.map(function (n) {
      var i;
      if ("object" == typeof n) {
        var o = Object.keys(n)[0];
        i = n[o];
        n = o;
        i.forEach(function (n) {
          t.push(n);
          e.all[n] = !0;
        });
      }
      t.push(n);
      return e.all[n] = {
        keyword: n,
        code: r[n],
        implements: i
      };
    });
    e.all.$comment = {
      keyword: "$comment",
      code: r.$comment
    };
    if (n.type) {
      e.types[n.type] = n;
    }
  });
  e.keywords = i(t.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"]));
  e.custom = {};
  return e;
};