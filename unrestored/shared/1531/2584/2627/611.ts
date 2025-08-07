"use strict";

export { a };
export { s as b };
import r = require("../19");
import i = require("./605");
var o = r.a({}, i.a.Modal);
function a(e) {
  o = e ? r.a(r.a({}, o), e) : r.a({}, i.a.Modal);
}
function s() {
  return o;
}
export default a;