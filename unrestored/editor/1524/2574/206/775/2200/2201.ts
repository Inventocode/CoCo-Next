"use strict";

import * as r from "../841";
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
    additionalItems: !1
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
};
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
        additionalItems: !1
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
        additionalItems: !1,
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
      additionalProperties: !1
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
      additionalProperties: !1
    }
  },
  $ref: "#/definitions/objectConfig"
};
module.exports = o;