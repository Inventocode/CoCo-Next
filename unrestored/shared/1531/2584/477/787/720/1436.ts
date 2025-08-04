"use strict";

export { s as a };
var r = require("../1508");
var i = require("../265");
var o = require("../350");
var a = require("../218");
function s() {
  Object(r.a)({
    callback: c,
    type: "error"
  });
  Object(r.a)({
    callback: c,
    type: "unhandledrejection"
  });
}
function c() {
  var e = Object(a.b)();
  if (e) {
    i.a.log("[Tracing] Transaction: " + o.a.InternalError + " -> Global error occured");
    e.setStatus(o.a.InternalError);
  }
}
export default s;