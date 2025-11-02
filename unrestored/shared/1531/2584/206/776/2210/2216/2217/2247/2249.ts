/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2249
 */

"use strict"

var r = require("../1342")
module.exports = {
  $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
  definitions: {
    simpleTypes: r.definitions.simpleTypes
  },
  type: "object",
  dependencies: {
    schema: ["validate"],
    $data: ["validate"],
    statements: ["inline"],
    valid: {
      not: {
        required: ["macro"]
      }
    }
  },
  properties: {
    type: r.properties.type,
    schema: {
      type: "boolean"
    },
    statements: {
      type: "boolean"
    },
    dependencies: {
      type: "array",
      items: {
        type: "string"
      }
    },
    metaSchema: {
      type: "object"
    },
    modifying: {
      type: "boolean"
    },
    valid: {
      type: "boolean"
    },
    $data: {
      type: "boolean"
    },
    async: {
      type: "boolean"
    },
    errors: {
      anyOf: [{
        type: "boolean"
      }, {
        const: "full"
      }]
    }
  }
}
