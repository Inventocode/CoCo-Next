"use strict";

function r(e) {
  return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
export { o as a };
var i = require("../292");
function o(e, t) {
  return !t || "object" !== r(t) && "function" !== typeof t ? Object(i.a)(e) : t;
}
export default o;