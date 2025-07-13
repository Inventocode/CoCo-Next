"use strict";

import * as r from "../../445";
module.exports = r.isStandardBrowserEnv() ? {
  write: function (e, t, n, i, o, a) {
    var s = [];
    s.push(e + "=" + encodeURIComponent(t));
    if (r.isNumber(n)) {
      s.push("expires=" + new Date(n).toGMTString());
    }
    if (r.isString(i)) {
      s.push("path=" + i);
    }
    if (r.isString(o)) {
      s.push("domain=" + o);
    }
    if (!0 === a) {
      s.push("secure");
    }
    document.cookie = s.join("; ");
  },
  read: function (e) {
    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
    return t ? decodeURIComponent(t[3]) : null;
  },
  remove: function (e) {
    this.write(e, "", Date.now() - 864e5);
  }
} : {
  write: function () {},
  read: function () {
    return null;
  },
  remove: function () {}
};