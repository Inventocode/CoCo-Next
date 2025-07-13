"use strict";

import * as r from "../1659/241";
module.exports = function () {
  var e = r(this);
  var t = "";
  if (e.global) {
    t += "g";
  }
  if (e.ignoreCase) {
    t += "i";
  }
  if (e.multiline) {
    t += "m";
  }
  if (e.dotAll) {
    t += "s";
  }
  if (e.unicode) {
    t += "u";
  }
  if (e.sticky) {
    t += "y";
  }
  return t;
};