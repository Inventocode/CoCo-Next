"use strict";

var r = String.prototype.replace;
var i = /%20/g;
var o = "RFC1738";
var a = "RFC3986";
module.exports = {
  default: a,
  formatters: {
    RFC1738: function (e) {
      return r.call(e, i, "+");
    },
    RFC3986: function (e) {
      return String(e);
    }
  },
  RFC1738: o,
  RFC3986: a
};