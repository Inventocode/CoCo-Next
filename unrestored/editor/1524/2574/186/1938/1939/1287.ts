"use strict";

var r = require("../442");
function i(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
module.exports = function (e, t, n) {
  if (!t) {
    return e;
  }
  var o;
  if (n) {
    o = n(t);
  } else if (r.isURLSearchParams(t)) {
    o = t.toString();
  } else {
    var a = [];
    r.forEach(t, function (e, t) {
      if (null !== e && "undefined" !== typeof e) {
        if (r.isArray(e)) {
          t += "[]";
        } else {
          e = [e];
        }
        r.forEach(e, function (e) {
          if (r.isDate(e)) {
            e = e.toISOString();
          } else {
            if (r.isObject(e)) {
              e = JSON.stringify(e);
            }
          }
          a.push(i(t) + "=" + i(e));
        });
      }
    });
    o = a.join("&");
  }
  if (o) {
    var s = e.indexOf("#");
    if (-1 !== s) {
      e = e.slice(0, s);
    }
    e += (-1 === e.indexOf("?") ? "?" : "&") + o;
  }
  return e;
};