"use strict";

var r = require("../../442");
var i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function (e) {
  var t;
  var n;
  var o;
  var a = {};
  return e ? (r.forEach(e.split("\n"), function (e) {
    if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
      if (a[t] && i.indexOf(t) >= 0) {
        return;
      }
      a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n;
    }
  }), a) : a;
};