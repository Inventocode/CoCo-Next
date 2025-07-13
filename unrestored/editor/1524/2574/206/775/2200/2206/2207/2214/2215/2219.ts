"use strict";

module.exports = function (e, t, n) {
  var r = " ";
  var i = e.schema[t];
  var o = e.errSchemaPath + "/" + t;
  var a = (e.opts.allErrors, e.util.toQuotedString(i));
  if (!0 === e.opts.$comment) {
    r += " console.log(" + a + ");";
  } else {
    if ("function" == typeof e.opts.$comment) {
      r += " self._opts.$comment(" + a + ", " + e.util.toQuotedString(o) + ", validate.root.schema);";
    }
  }
  return r;
};