"use strict";

export { o as b };
export { i as a };
import r = require("./205");
function o(e) {
  switch (e) {
    case r.a.CONTAIN:
      return "contain";
    case r.a.COVER:
      return "cover";
    case r.a.STRETCH:
      return "fill";
    default:
      return "cover";
  }
}
function i(e) {
  switch (e) {
    case r.a.CONTAIN:
      return "contain";
    case r.a.COVER:
      return "cover";
    case r.a.STRETCH:
      return "100% 100%";
    default:
      return "cover";
  }
}
export default i;