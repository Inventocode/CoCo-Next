"use strict";

export { i as b };
export { o as a };
var r = require("react");
var i = r.isValidElement;
function o(e, t) {
  return function (e, t, n) {
    return i(e) ? r.cloneElement(e, "function" === typeof n ? n(e.props || {}) : n) : t;
  }(e, e, t);
}
export default o;