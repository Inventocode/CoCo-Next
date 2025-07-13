"use strict";

export { s as a };
import * as r from "../1501/index";
import * as i from "../265";
import * as o from "../350";
import * as a from "../218";
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