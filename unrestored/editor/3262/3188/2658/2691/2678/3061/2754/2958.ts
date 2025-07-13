"use strict";

var r = /[|\\{}()[\]^$+*?.]/g;
module.exports = function (e) {
  if ("string" !== typeof e) {
    throw new TypeError("Expected a string");
  }
  return e.replace(r, "\\$&");
};