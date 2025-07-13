"use strict";

function r(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if (e) {
      e.current = t;
    }
  }
}
export { r as a };