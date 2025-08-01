"use strict";

module.exports = function (e) {
  for (var t, n = 0, r = e.length, i = 0; i < r;) {
    n++;
    if ((t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < r && 56320 == (64512 & (t = e.charCodeAt(i)))) {
      i++;
    }
  }
  return n;
};