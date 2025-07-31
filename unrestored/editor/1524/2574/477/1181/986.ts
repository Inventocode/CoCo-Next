"use strict";

export { r as a };
function r(e) {
  try {
    return e && "function" === typeof e && e.name || "<anonymous>";
  } catch (t) {
    return "<anonymous>";
  }
}
export default r;