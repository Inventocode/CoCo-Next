"use strict";

function r(e, t, n) {
  if (undefined === n) {
    n = Error;
  }
  if (!e) {
    throw new n(t);
  }
}
export { r as a };
export default r;