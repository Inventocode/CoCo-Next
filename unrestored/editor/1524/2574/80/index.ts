"use strict";

export { a };
import * as r from "./906";
import * as i from "./994";
import * as o from "./771";
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return Object(r.a)(e);
    }
  }(e) || Object(i.a)(e) || Object(o.a)(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}