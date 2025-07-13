"use strict";

export { i as a };
import * as r from "../270/1499";
function i(e) {
  if ("string" !== typeof e) {
    throw new Error(Object(r.a)(7));
  }
  return e.charAt(0).toUpperCase() + e.slice(1);
}