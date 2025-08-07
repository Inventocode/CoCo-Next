"use strict";

var r = require("../../842");
var i = require("./2217/index");
var o = require("./2251");
module.exports = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  var t = new i(r({
    meta: false,
    useDefaults: true,
    validateSchema: false,
    missingRefs: "ignore",
    verbose: true,
    schemaId: "auto"
  }, e));
  t.addMetaSchema(o);
  t._opts.defaultMeta = o.id;
  return t;
};