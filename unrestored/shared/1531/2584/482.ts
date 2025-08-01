"use strict";

export { i as a };
var r = require("./20");
function i(e, t) {
  var n = Object(r.a)({}, e);
  if (Array.isArray(t)) {
    t.forEach(function (e) {
      delete n[e];
    });
  }
  return n;
}
export default i;