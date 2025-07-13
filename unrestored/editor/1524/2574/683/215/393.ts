"use strict";

export { i as a };
import * as r from "./293";
function i(e) {
  return function t(n) {
    return 0 === arguments.length || Object(r.a)(n) ? t : e.apply(this, arguments);
  };
}