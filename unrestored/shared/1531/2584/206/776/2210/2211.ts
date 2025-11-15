/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2211
 */

"use strict"

var r = require("../842")
var i = {
  $schema: {
    type: "string"
  },
  env: {
    type: "object"
  },
  extends: {
    $ref: "#/definitions/stringOrStrings"
  },
  globals: {
    type: "object"
  },
  overrides: {
    type: "array",
    items: {
      $ref: "#/definitions/overrideConfig"
    },
    additionalItems: false
  },
  parser: {
    type: ["string", "null"]
  },
  parserOptions: {
    type: "object"
  },
  plugins: {
    type: "array"
  },
  processor: {
    type: "string"
  },
  rules: {
    type: "object"
  },
  settings: {
    type: "object"
  },
  noInlineConfig: {
    type: "boolean"
  },
  reportUnusedDisableDirectives: {
    type: "boolean"
  },
  ecmaFeatures: {
    type: "object"
  }
}
var o = {
  definitions: {
    stringOrStrings: {
      oneOf: [{
        type: "string"
      }, {
        type: "array",
        items: {
          type: "string"
        },
        additionalItems: false
      }]
    },
    stringOrStringsRequired: {
      oneOf: [{
        type: "string"
      }, {
        type: "array",
        items: {
          type: "string"
        },
        additionalItems: false,
        minItems: 1
      }]
    },
    objectConfig: {
      type: "object",
      properties: r({
        root: {
          type: "boolean"
        },
        ignorePatterns: {
          $ref: "#/definitions/stringOrStrings"
        }
      }, i),
      additionalProperties: false
    },
    overrideConfig: {
      type: "object",
      properties: r({
        excludedFiles: {
          $ref: "#/definitions/stringOrStrings"
        },
        files: {
          $ref: "#/definitions/stringOrStringsRequired"
        }
      }, i),
      required: ["files"],
      additionalProperties: false
    }
  },
  $ref: "#/definitions/objectConfig"
}
module.exports = o
