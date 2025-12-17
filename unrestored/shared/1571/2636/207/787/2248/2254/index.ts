/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2254
 */

"use strict"

var r = require("../../500")
var i = require("./2255/index")
var o = require("./2289")
module.exports = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  var t = new i(r({
    meta: false,
    useDefaults: true,
    validateSchema: false,
    missingRefs: "ignore",
    verbose: true,
    schemaId: "auto"
  }, e))
  t.addMetaSchema(o)
  t._opts.defaultMeta = o.id
  return t
}
