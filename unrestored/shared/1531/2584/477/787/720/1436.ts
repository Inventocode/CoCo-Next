"use strict";

export { s as a };
import r = require("../1508");
import i = require("../265");
import o = require("../350");
import a = require("../218");
function s() {
  r.a({
    callback: c,
    type: "error"
  });
  r.a({
    callback: c,
    type: "unhandledrejection"
  });
}
function c() {
  var e = a.b();
  if (e) {
    i.a.log("[Tracing] Transaction: " + o.a.InternalError + " -> Global error occured");
    e.setStatus(o.a.InternalError);
  }
}
export default s;