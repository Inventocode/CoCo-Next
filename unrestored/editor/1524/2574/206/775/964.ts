"use strict";

var r = /\r\n|[\n\r\u2028\u2029]/;
module.exports = {
  breakableTypePattern: /^(?:(?:Do)?While|For(?:In|Of)?|Switch)Statement$/,
  lineBreakPattern: r,
  createGlobalLinebreakMatcher: function () {
    return new RegExp(r.source, "gu");
  },
  shebangPattern: /^#!((?:(?![\n\r])[\s\S])+)/
};