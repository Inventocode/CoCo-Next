"use strict";

export { i as a };
import r = require("../215/293");
function i(e) {
  return function t(n) {
    return 0 === arguments.length || r.a(n) ? t : e.apply(this, arguments);
  };
}
export default i;