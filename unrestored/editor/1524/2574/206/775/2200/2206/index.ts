"use strict";

var r = require("../../841");
var i = require("./2207/index");
var o = require("./2241");
module.exports = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  var t = new i(r({
    meta: !1,
    useDefaults: !0,
    validateSchema: !1,
    missingRefs: "ignore",
    verbose: !0,
    schemaId: "auto"
  }, e));
  t.addMetaSchema(o);
  t._opts.defaultMeta = o.id;
  return t;
};