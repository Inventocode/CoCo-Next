"use strict";

export { i as a };
var r = require("./1506");
function i(e) {
  if ("string" !== typeof e) {
    throw new Error(Object(r.a)(7));
  }
  return e.charAt(0).toUpperCase() + e.slice(1);
}
export default i;