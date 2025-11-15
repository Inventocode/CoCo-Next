/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2224
 */

"use strict"

var r = require("./2225/index")
var /* [auto-meaningful-name] */require$$_757_index$toHash = require("../757/index").toHash
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
  }]
  var t = ["type", "$comment"]
  e.all = require$$_757_index$toHash(t)
  e.types = require$$_757_index$toHash(["number", "integer", "string", "array", "object", "boolean", "null"])
  e.forEach(function (n) {
    n.rules = n.rules.map(function (n) {
      var i
      if ("object" == typeof n) {
        var o = Object.keys(n)[0]
        i = n[o]
        n = o
        i.forEach(function (n) {
          t.push(n)
          e.all[n] = true
        })
      }
      t.push(n)
      return e.all[n] = {
        keyword: n,
        code: r[n],
        implements: i
      }
    })
    e.all.$comment = {
      keyword: "$comment",
      code: r.$comment
    }
    if (n.type) {
      e.types[n.type] = n
    }
  })
  e.keywords = require$$_757_index$toHash(t.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"]))
  e.custom = {}
  return e
}
