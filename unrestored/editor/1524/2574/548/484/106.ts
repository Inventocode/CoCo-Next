"use strict";

function r(e, t) {
  if (t.length < e) {
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
  }
}
export { r as a };