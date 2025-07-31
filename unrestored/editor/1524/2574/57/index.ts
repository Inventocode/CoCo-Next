"use strict";

export { i as a };
var r = require("./770");
function i(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function");
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  });
  if (t) {
    Object(r.a)(e, t);
  }
}
export default i;