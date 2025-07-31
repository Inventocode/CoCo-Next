"use strict";

export { a };
var r = require("./905");
var i = require("./1434");
var o = require("../10/768");
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return Object(r.a)(e);
    }
  }(e) || Object(i.a)(e) || Object(o.a)(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
export default a;