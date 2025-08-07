"use strict";

function r(e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
}
export { r as a };
export default r;