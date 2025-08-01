"use strict";

export { a };
export { s as b };
var r = require("../19");
var i = require("./605");
var o = Object(r.a)({}, i.a.Modal);
function a(e) {
  o = e ? Object(r.a)(Object(r.a)({}, o), e) : Object(r.a)({}, i.a.Modal);
}
function s() {
  return o;
}
export default a;